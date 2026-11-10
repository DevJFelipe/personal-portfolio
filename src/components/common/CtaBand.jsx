import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { Send } from '../icons.js'
import { CopyEmail } from './CopyEmail.jsx'
import './CtaBand.css'

export function CtaBand({ title, body, button, to = '/contact' }) {
  const { t } = useI18n()
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <h2 id="cta-title">{title ?? t('cta.title')}</h2>
          <p>{body ?? t('cta.body')}</p>
        </div>
        <div className="cta-band__actions">
          <Link to={to} className="btn btn--solid">
            <Send aria-hidden="true" />
            {button ?? t('cta.button')}
          </Link>
          <CopyEmail />
        </div>
      </div>
    </section>
  )
}
