import React from 'react'

export type OrbConfig = {
  className: string
  style?: React.CSSProperties
}

type SlideBackgroundProps = {
  spotlightPosition?: string
  orbs?: OrbConfig[]
  showGridFloor?: boolean
  showGlowLine?: boolean
}

export const SlideBackground: React.FC<SlideBackgroundProps> = ({
  spotlightPosition = '35%',
  orbs = [
    { className: 'slide-orb slide-orb-1' },
    { className: 'slide-orb slide-orb-2' },
    { className: 'slide-orb slide-orb-3' },
  ],
  showGridFloor = true,
  showGlowLine = true,
}) => {
  return (
    <div className="slide-bg" aria-hidden="true">
      {showGridFloor && <div className="slide-grid-floor" />}
      <div className="slide-spotlight" style={{ left: spotlightPosition }} />
      {orbs.map((orb, i) => (
        <div key={i} className={orb.className} style={orb.style} />
      ))}
      {showGlowLine && <div className="slide-glow-line" />}
    </div>
  )
}
