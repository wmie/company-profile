import React, { useState } from 'react'
import { content } from '../../data/content'
import { Search, PenTool, Code2, Rocket, TrendingUp, Infinity } from 'lucide-react'

const phaseIcons = [Search, PenTool, Code2, Rocket, TrendingUp]
const phasePositions = [
  { top: '12.5%', left: '50%' },
  { top: '38.4%', left: '85.7%' },
  { top: '80.3%', left: '72.1%' },
  { top: '80.3%', left: '27.9%' },
  { top: '38.4%', left: '14.3%' },
]

export const ProcessSlide: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0)
  const phase = content.process.phases[activePhase]

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col">
      <div className="reveal reveal-d1 flex items-center gap-12 flex-1">
        {/* Left: active phase details */}
        <div className="w-[420px] shrink-0 flex flex-col">
          <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-100 mb-8">
            Un ciclo in cinque fasi che non si{' '}
            <span className="text-wmie-accent">ferma</span>
          </h2>

          {/* Active phase card */}
          <div
            style={{
              border: '1px solid rgba(139, 92, 246, 0.15)',
              borderRadius: '2px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06), rgba(139, 92, 246, 0.02))',
              padding: '28px',
              transition: 'all 300ms ease',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-wmie-mono text-[13px] text-wmie-accent font-semibold">
                {String(activePhase + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-[22px] font-semibold text-neutral-100">
                {phase.name}
              </span>
            </div>
            <p className="font-display text-[15px] font-medium text-neutral-100/80 mb-3 italic">
              {phase.subtitle}
            </p>
            <p className="text-[14px] text-[#A3A3A3] leading-relaxed mb-4">
              {phase.body}
            </p>
            <div
              className="font-wmie-mono text-[10px] text-[#A3A3A3] tracking-[0.05em] pt-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-wmie-accent">Checkpoint:</span>{' '}
              {phase.checkpoint}
            </div>
          </div>

          {/* Phase selector pills */}
          <div className="flex gap-2 mt-4">
            {content.process.phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className="font-wmie-mono text-[10px] tracking-[0.05em] px-3 py-1.5 rounded-[2px] transition-all duration-200 cursor-pointer"
                style={{
                  background: i === activePhase ? 'rgba(139,92,246,0.15)' : 'transparent',
                  border: `1px solid ${i === activePhase ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  color: i === activePhase ? '#8B5CF6' : '#A3A3A3',
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: circular animation */}
        <div className="flex-1 flex items-center justify-center">
          <div className="reveal reveal-d2 relative" style={{ width: '480px', height: '480px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.03)" strokeWidth="20" fill="none" />
              <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
              <circle
                cx="200" cy="200" r="150"
                stroke="rgba(139,92,246,0.25)" strokeWidth="2" fill="none"
                strokeDasharray="12 8" className="wmie-dash-flow"
              />
            </svg>

            <div className="absolute inset-0 wmie-spin-orbit">
              <div
                className="absolute w-3 h-3 rounded-full bg-wmie-accent wmie-glow-pulse"
                style={{ top: '12.5%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </div>

            {content.process.phases.map((p, i) => {
              const PhaseIcon = phaseIcons[i]
              const pos = phasePositions[i]
              const num = String(i + 1).padStart(2, '0')
              const isActive = i === activePhase

              return (
                <div
                  key={p.name}
                  className="absolute flex flex-col items-center text-center cursor-pointer"
                  style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setActivePhase(i)}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive ? 'rgba(139,92,246,0.15)' : '#111111',
                      border: `1.5px solid ${isActive ? '#8B5CF6' : 'rgba(255,255,255,0.1)'}`,
                      boxShadow: isActive ? '0 0 20px rgba(139,92,246,0.3)' : 'none',
                      transform: isActive ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    <PhaseIcon size={20} className={isActive ? 'text-wmie-accent' : 'text-wmie-text-muted'} style={{ transition: 'color 300ms' }} />
                  </div>
                  <span className="text-[10px] font-wmie-mono text-wmie-accent mt-1.5">{num}</span>
                  <span
                    className="text-xs whitespace-nowrap transition-all duration-300"
                    style={{
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? '#F5F5F5' : '#A3A3A3',
                    }}
                  >
                    {p.name}
                  </span>
                </div>
              )
            })}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div
                  className="w-20 h-20 mx-auto rounded-full border border-wmie-accent/20 flex items-center justify-center mb-2"
                  style={{ background: 'rgba(139, 92, 246, 0.05)', backdropFilter: 'blur(4px)' }}
                >
                  <Infinity size={32} className="text-wmie-accent" />
                </div>
                <div className="text-[10px] font-wmie-mono text-wmie-text-muted uppercase tracking-widest">Continuous</div>
                <div className="text-[10px] font-wmie-mono text-wmie-text-muted uppercase tracking-widest">Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
