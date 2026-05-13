import React from 'react'
import { SectionLabel } from '../../components/core/SectionLabel'
import { FileText, Microscope, Globe } from 'lucide-react'

const interventionItems = [
  { icon: Microscope, label: 'Traduzione tecnica visiva', desc: 'Un progetto di ricerca su waste-to-energy con decine di workpackage reso navigabile e comprensibile. Ogni sezione tecnica convertita in comunicazione chiara per stakeholder istituzionali.' },
  { icon: FileText, label: 'Reporting per la Commissione', desc: 'Il sito funziona come strumento di reporting visivo. Avanzamenti, milestone e deliverable comunicati in modo strutturato e accessibile senza richiedere documenti tecnici.' },
  { icon: Globe, label: 'Attrazione investitori', desc: 'Architettura informativa progettata per convincere: chi atterra sul sito capisce il valore del progetto in meno di un minuto, con un percorso di approfondimento per chi vuole i dettagli.' },
]

const stats = [
  { value: '4 min', label: 'Dwell time medio' },
  { value: '€6M', label: 'Grant Horizon Europe' },
]

export const CaseStudyW2ewSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="08" text="Case Study" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Un grant da €6M raccontato a chi decide dove investire i{' '}
          <span className="text-wmie-accent">prossimi</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-5">
        <p className="text-sm text-[#A3A3A3]">
          W2EW — Progetto Horizon Europe 2020, Paesi Bassi. Ricerca waste-to-energy con partner internazionali e la necessita di comunicare alla Commissione Europea e a nuovi investitori.
        </p>
      </div>

      <div className="reveal reveal-d3 flex gap-6 flex-1 min-h-0">
        {/* Left: La sfida */}
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
            W2EW e un progetto di ricerca europeo finanziato con €6M dalla Commissione Europea. Il consorzio internazionale aveva bisogno di comunicare gli avanzamenti del progetto in modo comprensibile a due pubblici molto diversi: i reviewer istituzionali della Commissione e potenziali nuovi investitori. La complessita tecnica del waste-to-energy rendeva impossibile usare un sito corporate tradizionale.
          </p>
        </div>

        {/* Right: L'intervento */}
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
            Ha contribuito ad attrarre nuovi investimenti nel progetto.
          </p>
        </div>
      </div>
    </div>
  )
}
