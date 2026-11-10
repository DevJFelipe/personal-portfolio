import { useI18n } from '../../i18n/useI18n.js'
import './LanguageSwitch.css'

const OPTIONS = [
  { code: 'es', short: 'ES' },
  { code: 'en', short: 'EN' },
]

export function LanguageSwitch({ className = '' }) {
  const { lang, setLang, t } = useI18n()

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t('language.label')}>
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className="lang-switch__option"
          lang={option.code}
          aria-pressed={lang === option.code}
          aria-label={t(`language.${option.code}`)}
          title={t(`language.${option.code}`)}
          onClick={() => setLang(option.code)}
        >
          {option.short}
        </button>
      ))}
    </div>
  )
}
