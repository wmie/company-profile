import React from 'react'
import { Box, BookOpen, Bot } from 'lucide-react'
import { CaseStudyTemplate } from './CaseStudyTemplate'
import { content } from '../../data/content'

export const CaseStudyCaoSlide: React.FC = () => (
  <CaseStudyTemplate data={content.caseStudies.cao} icons={[Box, BookOpen, Bot]} />
)
