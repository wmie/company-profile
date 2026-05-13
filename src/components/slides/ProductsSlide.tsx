import React from 'react'
import { content } from '../../data/content'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Server, PartyPopper, Home, Share2, CreditCard, Award } from 'lucide-react'

const smallIcons = [Server, PartyPopper, Share2, CreditCard]

export const ProductsSlide: React.FC = () => {
  const { items, subtitle, bottomText } = content.products
  const quella = items[2] // Quella
  const others = [items[0], items[1], items[3], items[4]] // Swiftrise, Cream, Pigeon, Cards

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="05" text="Prodotti" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-3">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Costruiamo prima per noi.{' '}
          <span className="text-wmie-accent">Poi per voi.</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-5">
        <p className="text-base leading-relaxed text-[#A3A3A3] max-w-[560px]">
          {subtitle}
        </p>
      </div>

      <div className="reveal reveal-d3 flex gap-4 flex-1 min-h-0">
        {/* Left: Quella — hero card */}
        <div
          className="w-[480px] shrink-0 flex flex-col"
          style={{
            padding: '28px 32px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '2px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(139, 92, 246, 0.02))',
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: '40px',
              height: '40px',
              background: 'rgba(139, 92, 246, 0.15)',
              borderRadius: '4px',
            }}
          >
            <Home size={20} className="text-wmie-accent" />
          </div>

          <h3 className="font-display text-[24px] font-semibold text-neutral-100 mt-3">
            {quella.name}
          </h3>

          <p className="text-[14px] text-[#A3A3A3] leading-relaxed mt-2">
            {quella.desc}
          </p>

          <p className="font-wmie-mono text-[11px] text-[#A3A3A3] leading-relaxed mt-3">
            {quella.competence}
          </p>

          {/* EINS Grant badge */}
          <div
            className="flex items-start gap-3 mt-4"
            style={{
              padding: '14px 16px',
              background: 'rgba(139, 92, 246, 0.06)',
              border: '1px solid rgba(139, 92, 246, 0.12)',
              borderRadius: '2px',
            }}
          >
            <Award size={18} className="text-wmie-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-wmie-mono text-[10px] text-wmie-accent uppercase tracking-[0.1em] block mb-1">
                EINS Spoke 4 — Grant €70k
              </span>
              <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
                {'grant' in quella ? (quella as { grant: string }).grant : ''}
              </p>
            </div>
          </div>

          {/* Videolina badge */}
          <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="font-wmie-mono text-[8px] text-[#A3A3A3] uppercase tracking-[0.08em]">As seen on</span>
            <img
              src="https://www.videolina.it/Content/images/uol-004-inverso-121-20.png"
              alt="Videolina"
              style={{ height: '14px', opacity: 0.7 }}
            />
          </div>

          {/* CTA */}
          {'link' in quella && quella.link && (
            <a
              href={quella.link as string}
              target="_blank"
              rel="noopener noreferrer"
              className="wmie-btn wmie-btn-primary wmie-btn-lg cta-glow mt-auto"
              style={{ marginTop: '16px', textAlign: 'center' }}
            >
              {('linkLabel' in quella && quella.linkLabel) || 'Scopri di piu'} &rarr;
            </a>
          )}
        </div>

        {/* Right: other products — 2x2 grid */}
        <div
          className="flex-1"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '10px',
          }}
        >
          {others.map((product, i) => {
            const Icon = smallIcons[i]
            return (
              <div
                key={i}
                className="service-card"
                style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '28px',
                    height: '28px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    borderRadius: '2px',
                  }}
                >
                  <Icon size={14} className="text-wmie-accent" />
                </div>

                <h3 className="font-display text-[15px] font-semibold text-neutral-100 mt-2">
                  {product.name}
                </h3>

                <p className="text-[11px] text-[#A3A3A3] leading-snug mt-1">
                  {product.desc}
                </p>

                <p className="font-wmie-mono text-[8px] text-[#525252] tracking-[0.05em] mt-auto pt-2">
                  {product.competence}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="reveal reveal-d4 mt-4">
        <p className="text-[13px] text-[#A3A3A3] leading-relaxed max-w-[720px]">
          {bottomText}
        </p>
      </div>
    </div>
  )
}
