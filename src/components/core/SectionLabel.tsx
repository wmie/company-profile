import React from 'react'

type SectionLabelProps = {
  number?: string
  text: string
  icon?: React.ReactNode
  className?: string
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  text,
  icon,
  className = '',
}) => {
  return (
    <div className={`section-label ${className}`}>
      <span className="num">{icon || number}</span>
      <span className="text">{text}</span>
      <div className="line" />
    </div>
  )
}
