import React from 'react'
import { content } from '../../data/content'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Globe, Smartphone, ShoppingCart, Brain } from 'lucide-react'

const icons = [Globe, Smartphone, ShoppingCart, Brain]

export const ServicesSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Section label */}
      <SectionLabel number="02" text="Servizi" className="reveal reveal-d1" />

      {/* Headline */}
      <div className="reveal reveal-d2 mb-3">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Quattro leve, un unico{' '}
          <span className="text-wmie-accent">ecosistema</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="reveal reveal-d3 mb-6">
        <p className="text-base leading-relaxed text-[#A3A3A3] max-w-[560px]">
          {content.services.subtitle}
        </p>
      </div>

      {/* 2x2 Service Grid */}
      <div
        className="reveal reveal-d4"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '12px',
          flex: 1,
          minHeight: 0,
        }}
      >
        {content.services.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div
              key={i}
              className="service-card"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}
            >
              {/* Icon badge */}
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  borderRadius: '2px',
                }}
              >
                <Icon size={16} className="text-wmie-accent" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-neutral-100 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-normal text-[#A3A3A3]">
                {item.desc}
              </p>

              {/* Feeds tag */}
              <p className="text-[12px] text-wmie-accent italic mt-3">
                &rarr; {item.feeds}
              </p>
            </div>
          )
        })}
      </div>

      {/* Bottom text */}
      <div className="reveal reveal-d5 mt-4">
        <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-[720px]">
          {content.services.bottomText}
        </p>
      </div>
    </div>
  )
}
