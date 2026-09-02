import { useEffect, useState, type RefObject } from 'react'

/**
 * True while the closest `.slide` ancestor of `ref` has `data-state="active"`.
 * PresentationView flips that attribute on navigation; media should only play
 * while its slide is on screen (Firefox never pauses off-screen videos).
 */
export function useSlideActive(ref: RefObject<HTMLElement | null>): boolean {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const slide = ref.current?.closest('.slide')
    if (!slide) return
    const read = () => setActive(slide.getAttribute('data-state') === 'active')
    read()
    const observer = new MutationObserver(read)
    observer.observe(slide, { attributes: true, attributeFilter: ['data-state'] })
    return () => observer.disconnect()
  }, [ref])

  return active
}
