import React, { useEffect, useRef, useState } from 'react'
import type { MediaSliderItem } from '../../data/content'
import { useSlideActive } from '../core/useSlideActive'

export type { MediaSliderItem }

export type MediaSliderSlideProps = {
  items: MediaSliderItem[]
  /** Mono label above the frame, e.g. "CAO Formaggi · Il metodo". */
  eyebrow?: string
  /** Fallback caption under the frame when the active item has none. */
  caption?: string
}

/** Fixed content area: the frame never resizes between pills (16:9). */
const FRAME_WIDTH = 1100
const CONTENT_HEIGHT = 619

export const MediaSliderSlide: React.FC<MediaSliderSlideProps> = ({ items, eyebrow, caption }) => {
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  // Nothing plays while the parent slide is off screen; resumes on return.
  const slideActive = useSlideActive(rootRef)

  // Only the active item plays; the others rewind to their first frame.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === active) {
        if (slideActive) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
        return
      }
      video.pause()
      video.currentTime = 0
    })
  }, [active, slideActive, items.length])

  const activeCaption = items[active]?.caption ?? caption

  return (
    <div
      ref={rootRef}
      className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center"
    >
      {eyebrow && (
        <p className="reveal reveal-d1 font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-3">
          {eyebrow}
        </p>
      )}

      <div className="reveal reveal-d1 browser-frame" style={{ width: `${FRAME_WIDTH}px` }}>
        <div className="browser-frame-bar" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
          </div>
          {items.length > 1 && (
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {items.map((item, i) => (
                <button
                  key={item.src}
                  onClick={() => setActive(i)}
                  className="font-wmie-mono cursor-pointer"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.05em',
                    padding: '3px 10px',
                    borderRadius: '2px',
                    border: `1px solid ${i === active ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    background: i === active ? 'rgba(139,92,246,0.15)' : 'transparent',
                    color: i === active ? '#8B5CF6' : '#A3A3A3',
                    transition: 'all 200ms ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Fixed content area — mixed aspect ratios sit centered on the dark ground */}
        <div style={{ width: '100%', height: `${CONTENT_HEIGHT}px`, background: '#0A0A0A' }}>
          {items.map((item, i) =>
            item.type === 'video' ? (
              <video
                key={item.src}
                ref={(el) => {
                  videoRefs.current[i] = el
                }}
                src={item.src}
                autoPlay={i === active}
                muted
                loop
                playsInline
                preload={i === active ? 'auto' : 'metadata'}
                style={{
                  display: i === active ? 'block' : 'none',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <img
                key={item.src}
                src={item.src}
                alt={item.caption ?? item.label}
                style={{
                  display: i === active ? 'block' : 'none',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            ),
          )}
        </div>
      </div>

      {/* Caption — min-height so the layout never jumps between pills */}
      <p
        className="reveal reveal-d2 font-wmie-mono text-[11px] text-[#A3A3A3] text-center mt-4 leading-relaxed"
        style={{ minHeight: '34px', maxWidth: `${FRAME_WIDTH}px`, flexShrink: 0 }}
      >
        {activeCaption}
      </p>
    </div>
  )
}
