import { Link } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import './NotFound.css'

export default function NotFound() {
  const { t } = useI18n()
  useDocumentMeta({ title: t('meta.notFoundTitle'), description: t('notFound.body') })

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.body')}</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--solid">
            {t('notFound.home')}
          </Link>
          <Link to="/projects" className="btn">
            {t('notFound.projects')}
          </Link>
        </div>
      </div>
    </section>
  )
}
