import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import { profile } from '../../data/profile.js'
import heroIllustration from '../../assets/img/hero-illustration.webp'
import { CircleArrowRight, MapPin } from '../icons.js'
import './Hero.css'

export function Hero() {
  const { t, pick } = useI18n()
  const roles = t('hero.roles')
  const typed = useTypewriter(roles)

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__tag" style={{ '--order': 0 }}>
            {t('hero.tag')}
          </p>
          <h1 id="hero-title" className="hero__title" style={{ '--order': 1 }}>
            <span className="hero__line">
              {t('hero.greeting')} {profile.givenNames}
            </span>{' '}
            <span className="hero__line">{profile.familyNames}</span>
          </h1>
          <p className="hero__role" aria-hidden="true" style={{ '--order': 2 }}>
            <span className="hero__typed">{typed}</span>
          </p>
          <p className="visually-hidden">{t('hero.rolesLabel')}</p>
          <p className="hero__lead" style={{ '--order': 3 }}>
            {t('hero.lead')}
          </p>
          <div className="hero__actions" style={{ '--order': 4 }}>
            <Link to="/projects" className="btn btn--solid">
              {t('hero.primary')}
            </Link>
            <Link to="/contact" className="text-action hero__connect">
              {t('hero.secondary')}
              <CircleArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="hero__facts" style={{ '--order': 5 }}>
            <li className="availability">
              <span className="availability__dot" aria-hidden="true" />
              {t('availability')}
            </li>
            <li className="hero__place">
              <MapPin aria-hidden="true" />
              {pick(profile.location)}
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <img src={heroIllustration} alt="" width="500" height="500" fetchPriority="high" decoding="async" />
        </div>
      </div>
    </section>
  )
}
