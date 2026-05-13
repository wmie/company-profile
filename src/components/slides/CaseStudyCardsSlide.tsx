import React from 'react'
import { SectionLabel } from '../../components/core/SectionLabel'
import { CreditCard, Share2, Bell } from 'lucide-react'

const interventionItems = [
  { icon: CreditCard, label: 'Biglietto da visita digitale', desc: 'Un prodotto fisico trasformato in un\'esperienza digitale. L\'utente avvicina il telefono, riceve il profilo completo: contatti, link, social, portfolio. Zero app da installare.' },
  { icon: Share2, label: 'File sharing integrato', desc: 'Non solo un biglietto: uno strumento di lavoro. Possibilita di condividere documenti, presentazioni e media direttamente dal profilo, con link tracciabili.' },
  { icon: Bell, label: 'Notifiche push', desc: 'Il biglietto da visita che lavora dopo il primo incontro. Notifiche push per aggiornamenti, nuovi contenuti condivisi e follow-up automatici.' },
]

export const CaseStudyCardsSlide: React.FC = () => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <SectionLabel number="09" text="Prodotto interno" className="reveal reveal-d1" />

      <div className="reveal reveal-d1 mb-2">
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100">
          Il biglietto da visita che continua a lavorare dopo il primo{' '}
          <span className="text-wmie-accent">incontro</span>
        </h2>
      </div>

      <div className="reveal reveal-d2 mb-5">
        <p className="text-sm text-[#A3A3A3]">
          Cards — Prodotto interno wmie. Dalla prima riga di codice al prodotto live: ideazione, sviluppo e rilascio di un micro-prodotto funzionale in tempi rapidi.
        </p>
      </div>

      <div className="reveal reveal-d3 flex gap-6 flex-1 min-h-0">
        {/* Left: Il concept */}
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
            Il concept
          </h3>
          <p className="text-[13px] text-[#A3A3A3] leading-[1.7] mb-4">
            Il biglietto da visita cartaceo e un oggetto morto: lo ricevi, lo dimentichi, lo perdi. Cards nasce per risolvere un problema reale del nostro team: trasformare ogni primo contatto in una connessione persistente e tracciabile.
          </p>
          <p className="text-[13px] text-[#A3A3A3] leading-[1.7]">
            Un NFC tag o un QR code apre un profilo digitale completo con file sharing e notifiche push. Nessuna app richiesta. Funziona con qualsiasi smartphone.
          </p>
        </div>

        {/* Right: Cosa abbiamo costruito */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-wmie-mono text-[11px] text-wmie-accent uppercase tracking-[0.12em] mb-1">
            Cosa abbiamo costruito
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

      {/* Bottom note */}
      <div className="reveal reveal-d4 pt-5 mt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-[11px] text-[#525252] italic">
          Ogni problema che incontriamo e risolviamo su un nostro prodotto diventa un pattern che replichiamo nei progetti cliente.
        </p>
      </div>
    </div>
  )
}
