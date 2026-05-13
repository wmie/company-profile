import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Smartphone } from 'lucide-react'
import { SlideContainer } from './SlideContainer'
import type { OrbConfig } from './SlideBackground'

type BackgroundConfig = {
  spotlightPosition?: string
  orbs?: OrbConfig[]
}

type PresentationViewProps = {
  children: React.ReactNode[]
  backgroundConfigs?: Record<number, BackgroundConfig>
}

type ZoomState = {
  scale: number
  translateX: number
  translateY: number
}

const DEFAULT_BG_CONFIGS: Record<number, BackgroundConfig> = {
  0: { spotlightPosition: '35%' },
  1: {
    spotlightPosition: '20%',
    orbs: [
      { className: 'slide-orb slide-orb-2', style: { top: '10%', left: '60%' } },
      { className: 'slide-orb slide-orb-3', style: { bottom: '15%', left: '5%' } },
    ],
  },
  2: {
    spotlightPosition: '-5%',
    orbs: [
      { className: 'slide-orb slide-orb-1', style: { top: '5%', right: '-5%', left: 'auto' } },
      { className: 'slide-orb slide-orb-3', style: { bottom: '20%', left: '15%' } },
    ],
  },
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  children,
  backgroundConfigs,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [disclaimerDismissed, setDisclaimerDismissed] = useState(false)
  const isTransitioning = useRef(false)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const totalSlides = children.length

  const [isMobile, setIsMobile] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const scaleFactorRef = useRef(1)

  const [zoomState, setZoomState] = useState<ZoomState>({ scale: 1, translateX: 0, translateY: 0 })
  const zoomStateRef = useRef<ZoomState>({ scale: 1, translateX: 0, translateY: 0 })

  useEffect(() => {
    zoomStateRef.current = zoomState
  }, [zoomState])

  const pinchStartDistance = useRef(0)
  const pinchStartScale = useRef(1)
  const pinchStartTranslate = useRef({ x: 0, y: 0 })
  const panStartPos = useRef({ x: 0, y: 0 })
  const panStartTranslate = useRef({ x: 0, y: 0 })

  const bgConfigs = backgroundConfigs || DEFAULT_BG_CONFIGS

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      if (mobile) {
        scaleFactorRef.current = Math.min(window.innerWidth / 1440, window.innerHeight / 900)
      } else {
        scaleFactorRef.current = 1
      }
    }
    update()
    let timeout: ReturnType<typeof setTimeout>
    const debounced = () => {
      clearTimeout(timeout)
      timeout = setTimeout(update, 100)
    }
    window.addEventListener('resize', debounced)
    return () => {
      window.removeEventListener('resize', debounced)
      clearTimeout(timeout)
    }
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides || isTransitioning.current || zoomStateRef.current.scale > 1) return
      isTransitioning.current = true

      const targetSlide = slideRefs.current[index]
      if (targetSlide) targetSlide.scrollTop = 0

      setCurrentSlide(index)
      setZoomState({ scale: 1, translateX: 0, translateY: 0 })
      setTimeout(() => {
        isTransitioning.current = false
      }, isMobile ? 500 : 1100)
    },
    [totalSlides],
  )

  // Custom event listener for programmatic navigation (e.g. from cover index)
  useEffect(() => {
    const handler = (e: Event) => {
      const index = (e as CustomEvent).detail
      if (typeof index === 'number') goToSlide(index)
    }
    window.addEventListener('goToSlide', handler)
    return () => window.removeEventListener('goToSlide', handler)
  }, [goToSlide])

  // Desktop: wheel + keyboard (horizontal navigation)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (zoomStateRef.current.scale > 1) return
      // Accept both deltaX (trackpad horizontal) and deltaY (scroll wheel)
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (Math.abs(delta) < 30) return
      const direction = delta > 0 ? 1 : -1
      e.preventDefault()
      goToSlide(currentSlide + direction)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomStateRef.current.scale > 1) return
      if (['ArrowRight', 'ArrowDown', 'Space', ' '].includes(e.key)) {
        e.preventDefault()
        goToSlide(currentSlide + 1)
      } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        goToSlide(currentSlide - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToSlide, currentSlide])

  // Touch handlers (horizontal swipe + pinch-to-zoom)
  useEffect(() => {
    const getDistance = (t1: Touch, t2: Touch) =>
      Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)

    const handleTouchStart = (e: TouchEvent) => {
      const z = zoomStateRef.current
      if (e.touches.length === 2) {
        pinchStartDistance.current = getDistance(e.touches[0], e.touches[1])
        pinchStartScale.current = z.scale
        pinchStartTranslate.current = { x: z.translateX, y: z.translateY }
        e.preventDefault()
      } else if (e.touches.length === 1 && z.scale > 1) {
        panStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        panStartTranslate.current = { x: z.translateX, y: z.translateY }
        e.preventDefault()
      } else if (e.touches.length === 1 && z.scale <= 1) {
        touchStartX.current = e.touches[0].clientX
        touchStartY.current = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      const z = zoomStateRef.current
      if (e.touches.length === 2) {
        if (pinchStartDistance.current === 0) return
        const newDist = getDistance(e.touches[0], e.touches[1])
        const newScale = Math.min(3, Math.max(1, pinchStartScale.current * (newDist / pinchStartDistance.current)))
        const totalScale = scaleFactorRef.current * newScale
        const maxX = Math.max(0, (1440 * totalScale - window.innerWidth) / 2)
        const maxY = Math.max(0, (900 * totalScale - window.innerHeight) / 2)
        const scaleRatio = newScale / pinchStartScale.current
        const mid = { x: (e.touches[0].clientX + e.touches[1].clientX) / 2, y: (e.touches[0].clientY + e.touches[1].clientY) / 2 }
        const newTx = mid.x - (mid.x - pinchStartTranslate.current.x) * scaleRatio
        const newTy = mid.y - (mid.y - pinchStartTranslate.current.y) * scaleRatio
        setZoomState({
          scale: newScale,
          translateX: Math.max(-maxX, Math.min(maxX, newTx)),
          translateY: Math.max(-maxY, Math.min(maxY, newTy)),
        })
        e.preventDefault()
      } else if (e.touches.length === 1 && z.scale > 1) {
        const dx = e.touches[0].clientX - panStartPos.current.x
        const dy = e.touches[0].clientY - panStartPos.current.y
        const totalScale = scaleFactorRef.current * z.scale
        const maxX = Math.max(0, (1440 * totalScale - window.innerWidth) / 2)
        const maxY = Math.max(0, (900 * totalScale - window.innerHeight) / 2)
        setZoomState((prev) => ({
          ...prev,
          translateX: Math.max(-maxX, Math.min(maxX, panStartTranslate.current.x + dx)),
          translateY: Math.max(-maxY, Math.min(maxY, panStartTranslate.current.y + dy)),
        }))
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const z = zoomStateRef.current
      if (e.touches.length === 0 && z.scale <= 1) {
        // Horizontal swipe detection
        const deltaX = touchStartX.current - e.changedTouches[0].clientX
        const deltaY = touchStartY.current - e.changedTouches[0].clientY
        // Only trigger on horizontal swipes (not vertical)
        if (Math.abs(deltaY) > Math.abs(deltaX)) return
        if (Math.abs(deltaX) < 50) return
        const direction = deltaX > 0 ? 1 : -1
        goToSlide(currentSlide + direction)
      }
      if (e.touches.length < 2) {
        setZoomState((prev) =>
          prev.scale < 1.1 ? { scale: 1, translateX: 0, translateY: 0 } : prev,
        )
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSlide, goToSlide])

  // Auto-dismiss mobile hint
  useEffect(() => {
    if (!isMobile) return
    setDisclaimerDismissed(false)
    const timer = setTimeout(() => setDisclaimerDismissed(true), 6000)
    return () => clearTimeout(timer)
  }, [isMobile])

  const scaleFactor = isMobile
    ? Math.min(windowSize.width / 1440, windowSize.height / 900)
    : 1

  const centerOffsetX = isMobile
    ? (windowSize.width - 1440 * scaleFactor * zoomState.scale) / 2
    : 0
  const centerOffsetY = isMobile
    ? (windowSize.height - 900 * scaleFactor * zoomState.scale) / 2
    : 0

  const viewportStyle: React.CSSProperties = isMobile
    ? {
        width: '1440px',
        height: '900px',
        transform: `translate(${centerOffsetX + zoomState.translateX}px, ${centerOffsetY + zoomState.translateY}px) scale(${scaleFactor * zoomState.scale})`,
        transformOrigin: 'top left',
      }
    : {}

  return (
    <>
      <div
        className={isMobile ? 'slide-viewport-wrapper' : undefined}
        style={isMobile ? undefined : { display: 'contents' }}
      >
        <div
          className={`slide-viewport${isMobile ? ' mobile-orbs' : ''}`}
          style={viewportStyle}
        >
          {/* Stories progress bar */}
          <div className="stories-bar">
            {Array.from({ length: totalSlides }, (_, i) => (
              <div
                key={i}
                className="stories-bar-segment"
                onClick={() => goToSlide(i)}
              >
                <div
                  className="stories-bar-fill"
                  style={{
                    width: i < currentSlide ? '100%' : i === currentSlide ? '100%' : '0%',
                    opacity: i <= currentSlide ? 1 : 0,
                  }}
                />
              </div>
            ))}
            {/* Slide counter */}
            <div className="slide-counter" style={{ position: 'static', background: 'none', border: 'none', padding: '0 0 0 8px', backdropFilter: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
            </div>
          </div>

          {/* Slides */}
          {React.Children.map(children, (child, index) => {
            const state: 'active' | 'above' | 'below' =
              index < currentSlide
                ? 'above'
                : index === currentSlide
                  ? 'active'
                  : 'below'

            // On mobile, only render active slide to prevent GPU memory crash
            if (isMobile && index !== currentSlide) return null

            const bg = bgConfigs[index]

            return (
              <SlideContainer
                key={index}
                ref={(el) => {
                  slideRefs.current[index] = el
                }}
                state={state}
                index={index}
                spotlightPosition={bg?.spotlightPosition}
                orbs={bg?.orbs}
              >
                {child}
              </SlideContainer>
            )
          })}
        </div>
      </div>

      {/* Mobile hint */}
      {isMobile && (
        <div className={`mobile-disclaimer${disclaimerDismissed ? ' dismissed' : ''}`}>
          <button
            className="mobile-disclaimer-close"
            onClick={() => setDisclaimerDismissed(true)}
            aria-label="Chiudi"
          >
            ✕
          </button>
          <span className="mobile-disclaimer-text">
            <Smartphone size={14} className="mobile-disclaimer-icon" />
            {"Swipe per navigare tra le slide"}
          </span>
        </div>
      )}
    </>
  )
}
