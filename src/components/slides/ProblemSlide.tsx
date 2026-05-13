import React from 'react'
import { content } from '../../data/content'

export const ProblemSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      {/* Full headline */}
      <div className="reveal reveal-d1 mb-8">
        <h2 className="font-display text-[42px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100 max-w-[900px]">
          {content.problem.headline.replace('asset', '')}
          <span className="text-wmie-accent">asset</span>
        </h2>
      </div>

      {/* Split layout — fills available space */}
      <div className="grid grid-cols-2 gap-12 flex-1">
        {/* Left: Large stat */}
        <div className="reveal reveal-d2 flex flex-col justify-center">
          <div className="flex items-baseline gap-2">
            <span
              className="stat-value font-display text-[140px] font-semibold leading-[1] tracking-[-0.04em] text-neutral-100"
              style={{ animationDelay: '400ms' }}
            >
              {content.problem.stat}
            </span>
            <span
              className="stat-value font-display text-[80px] font-semibold leading-[1] text-wmie-accent"
              style={{ animationDelay: '550ms' }}
            >
              {content.problem.statUnit}
            </span>
          </div>
          <p className="mt-6 text-[18px] leading-[1.7] text-[#A3A3A3] max-w-[440px]">
            {content.problem.statDesc}
          </p>
          <p className="mt-4 font-wmie-mono text-[11px] text-[rgba(163,163,163,0.5)] tracking-[0.08em]">
            ({content.problem.statSource})
          </p>
        </div>

        {/* Right: Callout card — fills height */}
        <div className="reveal reveal-d3 flex flex-col">
          <div
            style={{
              border: '1px solid rgba(139, 92, 246, 0.12)',
              borderRadius: '2px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06), rgba(139, 92, 246, 0.02))',
            }}
            className="p-10 flex flex-col justify-center flex-1"
          >
            <p className="text-[17px] leading-[1.8] text-[#A3A3A3] mb-8">
              {content.problem.pattern}
            </p>
            <p className="text-[18px] leading-[1.7] text-neutral-100 font-medium">
              {content.problem.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
