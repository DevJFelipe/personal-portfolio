import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { ArrowRight } from '../icons.js'
import { ProjectMedia } from './ProjectMedia.jsx'
import './ProjectCard.css'

export function ProjectMetaLine({ project }) {
  const { t } = useI18n()
  return (
    <p className="project-meta">
      <span>{t(`kinds.${project.kind}`)}</span>
      <span className="tabular">{project.year}</span>
      {project.status && <span className={`status status--${project.status}`}>{t(`status.${project.status}`)}</span>}
    </p>
  )
}

/**
 * The whole card is clickable through the title link (stretched over the card),
 * which keeps the accessible name short: just the project name.
 */
export function ProjectCard({ project, layout = 'stack', reverse = false, headingLevel = 3, eager = false }) {
  const { t, pick } = useI18n()
  const Heading = `h${headingLevel}`

  return (
    <article className={`project-card project-card--${layout}${reverse ? ' project-card--reverse' : ''}`}>
      <div className="project-card__media">
        <ProjectMedia project={project} eager={eager} />
      </div>
      <div className="project-card__body">
        <ProjectMetaLine project={project} />
        <Heading className="project-card__title">
          <Link to={`/projects/${project.slug}`} className="project-card__link">
            {pick(project.name)}
          </Link>
        </Heading>
        <p className="project-card__summary">{pick(project.summary)}</p>
        <ul className="chips project-card__chips" aria-label={t('project.stack')}>
          {project.stack.slice(0, 4).map((item) => (
            <li key={pick(item)} className="chip">
              {pick(item)}
            </li>
          ))}
        </ul>
        <span className="project-card__more" aria-hidden="true">
          {t('home.caseLink')}
          <ArrowRight />
        </span>
      </div>
    </article>
  )
}
