import React from 'react'
import { content } from '../../data/content'
import { SectionLabel } from '../../components/core/SectionLabel'

export const ResultsSlide: React.FC = () => {
  const { headline, headlineAccent, clients, bottomNote, engagementStat } = content.results

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Section label */}
      <SectionLabel number="15" text="Risultati" className="reveal reveal-d1" />

      {/* Headline */}
      <div className="reveal reveal-d1 mb-5">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          {headline}{' '}
          <span className="text-wmie-accent">{headlineAccent}</span>
        </h2>
      </div>

      {/* 3x2 grid — one card per client */}
      <div
        className="reveal reveal-d2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '12px',
          flex: 1,
          minHeight: 0,
        }}
      >
        {clients.map((client, i) => (
          <div
            key={i}
            className="service-card"
            style={{ padding: '18px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            {/* Client name + country */}
            <h3 className="font-display text-[15px] font-semibold leading-tight text-neutral-100">
              {client.name}{' '}
              <span className="text-wmie-accent text-[13px] italic">{client.country}</span>
            </h3>

            {/* Context */}
            <p className="text-[11px] leading-snug text-[#A3A3A3] mt-1">
              {client.context}
            </p>

            {/* Problema */}
            <p className="text-[11px] leading-snug text-[#A3A3A3] mt-2">
              <span className="font-bold text-neutral-100">Problema:</span>{' '}
              {client.problem}
            </p>

            {/* Intervento */}
            <p className="text-[11px] leading-snug text-[#A3A3A3] mt-1">
              <span className="font-bold text-neutral-100">Intervento:</span>{' '}
              {client.intervention}
            </p>

            {/* Metric */}
            <div className="mt-auto pt-2">
              <span className="portfolio-metric font-display text-[26px] font-semibold leading-none">
                {client.metric}
              </span>
              <p className="text-[9px] leading-snug text-[#A3A3A3] mt-1">
                {client.metricLabel}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note + engagement stat */}
      <div className="reveal reveal-d3 mt-4">
        <p className="text-[12px] text-[#A3A3A3] leading-relaxed max-w-[720px]">
          {bottomNote}
        </p>
        <p className="text-[12px] text-[#A3A3A3] leading-relaxed max-w-[720px] mt-1">
          {engagementStat}
        </p>
      </div>
    </div>
  )
}
