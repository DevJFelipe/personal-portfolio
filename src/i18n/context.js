import { createContext } from 'react'

export const SUPPORTED_LANGS = ['es', 'en']
export const STORAGE_KEY = 'portfolio:lang'

export const I18nContext = createContext(null)

/** Picks the language once: ?lang= in the URL, then the saved choice, then the browser. */
export function detectInitialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl
  } catch {
    /* ignore malformed URLs */
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGS.includes(saved)) return saved
  } catch {
    /* storage can be unavailable (private mode, blocked cookies) */
  }
  const browser = (navigator.languages?.[0] || navigator.language || 'es').toLowerCase()
  return browser.startsWith('es') ? 'es' : 'en'
}
