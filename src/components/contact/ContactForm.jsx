import { useId, useRef, useState } from 'react'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import { CopyEmail } from '../common/CopyEmail.jsx'
import { CircleAlert, Loader, Send } from '../icons.js'
import './ContactForm.css'

// FormSubmit relays the message to the inbox; no account or server needed.
// The first message sent from a new domain asks the owner to confirm the address once.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const TYPES = ['app', 'web', 'backend', 'other']
const EMPTY = { name: '', email: '', type: '', message: '', website: '' }

/** Always rendered, so showing an error never shifts the layout under the pointer. */
function FieldError({ id, message }) {
  return (
    <p className="field__error" id={id}>
      {message && (
        <>
          <CircleAlert aria-hidden="true" />
          {message}
        </>
      )}
    </p>
  )
}

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'contact.errorName'
  if (!values.email.trim()) errors.email = 'contact.errorEmail'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'contact.errorEmailFormat'
  if (values.message.trim().length < 20) errors.message = 'contact.errorMessage'
  return errors
}

export function ContactForm() {
  const { t } = useI18n()
  const id = useId()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')
  const [sent, setSent] = useState(null)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const successRef = useRef(null)

  const fieldId = (name) => `${id}-${name}`

  const update = (name) => (event) => {
    const next = { ...values, [name]: event.target.value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
  }

  const markTouched = (name) => () => {
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    const firstInvalid = ['name', 'email', 'message'].find((name) => found[name])
    if (firstInvalid) {
      const refs = { name: nameRef, email: emailRef, message: messageRef }
      refs[firstInvalid].current?.focus()
      return
    }

    // Bots fill the hidden field; people never see it.
    if (values.website) {
      setSent({ name: values.name.trim(), email: values.email.trim() })
      setStatus('success')
      return
    }

    setStatus('sending')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          project_type: values.type ? t(`contact.typeOptions.${values.type}`) : '—',
          message: values.message.trim(),
          _subject: `${t('contact.subject')}: ${values.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
        signal: controller.signal,
      })
      const data = await response.json().catch(() => ({}))
      const ok = response.ok && (data.success === true || data.success === 'true')
      if (!ok) throw new Error(data.message || `HTTP ${response.status}`)
      setSent({ name: values.name.trim(), email: values.email.trim() })
      setStatus('success')
      setValues(EMPTY)
      setTouched({})
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  if (status === 'success' && sent) {
    return (
      <div className="contact-form contact-form--done" role="status">
        <h2 ref={successRef} tabIndex={-1}>
          {t('contact.successTitle')}
        </h2>
        <p>{t('contact.successBody', sent)}</p>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setSent(null)
            setStatus('idle')
          }}
        >
          {t('contact.another')}
        </button>
      </div>
    )
  }

  const describedBy = (name, hint) =>
    [hint ? `${fieldId(name)}-hint` : null, errors[name] && touched[name] ? `${fieldId(name)}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined

  const showError = (name) => Boolean(errors[name] && touched[name])

  return (
    <form className="contact-form" noValidate onSubmit={onSubmit} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{t('contact.formTitle')}</h2>

      <div className="field-row">
        <div className={`field${showError('name') ? ' field--invalid' : ''}`}>
          <label htmlFor={fieldId('name')}>{t('contact.name')}</label>
          <input
            ref={nameRef}
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            onBlur={markTouched('name')}
            aria-invalid={showError('name')}
            aria-describedby={describedBy('name')}
            maxLength={120}
          />
          <FieldError id={`${fieldId('name')}-error`} message={showError('name') ? t(errors.name) : ''} />
        </div>

        <div className={`field${showError('email') ? ' field--invalid' : ''}`}>
          <label htmlFor={fieldId('email')}>{t('contact.email')}</label>
          <input
            ref={emailRef}
            id={fieldId('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            onBlur={markTouched('email')}
            aria-invalid={showError('email')}
            aria-describedby={describedBy('email')}
            maxLength={160}
          />
          <FieldError id={`${fieldId('email')}-error`} message={showError('email') ? t(errors.email) : ''} />
        </div>
      </div>

      <div className="field">
        <label htmlFor={fieldId('type')}>
          {t('contact.type')} <span className="field__optional">({t('contact.optional')})</span>
        </label>
        <select id={fieldId('type')} name="type" value={values.type} onChange={update('type')}>
          <option value="">—</option>
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {t(`contact.typeOptions.${type}`)}
            </option>
          ))}
        </select>
      </div>

      <div className={`field${showError('message') ? ' field--invalid' : ''}`}>
        <label htmlFor={fieldId('message')}>{t('contact.message')}</label>
        <p className="field__hint" id={`${fieldId('message')}-hint`}>
          {t('contact.messageHint')}
        </p>
        <textarea
          ref={messageRef}
          id={fieldId('message')}
          name="message"
          rows={6}
          value={values.message}
          onChange={update('message')}
          onBlur={markTouched('message')}
          aria-invalid={showError('message')}
          aria-describedby={describedBy('message', true)}
          maxLength={4000}
        />
        <FieldError id={`${fieldId('message')}-error`} message={showError('message') ? t(errors.message) : ''} />
      </div>

      {/* Honeypot: hidden from people and assistive tech */}
      <div className="field--trap" aria-hidden="true">
        <label htmlFor={fieldId('website')}>Website</label>
        <input id={fieldId('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update('website')} />
      </div>

      {status === 'error' && (
        <div className="contact-form__alert" role="alert">
          <p>
            <CircleAlert aria-hidden="true" />
            {t('contact.errorBody', { email: profile.email })}
          </p>
          <CopyEmail showAddress={false} />
        </div>
      )}

      <div className="contact-form__footer">
        <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
          {status === 'sending' ? <Loader aria-hidden="true" className="spin" /> : <Send aria-hidden="true" />}
          {status === 'sending' ? t('contact.sending') : t('contact.submit')}
        </button>
        <p className="contact-form__privacy">{t('contact.privacy')}</p>
      </div>
    </form>
  )
}
