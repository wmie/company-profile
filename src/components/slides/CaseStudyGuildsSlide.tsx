import React from 'react'
import { SectionLabel } from '../../components/core/SectionLabel'
import { Blocks, Eye, Users } from 'lucide-react'

const interventionItems = [
  { icon: Blocks, label: 'Oggetti 3D interattivi', desc: 'Concetti astratti come blockchain e certificazione digitale resi esplorabili visivamente. L\'utente interagisce con il sistema prima di leggerlo.' },
  { icon: Eye, label: 'Storytelling tecnico accessibile', desc: 'Architettura narrativa che guida stakeholder non tecnici dalla value proposition ai dettagli implementativi, senza perdere nessuno lungo il percorso.' },
  { icon: Users, label: 'Community e funding tool', desc: 'Il sito non comunica solo: attrae. Ha contribuito a trovare nuovi fondi e a costruire una community attiva intorno al progetto.' },
]

const stats = [
  { value: '5 min', label: 'Dwell time medio' },
  { value: 'EU', label: 'Progetto Horizon 2020' },
]

export const CaseStudyGuildsSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="11" text="Case Study" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Blockchain resa comprensibile a chi non sa cos&apos;{' '}
          <span className="text-wmie-accent">e</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-5">
        <p className="text-sm text-[#A3A3A3]">
          Guilds — Progetto Horizon 2020 finanziato dalla Commissione Europea. Un sistema di certificazione professionale su blockchain da comunicare a un pubblico non tecnico.
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
            Guilds aveva costruito un sistema di certificazione professionale basato su blockchain, ma la tecnologia era incomprensibile per il pubblico target: professionisti, istituzioni educative e policy maker europei. Serviva un sito che traducesse un concetto astratto in un&apos;esperienza concreta, capace di attrarre nuovi partner e fondi senza richiedere competenze tecniche per essere compreso.
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
            Ha contribuito a trovare nuovi fondi e a costruire una community attiva.
          </p>
        </div>
      </div>
    </div>
  )
}
