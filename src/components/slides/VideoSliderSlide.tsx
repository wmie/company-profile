import React, { useState } from 'react'

type VideoSliderSlideProps = {
  videos: { url: string; label: string }[]
  caption?: string
}

export const VideoSliderSlide: React.FC<VideoSliderSlideProps> = ({ videos, caption }) => {
  const [active, setActive] = useState(0)

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center">
      {/* Browser frame */}
      <div className="browser-frame" style={{ maxWidth: '1100px' }}>
        <div className="browser-frame-bar" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
          </div>
          {/* Video switcher pills */}
          {videos.length > 1 && (
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {videos.map((v, i) => (
                <button
                  key={i}
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
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Video area */}
        <div style={{ position: 'relative' }}>
          {videos.map((v, i) => (
            <video
              key={v.url}
              src={v.url}
              autoPlay
              muted
              loop
              playsInline
              style={{
                display: i === active ? 'block' : 'none',
                maxWidth: '1100px',
                maxHeight: '740px',
              }}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <p className="font-wmie-mono text-[11px] text-[#A3A3A3] text-center mt-4" style={{ flexShrink: 0 }}>
          {caption}
        </p>
      )}
    </div>
  )
}
