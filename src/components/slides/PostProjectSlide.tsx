import React from 'react'
import { content } from '../../data/content'
import { Handshake, Link2, LayoutGrid } from 'lucide-react'

const icons = [Handshake, Link2, LayoutGrid]

export const PostProjectSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Headline */}
      <div className="reveal reveal-d1 mb-3">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Cosa cambia dopo il primo{' '}
          <span className="text-wmie-accent">progetto</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="reveal reveal-d2 mb-8">
        <p className="text-base text-[#A3A3A3]">
          {content.postProject.subtitle}
        </p>
      </div>

      {/* 3-col pillar grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
          flex: 1,
        }}
      >
        {content.postProject.pillars.map((pillar, i) => {
          const Icon = icons[i]
          const delayClass = `reveal reveal-d${i + 3}`
          return (
            <div
              key={i}
              className={`${delayClass} service-card`}
              style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}
            >
              {/* Icon in circle */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(139,92,246,0.10)',
                  borderRadius: '9999px',
                }}
              >
                <Icon size={22} className="text-wmie-accent" />
              </div>

              {/* Title */}
              <h3 className="font-display text-base font-semibold text-neutral-100 mt-4">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="text-[13px] text-[#A3A3A3] leading-relaxed mt-3">
                {pillar.body}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
