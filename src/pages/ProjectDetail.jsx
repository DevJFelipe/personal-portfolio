import { Link, useParams } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { getProject, projects } from '../data/projects.js'
import { ProjectMedia } from '../components/projects/ProjectMedia.jsx'
import { ProjectLinks } from '../components/projects/ProjectLinks.jsx'
import { CtaBand } from '../components/common/CtaBand.jsx'
import { ArrowLeft, ArrowRight } from '../components/icons.js'
import './ProjectDetail.css'

function SectionContent({ section }) {
  const { pick } = useI18n()
  const body = pick(section.body)
  const list = pick(section.list)
  const paragraphs = body ? (Array.isArray(body) ? body : [body]) : []
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {list && (
        <ul className="case__list">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}

function MissingProject() {
  const { t } = useI18n()
  return (
    <section className="case-missing">
      <div className="container">
        <h1>{t('project.notFoundTitle')}</h1>
        <p>{t('project.notFoundBody')}</p>
        <Link to="/projects" className="btn btn--solid">
          {t('project.back')}
        </Link>
      </div>
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, pick } = useI18n()
  const project = getProject(slug)

  useDocumentMeta(
    project
      ? { title: `${pick(project.name)} | ${t('meta.siteName')}`, description: pick(project.summary) }
      : { title: t('meta.notFoundTitle'), description: t('meta.projectsDescription') },
  )

  if (!project) return <MissingProject />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const meta = [
    { label: t('project.role'), value: pick(project.role) },
    { label: t('project.year'), value: project.year },
    { label: t('project.platform'), value: pick(project.platforms) },
    { label: t('project.type'), value: t(`kinds.${project.kind}`) },
  ]

  return (
    <>
      <header className="case-header">
        <div className="container">
          <Link to="/projects" className="text-action text-action--back case-header__back">
            <ArrowLeft aria-hidden="true" />
            {t('project.back')}
          </Link>
          <div className="case-header__grid">
            <div className="case-header__main">
              {project.media?.type === 'phones' && project.media.icon && (
                <img className="case-header__icon" src={project.media.icon} alt="" width="72" height="72" />
              )}
              <h1>{pick(project.name)}</h1>
              <p className="case-header__tagline">{pick(project.tagline)}</p>
              <p className="case-header__summary">{pick(project.summary)}</p>
              {project.status && (
                <p className={`status status--${project.status}`}>
                  {t(`status.${project.status}`)}
                </p>
              )}
            </div>
            <dl className="case-meta">
              {meta.map((item) => (
                <div key={item.label} className="case-meta__row">
                  <dt>{item.label}</dt>
                  <dd className={item.label === t('project.year') ? 'tabular' : undefined}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ProjectLinks links={project.links} />
        </div>
      </header>

      {project.media && (
        <div className="container case-media">
          <ProjectMedia project={project} variant="detail" eager />
        </div>
      )}

      <div className="container case-body">
        <div className="case-sections">
          {project.sections.map((section) => (
            <section key={pick(section.title)} className="case-section">
              <h2>{pick(section.title)}</h2>
              <div className="case-section__content">
                <SectionContent section={section} />
              </div>
            </section>
          ))}
        </div>
        <aside className="case-aside" aria-label={t('project.stack')}>
          <h2>{t('project.stack')}</h2>
          <ul className="chips">
            {project.stack.map((item) => (
              <li key={pick(item)} className="chip">
                {pick(item)}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <nav className="container case-next" aria-label={t('project.next')}>
        <Link to={`/projects/${next.slug}`} className="case-next__link">
          <span className="case-next__label">{t('project.next')}</span>
          <span className="case-next__name">
            {pick(next.name)}
            <ArrowRight aria-hidden="true" />
          </span>
          <span className="case-next__tagline">{pick(next.tagline)}</span>
        </Link>
      </nav>

      <CtaBand title={t('project.ctaTitle')} body={t('project.ctaBody')} button={t('project.ctaButton')} />
    </>
  )
}
