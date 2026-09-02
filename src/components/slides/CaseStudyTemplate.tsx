import React from 'react'
import type { LucideIcon } from 'lucide-react'
import { SectionLabel } from '../../components/core/SectionLabel'

/**
 * Shared anatomy of the "long form" case study slides
 * (CAO Formaggi, Tendenze Store, Gruppo Collu).
 *
 * SectionLabel → h2 (+ accent) → intro → two columns (La sfida / L'intervento)
 * → stats row + italic bottom note. Every string comes from
 * `content.caseStudies.*`; the slides only pass data + icons.
 * See docs/plans/2026-09-02-company-profile-q4-2026.md §4.
 */

export type CaseStudyMetric = { value: string; label: string; desc: string }
export type CaseStudyInterventionItem = { label: string; desc: string }
export type CaseStudyStat = { value: string; label: string; note?: string }

export type CaseStudyData = {
  sectionNumber: string
  sectionText: string
  headline: string
  headlineAccent: string
  intro: string
  challenge: {
    title: string
    body: string
    metrics: CaseStudyMetric[]
  }
  intervention: {
    title: string
    items: CaseStudyInterventionItem[]
  }
  stats: CaseStudyStat[]
  bottomNote: string
}

type CaseStudyTemplateProps = {
  data: CaseStudyData
  /** One lucide icon per intervention item, in order. */
  icons: LucideIcon[]
}

export const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ data, icons }) => {
  const { challenge, intervention } = data

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel
        number={data.sectionNumber}
        text={data.sectionText}
        className="reveal reveal-d1"
      />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          {data.headline} <span className="text-wmie-accent">{data.headlineAccent}</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-4">
        <p className="text-[13px] text-[#A3A3A3] leading-relaxed">{data.intro}</p>
      </div>

      {/* Two columns as one vertically centered band: equal heights, tops and bottoms aligned */}
      <div className="flex-1 min-h-0 flex items-center">
        <div className="w-full flex gap-5">
          {/* Left: La sfida — with mini metrics */}
          <div className="w-[400px] shrink-0 flex flex-col reveal reveal-d3">
            <div
              className="flex flex-col"
              style={{
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '2px',
              }}
            >
              <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-3">
                {challenge.title}
              </h3>
              <p className="text-[12px] text-[#A3A3A3] leading-[1.6] mb-4">{challenge.body}</p>
              <div className="flex flex-col gap-3 mt-auto">
                {challenge.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                    style={{
                      padding: '10px 12px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '2px',
                    }}
                  >
                    <span className="font-display text-[18px] font-semibold text-wmie-accent shrink-0 w-[76px] leading-tight">
                      {m.value}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-neutral-100">{m.label}</span>
                      <p className="text-[10px] text-[#525252] leading-snug mt-0.5">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: L'intervento — cards */}
          <div className="flex-1 min-w-0 flex flex-col gap-3 reveal reveal-d4">
            <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-1">
              {intervention.title}
            </h3>

            {intervention.items.map((item, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={i}
                  className="service-card flex items-center gap-4 flex-1"
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
                    {Icon && <Icon size={16} className="text-wmie-accent" />}
                  </div>
                  <div className="min-w-0">
                    <span className="font-display text-[14px] font-semibold text-neutral-100">
                      {item.label}
                    </span>
                    <p className="text-[12px] text-[#A3A3A3] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="reveal reveal-d5 flex gap-10 mt-4 pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {data.stats.map((stat, i) => (
          <div key={i}>
            <span
              className="stat-value portfolio-metric font-display text-[40px] font-semibold"
              style={{ animationDelay: `${600 + i * 150}ms` }}
            >
              {stat.value}
            </span>
            <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.1em] mt-1">
              {stat.label}
            </p>
            {stat.note && (
              <p className="font-wmie-mono text-[9px] text-[#525252] mt-0.5">{stat.note}</p>
            )}
          </div>
        ))}
        <div className="flex items-end ml-auto pl-6">
          <p className="text-[11px] text-[#525252] italic text-right max-w-[380px] leading-snug">
            {data.bottomNote}
          </p>
        </div>
      </div>
    </div>
  )
}
