import React from 'react'
import { content } from '../../data/content'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Globe, Layers, TrendingUp } from 'lucide-react'

const interventionIcons = [Globe, Layers, TrendingUp]

export const CaseStudySlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="04" text="Case Study" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Da un sito che non funzionava a +52% di prenotazioni{' '}
          <span className="text-wmie-accent">dirette</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-5">
        <p className="text-sm text-[#A3A3A3]">
          {content.caseStudy.client}
        </p>
      </div>

      <div className="reveal reveal-d3 flex gap-6 flex-1 min-h-0">
        {/* Left: La situazione — card */}
        <div
          className="flex-1 flex flex-col"
          style={{
            padding: '24px 28px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '2px',
          }}
        >
          <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-3">
            La situazione
          </h3>
          <p className="text-[13px] text-[#A3A3A3] leading-[1.7]">
            {content.caseStudy.situation}
          </p>
        </div>

        {/* Right: L'intervento — intro + cards */}
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-2">
              L&apos;intervento
            </h3>
            <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
              {content.caseStudy.interventionIntro}
            </p>
          </div>

          {content.caseStudy.interventionPoints.map((point, i) => {
            const Icon = interventionIcons[i]
            return (
              <div
                key={i}
                className="service-card flex items-start gap-4"
                style={{ padding: '16px 20px' }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(139, 92, 246, 0.10)',
                    borderRadius: '4px',
                  }}
                >
                  <Icon size={16} className="text-wmie-accent" />
                </div>
                <div>
                  <span className="font-display text-[14px] font-semibold text-neutral-100">
                    {point.label}
                  </span>
                  <p className="text-[12px] text-[#A3A3A3] leading-relaxed mt-0.5">
                    {point.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats row */}
      <div className="reveal reveal-d4 flex gap-12 mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {content.caseStudy.results.map((result, i) => (
          <div key={i}>
            <span
              className="stat-value portfolio-metric font-display text-[44px] font-semibold"
              style={{ animationDelay: `${600 + i * 150}ms` }}
            >
              {result.value}
            </span>
            <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.1em] mt-1">
              {result.label}
            </p>
          </div>
        ))}
        <div className="flex items-end ml-auto">
          <p className="text-[11px] text-[#525252] italic">
            {content.caseStudy.bottomNote}
          </p>
        </div>
      </div>
    </div>
  )
}
