import React from 'react'

type ChapterSlideProps = {
  number: string
  title: string
  subtitle?: string
}

export const ChapterSlide: React.FC<ChapterSlideProps> = ({ number, title, subtitle }) => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center">
      <div className="reveal reveal-d1 text-center">
        <span className="font-wmie-mono text-[13px] text-wmie-accent tracking-[0.15em] uppercase block mb-4">
          {number}
        </span>
        <h2 className="font-display text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[16px] text-[#A3A3A3] mt-4 max-w-[500px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
