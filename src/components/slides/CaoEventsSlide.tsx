import React from 'react'
import { Server, ImageDown, Languages } from 'lucide-react'
import { SectionLabel } from '../../components/core/SectionLabel'
import { content, media } from '../../data/content'
import { SlideVideo } from '../core/SlideVideo'

const icons = [Server, ImageDown, Languages]

export const CaoEventsSlide: React.FC = () => {
  const data = content.caseStudies.caoEvents

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex items-stretch gap-10">
      {/* Left: text + KPIs */}
      <div className="w-[560px] shrink-0 flex flex-col justify-center">
        <SectionLabel
          number={data.sectionNumber}
          text={data.sectionText}
          className="reveal reveal-d1"
        />

        <div className="reveal reveal-d1 mb-3">
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
            {data.headline} <span className="text-wmie-accent">{data.headlineAccent}</span>
          </h2>
        </div>

        <div className="reveal reveal-d2 mb-5">
          <p className="text-[13px] text-[#A3A3A3] leading-relaxed">{data.intro}</p>
        </div>

        <div className="reveal reveal-d3 flex flex-col gap-3">
          {data.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="flex items-start gap-3">
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

        <div
          className="reveal reveal-d4 flex gap-8 mt-6 pt-5"
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
        </div>
      </div>

      {/* Right: the minisite, 16:9 */}
      <div className="flex-1 min-w-0 flex flex-col justify-center reveal reveal-d2">
        <div className="browser-frame">
          <div className="browser-frame-bar">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
          </div>
          <div style={{ aspectRatio: '16 / 9', background: '#0A0A0A' }}>
            <SlideVideo
              src={media.cao.eventsMinisite}
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
        <p className="font-wmie-mono text-[11px] text-[#A3A3A3] text-center leading-relaxed mt-4">
          {data.videoCaption}
        </p>
      </div>
    </div>
  )
}
