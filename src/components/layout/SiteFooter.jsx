import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import logo from '../../assets/brand/logo.webp'
import { ArrowUp, Github, Linkedin, Mail, MapPin } from '../icons.js'
import './SiteFooter.css'

export function SiteFooter() {
  const { t, pick } = useI18n()
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__intro">
          <img src={logo} alt="DevJFelipe" width="132" height="94" />
          <p>{t('footer.tagline')}</p>
          <p className="site-footer__place">
            <MapPin aria-hidden="true" />
            {pick(profile.location)}
          </p>
        </div>

        <nav className="site-footer__col" aria-labelledby="footer-site">
          <h2 id="footer-site">{t('footer.site')}</h2>
          <ul>
            <li>
              <Link to="/">{t('nav.home')}</Link>
            </li>
            <li>
              <Link to="/about">{t('nav.about')}</Link>
            </li>
            <li>
              <Link to="/projects">{t('nav.projects')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('nav.contact')}</Link>
            </li>
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2>{t('footer.contact')}</h2>
          <ul>
            <li>
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>{t('footer.rights', { year })}</p>
        <p className="site-footer__built">{t('footer.built')}</p>
        <button type="button" className="text-action site-footer__top" onClick={scrollToTop}>
          {t('footer.top')}
          <ArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}
