import React from 'react'
import { Route, Eye, GitMerge } from 'lucide-react'
import { CaseStudyTemplate } from './CaseStudyTemplate'
import { content } from '../../data/content'

export const CaseStudyColluSlide: React.FC = () => (
  <CaseStudyTemplate data={content.caseStudies.collu} icons={[Route, Eye, GitMerge]} />
)
