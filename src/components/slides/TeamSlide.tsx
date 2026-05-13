import React from 'react'
import { content } from '../../data/content'

export const TeamSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Headline */}
      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Il team che lavora sul vostro{' '}
          <span className="text-wmie-accent">progetto</span>
        </h2>
      </div>

      {/* Subtitle */}
      <p className="reveal reveal-d1 text-base text-[#A3A3A3] mb-6 max-w-[640px]">
        {content.team.subtitle}
      </p>

      {/* Badge row */}
      <div className="reveal reveal-d2 flex flex-wrap gap-2 mb-8">
        {content.team.badges.map((badge, i) => (
          <span
            key={i}
            className="px-3 py-1.5 border border-[rgba(255,255,255,0.1)] rounded-[2px] font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.08em]"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Fondatori */}
      <h3 className="reveal reveal-d2 font-display text-sm font-semibold text-wmie-accent uppercase tracking-[0.1em] mb-4">
        Fondatori
      </h3>
      <div className="reveal reveal-d3 grid grid-cols-2 gap-6 mb-8">
        {content.team.founders.map((founder, i) => (
          <div key={i} className="border-b border-[rgba(255,255,255,0.08)] pb-4">
            <p className="font-display text-lg font-semibold text-neutral-100">
              {founder.name}
            </p>
            <p className="text-sm text-wmie-accent mt-1">{founder.role}</p>
            <p className="text-sm text-[#A3A3A3] mt-2 leading-relaxed">{founder.bio}</p>
            <p className="font-wmie-mono text-[11px] text-[#A3A3A3] italic mt-2">
              {founder.credentials}
            </p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h3 className="reveal reveal-d4 font-display text-sm font-semibold text-wmie-accent uppercase tracking-[0.1em] mb-4">
        Team
      </h3>
      <div className="reveal reveal-d5 grid grid-cols-2 gap-4">
        {content.team.members.map((member, i) => (
          <div key={i} className="service-card" style={{ padding: '20px' }}>
            <p className="font-display text-base font-semibold text-neutral-100">
              {member.name}
            </p>
            <p className="text-sm font-bold text-neutral-100 mt-1">{member.role}</p>
            <p className="text-sm text-[#A3A3A3] mt-2 leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
