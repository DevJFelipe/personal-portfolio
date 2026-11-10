import { useSearchParams } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { projectCategories, projects } from '../data/projects.js'
import { PageHeader } from '../components/common/PageHeader.jsx'
import { ProjectCard } from '../components/projects/ProjectCard.jsx'
import { CtaBand } from '../components/common/CtaBand.jsx'
import './Projects.css'

export default function Projects() {
  const { t } = useI18n()
  useDocumentMeta({ title: t('meta.projectsTitle'), description: t('meta.projectsDescription') })

  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('area')
  const area = projectCategories.includes(requested) ? requested : 'all'
  const visible = area === 'all' ? projects : projects.filter((project) => project.categories.includes(area))

  const selectArea = (next) => {
    setSearchParams(next === 'all' ? {} : { area: next }, { replace: true, preventScrollReset: true })
  }

  const countFor = (category) =>
    category === 'all' ? projects.length : projects.filter((project) => project.categories.includes(category)).length

  return (
    <>
      <PageHeader title={t('projects.title')} lead={t('projects.intro')} />

      <section className="section projects-section" aria-label={t('projects.title')}>
        <div className="container">
          <div className="filter-bar">
            <div className="filter-bar__options" role="group" aria-label={t('projects.filterLabel')}>
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="filter-chip"
                  aria-pressed={area === category}
                  onClick={() => selectArea(category)}
                >
                  {t(`projects.filters.${category}`)}
                  <span className="filter-chip__count tabular">{countFor(category)}</span>
                </button>
              ))}
            </div>
            <p className="filter-bar__count" role="status" aria-live="polite">
              {visible.length === 1 ? t('projects.countOne') : t('projects.count', { count: visible.length })}
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="projects-empty">{t('projects.empty')}</p>
          ) : (
            <ul className="projects-grid" key={area}>
              {visible.map((project, index) => (
                <li key={project.slug} style={{ '--i': index }}>
                  <ProjectCard project={project} headingLevel={2} eager={index < 2} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
