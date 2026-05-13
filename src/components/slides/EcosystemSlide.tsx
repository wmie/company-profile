import React from 'react'
import { content } from '../../data/content'
import { Target, Users, BarChart3, Settings } from 'lucide-react'

const strategyIcons = [Target, Users, BarChart3, Settings]

export const EcosystemSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Headline */}
      <div className="reveal reveal-d1 mb-3">
        <h2 className="font-display text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Un ecosistema, non un{' '}
          <span className="text-wmie-accent">deliverable</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="reveal reveal-d2 mb-4">
        <p className="text-base leading-relaxed text-[#A3A3A3] max-w-[640px]">
          {content.ecosystem.subtitle}
        </p>
      </div>

      {/* Asse strategico label */}
      <div className="reveal reveal-d3 mb-3">
        <h3 className="text-wmie-accent font-wmie-mono text-[11px] uppercase tracking-[0.12em]">
          {content.ecosystem.axisStrategicTitle}
        </h3>
      </div>

      {/* 2x2 Strategy Grid — compact cards with icons */}
      <div
        className="reveal reveal-d4"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          flex: 1,
          minHeight: 0,
        }}
      >
        {content.ecosystem.strategies.map((s, i) => {
          const Icon = strategyIcons[i]
          return (
            <div
              key={i}
              style={{
                padding: '24px 28px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Icon top — larger */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(139, 92, 246, 0.10)',
                  borderRadius: '4px',
                  marginBottom: '16px',
                }}
              >
                <Icon size={22} className="text-wmie-accent" />
              </div>

              {/* Text content — space between title and desc */}
              <div className="flex flex-col flex-1">
                <p className="font-display text-base font-semibold text-neutral-100 mb-3">
                  {s.title}
                </p>
                <p className="text-[13px] leading-relaxed text-[#A3A3A3] mt-auto">
                  {s.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
