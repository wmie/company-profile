import React from 'react'
import { content } from '../../data/content'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Gauge, Layout, MousePointerClick, BarChart3 } from 'lucide-react'

export const SLASlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Section label */}
      <SectionLabel number="03" text="SLA" className="reveal reveal-d1" />

      {/* Headline */}
      <div className="reveal reveal-d2 mb-3">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          I numeri dietro ogni{' '}
          <span className="text-wmie-accent">progetto</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="reveal reveal-d3 mb-6">
        <p className="text-base leading-relaxed text-[#A3A3A3] max-w-[560px]">
          {content.sla.subtitle}
        </p>
      </div>

      {/* Bento Grid */}
      <div
        className="reveal reveal-d4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: '1fr 1fr',
          gap: '16px',
          flex: 1,
        }}
      >
        {/* Cell 1: Uptime — spans col 1-2, row 1 */}
        <div
          className="service-card"
          style={{
            gridColumn: '1 / 3',
            gridRow: '1',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.12em]">
              All Systems Operational
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span
              className="stat-value font-display text-[72px] font-semibold leading-[1] tracking-[-0.04em] text-neutral-100"
              style={{ animationDelay: '200ms' }}
            >
              {content.sla.uptime.value}
            </span>
            <span
              className="stat-value font-display text-[40px] font-semibold leading-[1] text-wmie-accent"
              style={{ animationDelay: '200ms' }}
            >
              {content.sla.uptime.unit}
            </span>
          </div>
          <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.12em] mt-3">
            {content.sla.uptime.label}
          </p>
          <p className="text-xs text-[#A3A3A3] leading-snug mt-2">
            {content.sla.uptime.desc}
          </p>
        </div>

        {/* Cell 2: LCP — col 3, row 1 */}
        <div
          className="service-card"
          style={{
            gridColumn: '3',
            gridRow: '1',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            className="flex items-center justify-center mb-4"
            style={{
              width: '32px',
              height: '32px',
              background: 'rgba(139, 92, 246, 0.12)',
              borderRadius: '2px',
            }}
          >
            <Gauge size={16} className="text-wmie-accent" />
          </div>
          <div className="flex items-baseline gap-1">
            <span
              className="stat-value font-display text-[36px] font-semibold leading-[1] tracking-[-0.03em] text-neutral-100"
              style={{ animationDelay: '350ms' }}
            >
              {content.sla.lcp.value}
            </span>
            <span
              className="stat-value font-display text-[24px] font-semibold leading-[1] text-wmie-accent"
              style={{ animationDelay: '350ms' }}
            >
              {content.sla.lcp.unit}
            </span>
          </div>
          <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.12em] mt-3">
            {content.sla.lcp.label}
          </p>
          <p className="text-xs text-[#A3A3A3] leading-snug mt-2">
            {content.sla.lcp.desc}
          </p>
        </div>

        {/* Cell 3: CLS — col 4, row 1 */}
        <div
          className="service-card"
          style={{
            gridColumn: '4',
            gridRow: '1',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            className="flex items-center justify-center mb-4"
            style={{
              width: '32px',
              height: '32px',
              background: 'rgba(139, 92, 246, 0.12)',
              borderRadius: '2px',
            }}
          >
            <Layout size={16} className="text-wmie-accent" />
          </div>
          <div className="flex items-baseline gap-1">
            <span
              className="stat-value font-display text-[36px] font-semibold leading-[1] tracking-[-0.03em] text-neutral-100"
              style={{ animationDelay: '500ms' }}
            >
              {content.sla.cls.value}
            </span>
          </div>
          <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.12em] mt-3">
            {content.sla.cls.label}
          </p>
          <p className="text-xs text-[#A3A3A3] leading-snug mt-2">
            {content.sla.cls.desc}
          </p>
        </div>

        {/* Cell 4: INP — col 1, row 2 */}
        <div
          className="service-card"
          style={{
            gridColumn: '1',
            gridRow: '2',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            className="flex items-center justify-center mb-4"
            style={{
              width: '32px',
              height: '32px',
              background: 'rgba(139, 92, 246, 0.12)',
              borderRadius: '2px',
            }}
          >
            <MousePointerClick size={16} className="text-wmie-accent" />
          </div>
          <div className="flex items-baseline gap-1">
            <span
              className="stat-value font-display text-[36px] font-semibold leading-[1] tracking-[-0.03em] text-neutral-100"
              style={{ animationDelay: '650ms' }}
            >
              {content.sla.inp.value}
            </span>
            <span
              className="stat-value font-display text-[24px] font-semibold leading-[1] text-wmie-accent"
              style={{ animationDelay: '650ms' }}
            >
              {content.sla.inp.unit}
            </span>
          </div>
          <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.12em] mt-3">
            {content.sla.inp.label}
          </p>
          <p className="text-xs text-[#A3A3A3] leading-snug mt-2">
            {content.sla.inp.desc}
          </p>
        </div>

        {/* Cell 5: Accent Card — col 2-4, row 2 */}
        <div
          style={{
            gridColumn: '2 / 5',
            gridRow: '2',
            border: '1px solid rgba(139, 92, 246, 0.12)',
            borderRadius: '2px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06), rgba(139, 92, 246, 0.02))',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Icon circle */}
          <div
            className="flex items-center justify-center mb-5"
            style={{
              width: '48px',
              height: '48px',
              background: 'rgba(139, 92, 246, 0.12)',
              borderRadius: '50%',
            }}
          >
            <BarChart3 size={20} className="text-wmie-accent" />
          </div>

          {/* Combined metrics row */}
          <div className="flex items-start gap-10">
            {content.sla.accentMetrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                {metric.value && (
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="stat-value font-display text-[28px] font-semibold leading-[1] tracking-[-0.03em] text-neutral-100"
                      style={{ animationDelay: '800ms' }}
                    >
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span
                        className="stat-value font-display text-[18px] font-semibold leading-[1] text-wmie-accent"
                        style={{ animationDelay: '800ms' }}
                      >
                        {metric.unit}
                      </span>
                    )}
                  </div>
                )}
                <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.12em] leading-snug">
                  {metric.label}
                </p>
                {'desc' in metric && metric.desc && (
                  <p className="text-[11px] text-[#A3A3A3] leading-snug mt-1.5" style={{ textTransform: 'none', letterSpacing: 'normal', fontFamily: 'var(--font-inter)' }}>
                    {metric.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
