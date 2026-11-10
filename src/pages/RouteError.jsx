import { Link, isRouteErrorResponse, useRouteError } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { RootLayout } from '../components/layout/RootLayout.jsx'
import NotFound from './NotFound.jsx'
import './NotFound.css'

/** Shown when a route fails to render. Keeps the header and footer so the visitor can move on. */
export default function RouteError() {
  const error = useRouteError()
  const { t } = useI18n()

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <RootLayout>
        <NotFound />
      </RootLayout>
    )
  }

  if (import.meta.env.DEV) console.error(error)

  return (
    <RootLayout>
      <section className="not-found">
        <div className="container not-found__inner">
          <h1>{t('error.title')}</h1>
          <p>{t('error.body')}</p>
          <div className="not-found__actions">
            <button type="button" className="btn btn--solid" onClick={() => window.location.reload()}>
              {t('error.reload')}
            </button>
            <Link to="/" className="btn">
              {t('error.home')}
            </Link>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}
