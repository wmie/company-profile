import React, { forwardRef } from 'react'
import { SlideBackground } from './SlideBackground'
import type { OrbConfig } from './SlideBackground'

type SlideContainerProps = {
  children: React.ReactNode
  state: 'active' | 'above' | 'below'
  index: number
  spotlightPosition?: string
  orbs?: OrbConfig[]
}

export const SlideContainer = forwardRef<HTMLDivElement, SlideContainerProps>(
  ({ children, state, index, spotlightPosition, orbs }, ref) => {
    return (
      <div
        ref={ref}
        className="slide"
        data-state={state}
        data-index={index}
      >
        <SlideBackground
          spotlightPosition={spotlightPosition}
          orbs={orbs}
        />
        {children}
      </div>
    )
  },
)

SlideContainer.displayName = 'SlideContainer'
