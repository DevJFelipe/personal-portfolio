import { useCallback, useEffect, useMemo, useState } from 'react'
import { I18nContext, STORAGE_KEY, SUPPORTED_LANGS, detectInitialLang } from './context.js'
import { messages } from './messages.js'

function lookup(dict, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict)
}

function interpolate(text, vars) {
  if (!vars || typeof text !== 'string') return text
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match))
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-CO' : 'en'
  }, [lang])

  const setLang = useCallback((next) => {
    if (!SUPPORTED_LANGS.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* the choice still applies for this visit */
    }
  }, [])

  const value = useMemo(() => {
    const dict = messages[lang]
    const fallback = messages.es

    const t = (key, vars) => {
      const found = lookup(dict, key) ?? lookup(fallback, key)
      if (found === undefined) {
        if (import.meta.env.DEV) console.warn(`[i18n] Missing key: ${key}`)
        return key
      }
      return interpolate(found, vars)
    }

    // Content objects are written as { es, en }; plain values pass through.
    const pick = (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value) && ('es' in value || 'en' in value)) {
        return value[lang] ?? value.es
      }
      return value
    }

    return { lang, setLang, t, pick }
  }, [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
