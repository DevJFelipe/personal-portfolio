import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { principles, profile, stackGroups } from '../data/profile.js'
import { experience } from '../data/experience.js'
import { PageHeader } from '../components/common/PageHeader.jsx'
import { Timeline } from '../components/common/Timeline.jsx'
import { CtaBand } from '../components/common/CtaBand.jsx'
import './About.css'

export default function About() {
  const { t, pick } = useI18n()
  useDocumentMeta({ title: t('meta.aboutTitle'), description: t('meta.aboutDescription') })

  const facts = [
    { label: t('about.location'), value: `${pick(profile.location)} (UTC−5)` },
    { label: t('about.languages'), value: t('about.languagesValue') },
    { label: t('about.education'), value: `${pick(profile.education.degree)}, ${profile.education.school}` },
    { label: t('about.certification'), value: profile.certification },
  ]

  return (
    <>
      <PageHeader
        title={t('about.title')}
        aside={
          <dl className="facts" aria-label={t('about.factsLabel')}>
            {facts.map((fact) => (
              <div key={fact.label} className="facts__row">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <div className="about-bio">
          {pick(profile.bio).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="availability">
          <span className="availability__dot" aria-hidden="true" />
          {t('availability')}
        </p>
      </PageHeader>

      <section className="section" aria-labelledby="about-experience">
        <div className="container about-layout">
          <h2 id="about-experience" className="about-layout__title">
            {t('about.experienceTitle')}
          </h2>
          <Timeline items={experience} variant="full" />
        </div>
      </section>

      <section className="section" aria-labelledby="about-education">
        <div className="container about-layout">
          <h2 id="about-education" className="about-layout__title">
            {t('about.educationTitle')}
          </h2>
          <div className="education">
            <h3>{profile.education.school}</h3>
            <p className="education__degree">{pick(profile.education.degree)}</p>
            <p>
              {pick(profile.education.place)}. {pick(profile.education.status)}.
            </p>
            <p>{pick(profile.education.coursework)}</p>
            <p className="education__cert">{profile.certification}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-principles">
        <div className="container about-layout">
          <h2 id="about-principles" className="about-layout__title">
            {t('about.principlesTitle')}
          </h2>
          <ul className="principles">
            {principles.map((item) => (
              <li key={pick(item.title)} className="principle">
                <h3>{pick(item.title)}</h3>
                <p>{pick(item.body)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="about-stack">
        <div className="container about-layout">
          <div className="about-layout__title">
            <h2 id="about-stack">{t('about.stackTitle')}</h2>
            <p className="about-layout__note">{t('about.stackIntro')}</p>
          </div>
          <div className="stack-groups">
            {stackGroups.map((group) => (
              <div key={group.id} className="stack-group">
                <h3>{pick(group.title)}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={pick(item)} className="chip">
                      {pick(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
