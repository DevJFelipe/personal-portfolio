import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import { profile } from '../../data/profile.js'
import heroIllustration from '../../assets/img/hero-illustration.webp'
import { CircleArrowRight, MapPin } from '../icons.js'
import './Hero.css'

// The original background art carried these four sparkles, so they landed on
// the name or the lead depending on the viewport. Drawn here, they stay
// anchored to the illustration at every width.
const SPARKLES = ['cream', 'magenta', 'green', 'gold']

function Sparkle({ tone }) {
  return (
    <svg className={`hero__sparkle hero__sparkle--${tone}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C12.9 7.2 16.8 11.1 24 12C16.8 12.9 12.9 16.8 12 24C11.1 16.8 7.2 12.9 0 12C7.2 11.1 11.1 7.2 12 0Z" />
    </svg>
  )
}

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
          <div className="hero__art">
            <img src={heroIllustration} alt="" width="500" height="500" fetchPriority="high" decoding="async" />
            {SPARKLES.map((tone) => (
              <Sparkle key={tone} tone={tone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
