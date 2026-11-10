import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import logo from '../../assets/brand/logo.webp'
import { Close, Github, Linkedin, Mail, Menu } from '../icons.js'
import { LanguageSwitch } from './LanguageSwitch.jsx'
import './SiteHeader.css'

const NAV_ITEMS = [
  { to: '/', key: 'home', end: true },
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/contact', key: 'contact' },
]

export function SiteHeader() {
  const { t } = useI18n()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState(null)
  const menuOpen = menuPath === pathname
  const dialogRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (menuOpen && !dialog.open) dialog.showModal()
    if (!menuOpen && dialog.open) dialog.close()
  }, [menuOpen])

  const closeMenu = () => setMenuPath(null)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={t('nav.homeLink')}>
          <img src={logo} alt="" width="132" height="94" />
        </Link>

        <nav className="site-nav" aria-label={t('nav.primary')}>
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <NavLink to={item.to} end={item.end} className="site-nav__link">
                  {t(`nav.${item.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <div className="site-header__social">
            <a className="social-icon" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin aria-hidden="true" />
            </a>
            <a className="social-icon" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github aria-hidden="true" />
            </a>
          </div>
          <LanguageSwitch />
          <Link to="/contact" className="btn btn--sm site-header__cta">
            {t('nav.cta')}
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-label={t('nav.openMenu')}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuPath(pathname)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="mobile-menu"
        aria-label={t('nav.primary')}
        onClose={closeMenu}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu()
        }}
      >
        <div className="mobile-menu__panel">
          <div className="mobile-menu__top">
            <LanguageSwitch />
            <button type="button" className="mobile-menu__close" aria-label={t('nav.closeMenu')} onClick={closeMenu}>
              <Close aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={t('nav.primary')}>
            <ul className="mobile-menu__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <NavLink to={item.to} end={item.end} className="mobile-menu__link" onClick={closeMenu}>
                    {t(`nav.${item.key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu__footer">
            <a className="mobile-menu__contact" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              {profile.email}
            </a>
            <div className="mobile-menu__social">
              <a className="social-icon" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin aria-hidden="true" />
              </a>
              <a className="social-icon" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  )
}
