import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion.js'

/**
 * Types each word, holds it, deletes it and moves to the next one.
 * With reduced motion it simply shows the first word.
 */
export function useTypewriter(words, { typeMs = 85, deleteMs = 40, holdMs = 1900, startDelayMs = 900 } = {}) {
  const reducedMotion = usePrefersReducedMotion()
  const [typed, setTyped] = useState({ words, text: '' })

  useEffect(() => {
    if (reducedMotion || words.length === 0) return undefined

    let index = 0
    let length = 0
    let deleting = false
    let timer

    const step = () => {
      const word = words[index % words.length]
      if (!deleting) {
        length += 1
        setTyped({ words, text: word.slice(0, length) })
        if (length >= word.length) {
          deleting = true
          timer = setTimeout(step, holdMs)
          return
        }
        timer = setTimeout(step, typeMs)
      } else {
        length -= 1
        setTyped({ words, text: word.slice(0, length) })
        if (length <= 0) {
          deleting = false
          index += 1
          timer = setTimeout(step, 380)
          return
        }
        timer = setTimeout(step, deleteMs)
      }
    }

    timer = setTimeout(step, startDelayMs)
    return () => clearTimeout(timer)
  }, [words, reducedMotion, typeMs, deleteMs, holdMs, startDelayMs])

  if (reducedMotion) return words[0] ?? ''
  // When the language changes, start clean instead of showing a word from the other language.
  return typed.words === words ? typed.text : ''
}
