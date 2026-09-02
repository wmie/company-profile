import React from 'react'
import type { MediaSliderItem } from '../../data/content'

export type { MediaSliderItem }

export type MediaSliderSlideProps = {
  items: MediaSliderItem[]
  eyebrow?: string
  caption?: string
}

// STUB — Agent A replaces this with the real implementation (see docs/plans §4).
export const MediaSliderSlide: React.FC<MediaSliderSlideProps> = ({ items, eyebrow, caption }) => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center">
      <p className="font-wmie-mono text-[11px] text-[#A3A3A3]">{eyebrow ?? 'Media slider'} · {items.length} items · {caption}</p>
    </div>
  )
}
