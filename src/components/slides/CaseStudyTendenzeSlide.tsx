import React from 'react'
import { MousePointerClick, Workflow, Bug } from 'lucide-react'
import { CaseStudyTemplate } from './CaseStudyTemplate'
import { content } from '../../data/content'

export const CaseStudyTendenzeSlide: React.FC = () => (
  <CaseStudyTemplate
    data={content.caseStudies.tendenze}
    icons={[MousePointerClick, Workflow, Bug]}
  />
)
