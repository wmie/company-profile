import React from 'react'
import { content } from '../../data/content'
import { SectionLabel } from '../../components/core/SectionLabel'

export const ResultsSlide: React.FC = () => {
  const { clients, bottomNote, engagementStat } = content.results

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Section label */}
      <SectionLabel number="06" text="Risultati" className="reveal reveal-d1" />

      {/* Headline */}
      <div className="reveal reveal-d1 mb-6">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Non solo clienti.{' '}
          <span className="text-wmie-accent">Risultati.</span>
        </h2>
      </div>

      {/* Bento grid 3+2 */}
      <div className="reveal reveal-d2" style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Row 1: 3 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '12px',
            flex: 1,
            minHeight: 0,
          }}
        >
          {clients.slice(0, 3).map((client, i) => (
            <div
              key={i}
              className="service-card"
              style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}
            >
              {/* Client name + country */}
              <h3 className="font-display text-base font-semibold text-neutral-100">
                {client.name}{' '}
                <span className="text-wmie-accent text-sm italic">{client.country}</span>
              </h3>

              {/* Context */}
              <p className="text-[11px] text-[#A3A3A3] mt-1">
                {client.context}
              </p>

              {/* Problema */}
              <p className="text-[11px] text-[#A3A3A3] mt-2">
                <span className="font-bold text-neutral-100">Problema:</span>{' '}
                {client.problem}
              </p>

              {/* Intervento */}
              <p className="text-[11px] text-[#A3A3A3] mt-1">
                <span className="font-bold text-neutral-100">Intervento:</span>{' '}
                {client.intervention}
              </p>

              {/* Metric */}
              <div className="mt-auto pt-2">
                <span className="portfolio-metric font-display text-[28px] font-semibold">
                  {client.metric}
                </span>
                <p className="text-[9px] text-[#A3A3A3]">
                  {client.metricLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 2 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            flex: 1,
            minHeight: 0,
          }}
        >
          {clients.slice(3, 5).map((client, i) => (
            <div
              key={i + 3}
              className="service-card"
              style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}
            >
              {/* Client name + country */}
              <h3 className="font-display text-base font-semibold text-neutral-100">
                {client.name}{' '}
                <span className="text-wmie-accent text-sm italic">{client.country}</span>
              </h3>

              {/* Context */}
              <p className="text-[11px] text-[#A3A3A3] mt-1">
                {client.context}
              </p>

              {/* Problema */}
              <p className="text-[11px] text-[#A3A3A3] mt-2">
                <span className="font-bold text-neutral-100">Problema:</span>{' '}
                {client.problem}
              </p>

              {/* Intervento */}
              <p className="text-[11px] text-[#A3A3A3] mt-1">
                <span className="font-bold text-neutral-100">Intervento:</span>{' '}
                {client.intervention}
              </p>

              {/* Metric */}
              <div className="mt-auto pt-2">
                <span className="portfolio-metric font-display text-[28px] font-semibold">
                  {client.metric}
                </span>
                <p className="text-[9px] text-[#A3A3A3]">
                  {client.metricLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
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
