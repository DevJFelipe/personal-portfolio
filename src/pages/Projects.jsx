import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router'
import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import { projectCategories, projects } from '../data/projects.js'
import { PageHeader } from '../components/common/PageHeader.jsx'
import { ProjectCard } from '../components/projects/ProjectCard.jsx'
import { ProjectRow } from '../components/projects/ProjectRow.jsx'
import { CtaBand } from '../components/common/CtaBand.jsx'
import './Projects.css'

export default function Projects() {
  const { t } = useI18n()
  useDocumentMeta({ title: t('meta.projectsTitle'), description: t('meta.projectsDescription') })

  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('area')
  const area = projectCategories.includes(requested) ? requested : 'all'
  const visible = area === 'all' ? projects : projects.filter((project) => project.categories.includes(area))
  // Projects with real screenshots show them; the rest are listed as text.
  const pictured = visible.filter((project) => project.media)
  const listed = visible.filter((project) => !project.media)

  const reducedMotion = usePrefersReducedMotion()
  const barRef = useRef(null)
  const filterChanged = useRef(false)

  const selectArea = (next) => {
    filterChanged.current = true
    setSearchParams(next === 'all' ? {} : { area: next }, { replace: true, preventScrollReset: true })
  }

  // The bar stays pinned while the list scrolls, so a filter can change far down
  // the page. A shorter list would leave the visitor looking past it; bring its
  // start back under the bar. The bar's position is read from its pinned offset,
  // not measured: once the list shrinks, the bar may have scrolled away with it.
  useEffect(() => {
    if (!filterChanged.current) return
    filterChanged.current = false
    const bar = barRef.current
    const list = bar?.nextElementSibling
    if (!bar || !list) return
    const style = getComputedStyle(bar)
    if (style.position !== 'sticky') return
    const pinnedBottom = parseFloat(style.top) + bar.offsetHeight
    const target = list.getBoundingClientRect().top + window.scrollY - pinnedBottom - 24
    if (window.scrollY > target) {
      window.scrollTo({ top: target, behavior: reducedMotion ? 'auto' : 'smooth' })
    }
  }, [area, reducedMotion])

  const countFor = (category) =>
    category === 'all' ? projects.length : projects.filter((project) => project.categories.includes(category)).length

  return (
    <>
      <PageHeader title={t('projects.title')} lead={t('projects.intro')} />

      <section className="section projects-section" aria-label={t('projects.title')}>
        <div className="container">
          <div className="filter-bar" ref={barRef}>
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
            <div className="projects-results" key={area}>
              {pictured.length > 0 && (
                <ul className="projects-grid">
                  {pictured.map((project, index) => (
                    <li key={project.slug} style={{ '--i': index }}>
                      <ProjectCard project={project} headingLevel={2} eager={index < 2} />
                    </li>
                  ))}
                </ul>
              )}
              {listed.length > 0 && (
                <ul className="project-rows">
                  {listed.map((project, index) => (
                    <li key={project.slug} style={{ '--i': pictured.length + index }}>
                      <ProjectRow project={project} headingLevel={2} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
