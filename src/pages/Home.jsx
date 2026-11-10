import { Link } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { projects } from '../data/projects.js'
import { services } from '../data/services.js'
import { experience } from '../data/experience.js'
import { Hero } from '../components/home/Hero.jsx'
import { ProjectCard } from '../components/projects/ProjectCard.jsx'
import { Timeline } from '../components/common/Timeline.jsx'
import { CtaBand } from '../components/common/CtaBand.jsx'
import { ArrowRight, ChartLine, Server, Smartphone, Store } from '../components/icons.js'
import './Home.css'

const SERVICE_ICONS = { mobile: Smartphone, store: Store, server: Server, chart: ChartLine }

export default function Home() {
  const { t, pick } = useI18n()
  useDocumentMeta({ title: t('meta.homeTitle'), description: t('meta.homeDescription') })

  const featured = projects.filter((project) => project.featured)
  const [first, second, third, fourth] = featured

  return (
    <>
      <Hero />

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <h2 id="work-title">{t('home.workTitle')}</h2>
              <p>{t('home.workIntro')}</p>
            </div>
            <Link to="/projects" className="text-action">
              {t('home.workAll')}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="work-grid">
            {first && <ProjectCard project={first} layout="wide" eager />}
            <div className="work-grid__pair">
              {second && <ProjectCard project={second} />}
              {third && <ProjectCard project={third} />}
            </div>
            {fourth && <ProjectCard project={fourth} layout="wide" reverse />}
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="container services__grid">
          <div className="services__intro">
            <h2 id="services-title">{t('home.servicesTitle')}</h2>
            <p>{t('home.servicesIntro')}</p>
            <p className="availability">
              <span className="availability__dot" aria-hidden="true" />
              {t('availability')}
            </p>
            <Link to="/contact" className="btn">
              {t('nav.cta')}
            </Link>
          </div>
          <ul className="services__list">
            {services.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <li key={service.id} className="service">
                  <span className="service__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="service__text">
                    <h3>{pick(service.title)}</h3>
                    <p>{pick(service.body)}</p>
                    <p className="service__tech">
                      {t('home.servicesTech')} {service.tech.join(', ')}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <h2 id="experience-title">{t('home.experienceTitle')}</h2>
              <p>{t('home.experienceIntro')}</p>
            </div>
            <Link to="/about" className="text-action">
              {t('home.experienceMore')}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <Timeline items={experience.slice(0, 3)} variant="compact" />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
