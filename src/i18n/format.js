const LOCALES = { es: 'es', en: 'en-US' }

/** '2025-12' -> 'dic 2025' / 'Dec 2025'. Spanish short months come without a trailing period. */
export function formatMonth(value, lang) {
  if (!value) return ''
  const [year, month] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, (month || 1) - 1, 1))
  const text = new Intl.DateTimeFormat(LOCALES[lang] ?? 'es', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
  return text.replace('.', '')
}

/** Start and end months joined with an en dash. */
export function formatPeriod(start, end, lang) {
  return `${formatMonth(start, lang)} – ${formatMonth(end, lang)}`
}
