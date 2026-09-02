import React, { useEffect, useRef } from 'react'
import { useSlideActive } from './useSlideActive'

type SlideVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & { src: string }

/**
 * Muted looping video that plays only while its slide is active.
 * `autoPlay` stays on so the browser has its own retry path on load.
 */
export const SlideVideo: React.FC<SlideVideoProps> = (props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const active = useSlideActive(ref)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (active) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [active])

  return <video ref={ref} autoPlay muted loop playsInline preload="auto" {...props} />
}
