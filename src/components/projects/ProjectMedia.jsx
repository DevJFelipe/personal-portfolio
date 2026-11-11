import { useI18n } from '../../i18n/useI18n.js'
import './ProjectMedia.css'

/** Visual for a project. `variant` is 'card' (thumbnail) or 'detail' (case study header). */
export function ProjectMedia({ project, variant = 'card', eager = false }) {
  const { pick, t } = useI18n()
  const media = project.media
  if (!media) return null

  const name = pick(project.name)
  const loading = eager ? 'eager' : 'lazy'

  if (media.type === 'phones') {
    const shots = variant === 'card' ? media.images.slice(0, 3) : media.images
    if (variant === 'card') {
      return (
        <div className="media media--phones media--card">
          <div className="phone-fan">
            {shots.map((shot, index) => (
              <img
                key={index}
                src={shot.src}
                alt={index === 1 ? pick(shot.alt) : ''}
                width="359"
                height="780"
                loading={loading}
                decoding="async"
                className={`phone-fan__shot phone-fan__shot--${index}`}
              />
            ))}
          </div>
        </div>
      )
    }
    return (
      <div className="media media--phones media--detail">
        <ul className="phone-strip" tabIndex={0} aria-label={`${t('project.gallery')}: ${name}`}>
          {shots.map((shot, index) => (
            <li key={index}>
              <img src={shot.src} alt={pick(shot.alt)} width="359" height="780" loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // Screenshots of websites
  const images = variant === 'card' ? media.images.slice(0, 1) : media.images
  return (
    <div className={`media media--screens media--${variant}${images.length > 1 ? ' media--multi' : ''}`}>
      {images.map((image, index) => (
        <figure key={index} className="screen-frame">
          <img
            src={image.src}
            alt={pick(image.alt)}
            width={image.width}
            height={image.height}
            loading={index === 0 ? loading : 'lazy'}
            decoding="async"
          />
        </figure>
      ))}
    </div>
  )
}
