import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n.js'
import { ArrowRight } from '../icons.js'
import { ProjectMetaLine } from './ProjectCard.jsx'
import './ProjectRow.css'

/**
 * A project without public screenshots, listed as text: no picture is better
 * than an invented one. The whole row is clickable through the title link.
 */
export function ProjectRow({ project, headingLevel = 3 }) {
  const { pick } = useI18n()
  const Heading = `h${headingLevel}`

  return (
    <article className="project-row">
      <div className="project-row__head">
        <Heading className="project-row__title">
          <Link to={`/projects/${project.slug}`} className="project-row__link">
            {pick(project.name)}
          </Link>
        </Heading>
        <p className="project-row__tagline">{pick(project.tagline)}</p>
      </div>
      <div className="project-row__text">
        <p>{pick(project.summary)}</p>
        <p className="project-row__stack">{project.stack.slice(0, 5).map(pick).join(', ')}</p>
      </div>
      <div className="project-row__meta">
        <ProjectMetaLine project={project} />
        <ArrowRight aria-hidden="true" className="project-row__arrow" />
      </div>
    </article>
  )
}
