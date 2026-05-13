import React from 'react'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Box, Layers, PresentationIcon } from 'lucide-react'

const interventionItems = [
  { icon: Box, label: 'Modello 3D interattivo', desc: 'Lo smart meter reso esplorabile: l\'utente lo ruota, lo apre, vede i componenti interni. Un prodotto che nessuno poteva toccare diventa tangibile in pochi secondi.' },
  { icon: Layers, label: 'UI/UX completa', desc: 'Flusso narrativo progettato per spiegare la tecnologia a un pubblico non tecnico. Dalla value proposition alle specifiche, senza perdere nessuno lungo il percorso.' },
  { icon: PresentationIcon, label: 'Strumento commerciale', desc: 'Non un sito vetrina. Uno strumento che il team sales usa in ogni meeting con investitori e clienti. Sostituisce slide deck, PDF e demo fisiche.' },
]

const stats = [
  { value: '3 min', label: 'Dwell time medio' },
  { value: '100', label: 'Lighthouse Score' },
  { value: '0', label: 'Dipendenze backend' },
]

export const CaseStudyEnermedSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="06" text="Case Study" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Un prodotto che nessuno capiva, trasformato in uno strumento di{' '}
          <span className="text-wmie-accent">vendita</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-5">
        <p className="text-sm text-[#A3A3A3]">
          Enermed — Fornitore energia ad alto valore tecnologico. Uno smart meter innovativo, un mercato che non lo conosceva.
        </p>
      </div>

      <div className="reveal reveal-d3 flex gap-6 flex-1 min-h-0">
        {/* Left: La sfida — card */}
        <div
          className="w-[420px] shrink-0 flex flex-col"
          style={{
            padding: '24px 28px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '2px',
          }}
        >
          <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-3">
            La sfida
          </h3>
          <p className="text-[13px] text-[#A3A3A3] leading-[1.7]">
            Enermed aveva sviluppato uno smart meter con tecnologia proprietaria, ma il prodotto era troppo tecnico per essere comunicato efficacemente. Il team commerciale si affidava a slide deck generici e PDF statici. Gli investitori non riuscivano a percepire il valore reale del prodotto. Serviva uno strumento che rendesse tangibile l&apos;innovazione senza richiedere una demo fisica.
          </p>
        </div>

        {/* Right: L'intervento — cards */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-1">
            L&apos;intervento
          </h3>

          {interventionItems.map((item, i) => {
            const Icon = item.icon
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
                    {item.label}
                  </span>
                  <p className="text-[12px] text-[#A3A3A3] leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats row */}
      <div className="reveal reveal-d4 flex gap-12 mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {stats.map((stat, i) => (
          <div key={i}>
            <span
              className="stat-value portfolio-metric font-display text-[44px] font-semibold"
              style={{ animationDelay: `${600 + i * 150}ms` }}
            >
              {stat.value}
            </span>
            <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.1em] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
        <div className="flex items-end ml-auto">
          <p className="text-[11px] text-[#525252] italic">
            Strumento di comunicazione per il team commerciale e per investor relations.
          </p>
        </div>
      </div>
    </div>
  )
}
