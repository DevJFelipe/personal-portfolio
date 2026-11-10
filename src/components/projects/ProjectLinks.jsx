import { useI18n } from '../../i18n/useI18n.js'
import { AppStoreMark, ArrowUpRight, Github, Globe, GooglePlayMark } from '../icons.js'

function StoreButton({ href, mark: Mark, store, caption }) {
  return (
    <a className="store-btn" href={href} target="_blank" rel="noreferrer">
      <Mark aria-hidden="true" />
      <span>
        <small>{caption}</small>
        <strong>{store}</strong>
      </span>
    </a>
  )
}

function PendingStore({ mark: Mark, store, caption }) {
  return (
    <span className="store-btn store-btn--pending">
      <Mark aria-hidden="true" />
      <span>
        <small>{caption}</small>
        <strong>{store}</strong>
      </span>
    </span>
  )
}

/** Store badges, website and repositories for a project. Renders nothing if there are none. */
export function ProjectLinks({ links = {} }) {
  const { t, pick } = useI18n()
  const hasStores = links.appStore || links.googlePlay || links.appStoreSoon || links.googlePlaySoon
  const hasAny = hasStores || links.website || links.github?.length
  if (!hasAny) return null

  return (
    <div className="project-links">
      {hasStores && (
        <div className="link-row">
          {links.appStore && (
            <StoreButton href={links.appStore} mark={AppStoreMark} store="App Store" caption={t('project.downloadOn')} />
          )}
          {links.googlePlay && (
            <StoreButton href={links.googlePlay} mark={GooglePlayMark} store="Google Play" caption={t('project.downloadOn')} />
          )}
          {links.appStoreSoon && <PendingStore mark={AppStoreMark} store="App Store" caption={t('project.soon')} />}
          {links.googlePlaySoon && <PendingStore mark={GooglePlayMark} store="Google Play" caption={t('project.soon')} />}
        </div>
      )}
      {(links.website || links.github?.length > 0) && (
        <ul className="project-links__list">
          {links.website && (
            <li>
              <a className="project-links__item" href={links.website} target="_blank" rel="noreferrer">
                <Globe aria-hidden="true" />
                {t('project.website')}: {links.website.replace(/^https?:\/\//, '')}
                <ArrowUpRight aria-hidden="true" className="project-links__ext" />
              </a>
            </li>
          )}
          {links.github?.map((repo) => (
            <li key={repo.url}>
              <a className="project-links__item" href={repo.url} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" />
                {links.github.length > 1 ? pick(repo.label) : t('project.code')}
                <ArrowUpRight aria-hidden="true" className="project-links__ext" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
