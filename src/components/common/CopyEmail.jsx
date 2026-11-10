import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import { Check, Copy } from '../icons.js'
import './CopyEmail.css'

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }
  // Fallback for browsers without the async clipboard API
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  const ok = document.execCommand('copy')
  area.remove()
  if (!ok) throw new Error('copy failed')
}

/** Shows the email address with a copy button that confirms what happened. */
export function CopyEmail({ className = '', showAddress = true }) {
  const { t } = useI18n()
  const [state, setState] = useState('idle')
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const onCopy = async () => {
    clearTimeout(timer.current)
    try {
      await copyText(profile.email)
      setState('copied')
    } catch {
      setState('failed')
    }
    timer.current = setTimeout(() => setState('idle'), 2400)
  }

  return (
    <div className={`copy-email ${className}`}>
      {showAddress && (
        <a className="copy-email__address" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      )}
      <button type="button" className="copy-email__button" onClick={onCopy}>
        {state === 'copied' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span>{state === 'copied' ? t('contact.copied') : t('contact.copy')}</span>
      </button>
      <p className="copy-email__status" role="status" aria-live="polite">
        {state === 'failed' ? t('contact.copyFailed') : ''}
      </p>
    </div>
  )
}
