import { Link } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { projects } from '../data/projects.js'
import { services } from '../data/services.js'
import { experience } from '../data/experience.js'
import { Hero } from '../components/home/Hero.jsx'
import { ProjectCard } from '../components/projects/ProjectCard.jsx'
import { ProjectRow } from '../components/projects/ProjectRow.jsx'
import { Timeline } from '../components/common/Timeline.jsx'
import { CtaBand } from '../components/common/CtaBand.jsx'
import { ArrowRight } from '../components/icons.js'
import './Home.css'

export default function Home() {
  const { t, pick } = useI18n()
  useDocumentMeta({ title: t('meta.homeTitle'), description: t('meta.homeDescription') })

  // Only real screenshots get a picture. Everything else is listed as text.
  const shown = projects.filter((project) => project.featured && project.media)
  const listed = projects.filter((project) => !project.media).slice(0, 3)

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
            {shown.map((project, index) => (
              <ProjectCard key={project.slug} project={project} layout="wide" reverse={index % 2 === 1} eager={index === 0} />
            ))}
          </div>

          <ul className="project-rows work-rows">
            {listed.map((project) => (
              <li key={project.slug}>
                <ProjectRow project={project} />
              </li>
            ))}
          </ul>
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
            {services.map((service) => (
              <li key={service.id} className="service">
                <h3>{pick(service.title)}</h3>
                <p>{pick(service.body)}</p>
                <p className="service__tech">
                  {t('home.servicesTech')} {service.tech.join(', ')}
                </p>
              </li>
            ))}
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
