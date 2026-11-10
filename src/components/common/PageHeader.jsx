import './PageHeader.css'

/** Top of every inner page: the page title and an optional lead or extra content. */
export function PageHeader({ title, lead, children, aside }) {
  return (
    <header className="page-header">
      <div className={`container page-header__inner${aside ? ' page-header__inner--aside' : ''}`}>
        <div className="page-header__main">
          <h1>{title}</h1>
          {lead && <p className="page-header__lead">{lead}</p>}
          {children}
        </div>
        {aside && <div className="page-header__aside">{aside}</div>}
      </div>
    </header>
  )
}
