import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { SiteFooter } from './SiteFooter.jsx'
import { SiteHeader } from './SiteHeader.jsx'
import './RootLayout.css'

export function RootLayout({ children }) {
  const { t } = useI18n()
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(pathname)

  // After client-side navigation, move focus to the new page so keyboard
  // and screen reader users start reading from its top.
  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        {t('nav.skip')}
      </a>
      <SiteHeader />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {children ?? <Outlet />}
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </>
  )
}
