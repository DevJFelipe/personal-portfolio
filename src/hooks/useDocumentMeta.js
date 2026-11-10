import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { SITE_URL } from '../data/profile.js'

function setMeta(attribute, key, content) {
  if (!content) return
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/** Keeps the tab title, description, canonical URL and Open Graph tags in sync with the route. */
export function useDocumentMeta({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    if (title) document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', url)
  }, [title, description, pathname])
}
