import React from 'react'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Box, BookOpen, BarChart3 } from 'lucide-react'

const interventionItems = [
  { icon: Box, label: 'Modellazione 3D interattiva', desc: 'Ogni formaggio ricostruito come modello 3D con Three.js: esplorabile, ruotabile, tagliabile virtualmente. Asset distribuiti su Cloudflare CDN per performance uniformi in tutti i mercati.' },
  { icon: BookOpen, label: 'Storytelling di filiera', desc: 'Ogni interazione 3D inserita in un flusso narrativo che racconta territorio, filiera e processo produttivo. Animazioni GSAP che guidano il buyer dalla curiosita alla comprensione del valore.' },
  { icon: BarChart3, label: 'Ottimizzazione data-driven', desc: 'Tracciamento sessioni con Microsoft Clarity. Navigazione costruita su dati di comportamento reale per trattenere il buyer, educarlo e avvicinarlo alla decisione d\'acquisto.' },
]

const challengeMetrics = [
  { value: 'PDF', label: 'Strumenti di vendita obsoleti', desc: 'Sales rep con cataloghi cartacei per prodotti che meritavano un\'esperienza sensoriale.' },
  { value: '20+', label: 'Paesi senza strumenti digitali', desc: 'Rete di distribuzione globale servita da materiali inadeguati.' },
  { value: 'Basso', label: 'Tasso di conversione meeting', desc: 'Trattative piu lunghe del necessario, conversione sotto il potenziale.' },
]

const stats = [
  { value: '3 min', label: 'Dwell time medio', note: 'vs 54s media mercato' },
  { value: '11%', label: 'Bounce rate', note: 'vs 50% media mercato' },
  { value: '+14%', label: 'Richieste campionatura' },
]

export const CaseStudyCaoSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="05" text="Case Study" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          CAO Formaggi — Un sito 3D interattivo diventato il miglior venditore dell&apos;{' '}
          <span className="text-wmie-accent">azienda</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-4">
        <p className="text-[13px] text-[#A3A3A3]">
          Caseificio storico con distribuzione internazionale in oltre 20 Paesi. Il rapporto con i buyer esteri e il cuore del business: ogni trattativa si gioca sulla capacita di far percepire la qualita del prodotto prima dell&apos;assaggio.
        </p>
      </div>

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Left: La sfida — with mini metrics */}
        <div className="w-[400px] shrink-0 flex flex-col reveal reveal-d3">
          <div
            className="flex flex-col flex-1"
            style={{
              padding: '20px 24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '2px',
            }}
          >
            <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-3">
              La sfida
            </h3>
            <p className="text-[12px] text-[#A3A3A3] leading-[1.7] mb-4">
              In un mercato dove i competitor investono in esperienze digitali immersive, CAO non disponeva di alcuno strumento digitale per raccontare il prodotto. I sales representative si presentavano ai buyer con PDF statici e cataloghi cartacei.
            </p>
            <div className="flex flex-col gap-3 mt-auto">
              {challengeMetrics.map((m, i) => (
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
                  <span className="font-display text-[18px] font-semibold text-wmie-accent shrink-0 w-[50px]">
                    {m.value}
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-100">{m.label}</span>
                    <p className="text-[10px] text-[#525252] leading-snug mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: L'intervento — cards */}
        <div className="flex-1 flex flex-col gap-3 reveal reveal-d4">
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
      <div className="reveal reveal-d5 flex gap-10 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {stats.map((stat, i) => (
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
            {'note' in stat && stat.note && (
              <p className="font-wmie-mono text-[9px] text-[#525252] mt-0.5">
                {stat.note}
              </p>
            )}
          </div>
        ))}
        <div className="flex items-end ml-auto">
          <p className="text-[11px] text-[#525252] italic">
            +14% campionature · -15% closing time · Adottato come strumento primario in 12 Paesi.
          </p>
        </div>
      </div>
    </div>
  )
}
