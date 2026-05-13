import React from 'react'

type VideoMockupSlideProps = {
  videoUrl: string
  caption?: string
}

export const VideoMockupSlide: React.FC<VideoMockupSlideProps> = ({ videoUrl, caption }) => {
  return (
    <div className="p-12 max-w-[1400px] mx-auto w-full relative z-[2] h-full flex flex-col items-center justify-center">
      {/* Browser frame — shrink-wraps the video */}
      <div className="browser-frame" style={{ maxWidth: '1100px' }}>
        <div className="browser-frame-bar">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </div>
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            style={{ display: 'block', maxWidth: '1100px', maxHeight: '740px' }}
          />
        ) : (
          <div className="flex items-center justify-center bg-[#1A1A1A]" style={{ width: '1100px', aspectRatio: '16/9' }}>
            <span className="font-wmie-mono text-sm text-[#525252]">
              Video placeholder
            </span>
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <p className="font-wmie-mono text-[11px] text-[#A3A3A3] text-center mt-4" style={{ flexShrink: 0 }}>
          {caption}
        </p>
      )}
    </div>
  )
}
