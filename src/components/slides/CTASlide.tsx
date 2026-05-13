import React from 'react'
import { content } from '../../data/content'

export const CTASlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center text-center">
      {/* Logo mark */}
      <div className="reveal reveal-d1">
        <span className="wmie-mark text-[32px] text-neutral-100">
          wmie<span className="text-[#8B5CF6]">.</span>
        </span>
      </div>

      {/* Section intro */}
      <p className="reveal reveal-d2 text-[16px] text-[#A3A3A3] mt-8">
        {content.cta.sectionIntro}
      </p>

      {/* Headline */}
      <div className="reveal reveal-d3 mt-4">
        <h2 className="font-display text-[48px] font-semibold leading-[1.1] text-neutral-100">
          {content.cta.headline}
        </h2>
        <p className="font-display text-[48px] font-semibold leading-[1.1] text-wmie-accent">
          {content.cta.headlineAccent}
        </p>
      </div>

      {/* Criteria intro */}
      <div className="reveal reveal-d4 mt-8 max-w-[600px] text-left">
        <p className="text-base text-[#A3A3A3] mb-4">Lavoriamo meglio con chi:</p>
        <ul className="space-y-2">
          {content.cta.criteria.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-[#A3A3A3]">
              <span
                className="mt-[7px] flex-shrink-0 inline-block w-[6px] h-[6px] rounded-full"
                style={{ background: '#8B5CF6' }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA button */}
      <div className="reveal reveal-d5">
        <a className="wmie-btn wmie-btn-primary wmie-btn-xl cta-glow mt-8 inline-flex">
          {content.cta.buttonText}
        </a>
      </div>
    </div>
  )
}
