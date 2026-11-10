import { useI18n } from '../i18n/useI18n.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { profile } from '../data/profile.js'
import { PageHeader } from '../components/common/PageHeader.jsx'
import { CopyEmail } from '../components/common/CopyEmail.jsx'
import { ContactForm } from '../components/contact/ContactForm.jsx'
import { ArrowUpRight, Clock, Github, Linkedin, MapPin } from '../components/icons.js'
import './Contact.css'

export default function Contact() {
  const { t, pick } = useI18n()
  useDocumentMeta({ title: t('meta.contactTitle'), description: t('meta.contactDescription') })

  return (
    <>
      <PageHeader title={t('contact.title')} lead={t('contact.intro')}>
        <p className="availability">
          <span className="availability__dot" aria-hidden="true" />
          {t('availability')}
        </p>
      </PageHeader>

      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-direct" aria-labelledby="contact-direct-title">
            <h2 id="contact-direct-title">{t('contact.direct')}</h2>

            <div className="contact-direct__block">
              <p className="contact-direct__label">{t('contact.emailLabel')}</p>
              <CopyEmail />
            </div>

            <ul className="contact-direct__links">
              <li>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" />
                  <span>
                    LinkedIn
                    <small>linkedin.com/in/devjfelipe</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="contact-direct__ext" />
                </a>
              </li>
              <li>
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" />
                  <span>
                    GitHub
                    <small>github.com/DevJFelipe</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="contact-direct__ext" />
                </a>
              </li>
            </ul>

            <dl className="contact-direct__facts">
              <div>
                <dt>
                  <MapPin aria-hidden="true" />
                  {t('contact.locationLabel')}
                </dt>
                <dd>{pick(profile.location)}</dd>
              </div>
              <div>
                <dt>
                  <Clock aria-hidden="true" />
                  {t('contact.timezone')}
                </dt>
              </div>
            </dl>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
