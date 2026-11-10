import { useI18n } from '../../i18n/useI18n.js'
import { formatMonth } from '../../i18n/format.js'
import './Timeline.css'

/** Work history in reverse chronological order. 'compact' shows one line of context per role. */
export function Timeline({ items, variant = 'full', headingLevel = 3 }) {
  const { lang, pick } = useI18n()
  const Heading = `h${headingLevel}`

  return (
    <ol className={`timeline timeline--${variant}`}>
      {items.map((item) => (
        <li key={item.id} className="timeline__item">
          <p className="timeline__period tabular">
            <time dateTime={item.start}>{formatMonth(item.start, lang)}</time>
            {' – '}
            <time dateTime={item.end}>{formatMonth(item.end, lang)}</time>
          </p>
          <div className="timeline__body">
            <Heading className="timeline__company">{item.company}</Heading>
            <p className="timeline__role">{pick(item.role)}</p>
            <p className="timeline__context">
              {pick(item.context)} <span className="timeline__place">{pick(item.place)}</span>
            </p>
            {variant === 'full' && (
              <>
                <ul className="timeline__highlights">
                  {pick(item.highlights).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <ul className="chips">
                  {item.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
