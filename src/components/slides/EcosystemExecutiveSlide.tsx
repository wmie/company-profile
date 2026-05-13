import React from 'react'
import { content } from '../../data/content'

export const EcosystemExecutiveSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Sub-headline */}
      <div className="reveal reveal-d1 mb-6">
        <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Cosa costruiamo{' '}
          <span className="text-wmie-accent">concretamente</span>
        </h2>
        <p className="text-base text-[#A3A3A3] mt-3 max-w-[560px]">
          {content.ecosystem.axisExecutiveTitle}
        </p>
      </div>

      {/* Executive Rows — large livello column to fill vertical space */}
      <div className="reveal reveal-d2 flex-1 flex flex-col justify-between">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr 1fr',
            gap: '32px',
            borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
            paddingBottom: '12px',
          }}
        >
          <span className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em]">
            Livello
          </span>
          <span className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em]">
            Cosa
          </span>
          <span className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em]">
            Perché conta
          </span>
        </div>

        {/* Rows — flex-1 to distribute evenly */}
        {content.ecosystem.executiveRows.map((row, i) => (
          <div
            key={i}
            className={`reveal reveal-d${Math.min(i + 3, 6) as 3 | 4 | 5 | 6}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '240px 1fr 1fr',
              gap: '32px',
              padding: '24px 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              alignItems: 'center',
            }}
          >
            <span className="font-display text-[28px] font-semibold text-neutral-100 leading-[1.1]">
              {row.level}
            </span>
            <span className="text-[15px] text-[#A3A3A3] leading-relaxed">
              {row.what}
            </span>
            <span className="text-[15px] text-[#A3A3A3] leading-relaxed italic">
              {row.why}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
