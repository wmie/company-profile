import React from 'react'

export type ChapterStat = { value: string; label: string }

type ChapterSlideProps = {
  number: string
  title: string
  subtitle?: string
  /** Mono pill above the number, e.g. "Shopify Partner". */
  badge?: string
  /** Up to 3 stats rendered in a row under the subtitle. */
  stats?: ChapterStat[]
}

export const ChapterSlide: React.FC<ChapterSlideProps> = ({
  number,
  title,
  subtitle,
  badge,
  stats,
}) => {
  const chapterStats = stats?.slice(0, 3) ?? []

  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center">
      <div className="reveal reveal-d1 text-center">
        {badge && (
          <span
            className="font-wmie-mono text-[10px] uppercase tracking-[0.15em] text-wmie-accent inline-block mb-5"
            style={{
              padding: '4px 10px',
              border: '1px solid rgba(139,92,246,0.3)',
              background: 'rgba(139,92,246,0.12)',
              borderRadius: '2px',
            }}
          >
            {badge}
          </span>
        )}
        <span className="font-wmie-mono text-[13px] text-wmie-accent tracking-[0.15em] uppercase block mb-4">
          {number}
        </span>
        <h2 className="font-display text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-100">
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-[16px] text-[#A3A3A3] mt-4 mx-auto leading-relaxed ${
              chapterStats.length ? 'max-w-[720px]' : 'max-w-[500px]'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {chapterStats.length > 0 && (
        <div
          className="reveal reveal-d3 w-full max-w-[900px] mx-auto mt-10 pt-8 flex justify-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {chapterStats.map((stat, i) => (
            <div key={i} className="flex-1 px-4 text-center">
              <span
                className="stat-value portfolio-metric font-display text-[44px] font-semibold"
                style={{ animationDelay: `${600 + i * 150}ms` }}
              >
                {stat.value}
              </span>
              <p className="font-wmie-mono text-[10px] text-[#A3A3A3] uppercase tracking-[0.1em] leading-relaxed mt-2 max-w-[240px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
