import React from 'react'
import { content } from '../../data/content'

export const TeamPartnershipsSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Headline */}
      <div className="reveal reveal-d1 mb-8">
        <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Partnership{' '}
          <span className="text-wmie-accent">tecnologiche</span>
        </h2>
        <p className="text-base text-[#A3A3A3] mt-3">
          Cosa significano per voi
        </p>
      </div>

      {/* Partnership cards */}
      <div className="reveal reveal-d2 flex flex-col gap-4 flex-1">
        {content.team.partnerships.map((p, i) => (
          <div
            key={i}
            className={`service-card reveal reveal-d${Math.min(i + 2, 6)}`}
            style={{ padding: '24px 28px' }}
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0" style={{ minWidth: '240px' }}>
                <p className="font-display text-base font-semibold text-neutral-100">
                  {p.name}
                </p>
              </div>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {p.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
