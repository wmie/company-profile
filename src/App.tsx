import React from 'react'
import { PresentationView } from './components/core/PresentationView'
import { CoverSlide } from './components/slides/CoverSlide'
import { ChapterSlide } from './components/slides/ChapterSlide'
import { AboutSlide } from './components/slides/AboutSlide'
import { ProblemSlide } from './components/slides/ProblemSlide'
import { EcosystemSlide } from './components/slides/EcosystemSlide'
import { EcosystemExecutiveSlide } from './components/slides/EcosystemExecutiveSlide'
import { ServicesSlide } from './components/slides/ServicesSlide'
import { SLASlide } from './components/slides/SLASlide'
import { ProcessSlide } from './components/slides/ProcessSlide'
import { CaseStudySlide } from './components/slides/CaseStudySlide'
import { CaseStudyCaoSlide } from './components/slides/CaseStudyCaoSlide'
import { CaoEventsSlide } from './components/slides/CaoEventsSlide'
import { CaseStudyTendenzeSlide } from './components/slides/CaseStudyTendenzeSlide'
import { CaseStudyColluSlide } from './components/slides/CaseStudyColluSlide'
import { CaseStudyEnermedSlide } from './components/slides/CaseStudyEnermedSlide'
import { CaseStudyGuildsSlide } from './components/slides/CaseStudyGuildsSlide'
import { CaseStudyW2ewSlide } from './components/slides/CaseStudyW2ewSlide'
import { CaseStudyCardsSlide } from './components/slides/CaseStudyCardsSlide'
import { VideoMockupSlide } from './components/slides/VideoMockupSlide'
import { VideoSliderSlide } from './components/slides/VideoSliderSlide'
import { MediaSliderSlide } from './components/slides/MediaSliderSlide'
import { ProductsSlide } from './components/slides/ProductsSlide'
import { ResultsSlide } from './components/slides/ResultsSlide'
import { TeamSlide } from './components/slides/TeamSlide'
import { TeamPartnershipsSlide } from './components/slides/TeamPartnershipsSlide'
import { PostProjectSlide } from './components/slides/PostProjectSlide'
import { CTASlide } from './components/slides/CTASlide'
import { content } from './data/content'

export type ChapterIndexEntry = { label: string; slide: number }

/**
 * Deck definition. `chapter` marks the slides listed in the cover index;
 * their positions are derived here, never hardcoded in the cover.
 * See docs/plans/2026-09-02-company-profile-q4-2026.md §3 for the rationale.
 */
type DeckEntry = { key: string; chapter?: string; render: () => React.ReactElement }

const { caseStudies, sliders, videoMockups } = content

const deck: DeckEntry[] = [
  // --- Chapter 01: Chi siamo ---
  { key: 'ch-about', chapter: 'Chi siamo', render: () => <ChapterSlide number="01" title="Chi siamo" subtitle="Il reparto tech che vi mancava." /> },
  { key: 'about', render: () => <AboutSlide /> },
  { key: 'problem', render: () => <ProblemSlide /> },
  { key: 'ecosystem', render: () => <EcosystemSlide /> },
  { key: 'ecosystem-exec', render: () => <EcosystemExecutiveSlide /> },

  // --- Chapter 02: Servizi ---
  { key: 'ch-services', chapter: 'Servizi', render: () => <ChapterSlide number="02" title="Servizi" subtitle="Quattro leve, un unico ecosistema." /> },
  { key: 'services', render: () => <ServicesSlide /> },
  { key: 'sla', render: () => <SLASlide /> },
  { key: 'process', render: () => <ProcessSlide /> },

  // --- Chapter 03: Case Studies ---
  { key: 'ch-cases', chapter: 'Case Studies', render: () => <ChapterSlide number="03" title="Case Studies" subtitle="Risultati reali, non promesse." /> },

  // C&O Welcoming Italy
  { key: 'cs-ceo', render: () => <CaseStudySlide /> },
  { key: 'vm-ceo', render: () => <VideoMockupSlide videoUrl={videoMockups[0].url} caption={videoMockups[0].caption} /> },

  // CAO Formaggi: sito 3D + assistente AI, poi il minisite eventi
  { key: 'cs-cao', render: () => <CaseStudyCaoSlide /> },
  { key: 'ms-cao-metodo', render: () => <MediaSliderSlide {...sliders.caoMetodo} /> },
  { key: 'ms-cao-sito', render: () => <MediaSliderSlide {...sliders.caoSito} /> },
  { key: 'cs-cao-events', render: () => <CaoEventsSlide /> },

  // E-commerce Shopify: Tendenze Store + Gruppo Collu
  {
    key: 'ch-shopify',
    render: () => (
      <ChapterSlide
        number={caseStudies.shopify.number}
        badge={caseStudies.shopify.badge}
        title={caseStudies.shopify.title}
        subtitle={caseStudies.shopify.subtitle}
        stats={caseStudies.shopify.stats}
      />
    ),
  },
  { key: 'cs-tendenze', render: () => <CaseStudyTendenzeSlide /> },
  { key: 'ms-tendenze', render: () => <MediaSliderSlide {...sliders.tendenze} /> },
  { key: 'cs-collu', render: () => <CaseStudyColluSlide /> },
  { key: 'ms-collu', render: () => <MediaSliderSlide {...sliders.collu} /> },

  // Enermed
  { key: 'cs-enermed', render: () => <CaseStudyEnermedSlide /> },
  {
    key: 'vm-enermed',
    render: () => (
      <VideoSliderSlide
        videos={[
          { url: '/video/enermed/EnermedPromoBento.mp4', label: 'Promo' },
          { url: '/video/enermed/CTA-section.mp4', label: 'CTA Section' },
        ]}
        caption="Enermed"
      />
    ),
  },

  // Guilds
  { key: 'cs-guilds', render: () => <CaseStudyGuildsSlide /> },
  { key: 'vm-guilds', render: () => <VideoMockupSlide videoUrl={videoMockups[1].url} caption={videoMockups[1].caption} /> },

  // W2EW
  { key: 'cs-w2ew', render: () => <CaseStudyW2ewSlide /> },
  { key: 'vm-w2ew', render: () => <VideoMockupSlide videoUrl="/video/RecWave.mp4" caption="W2EW" /> },

  // --- Chapter 04: Prodotti ---
  { key: 'ch-products', chapter: 'Prodotti', render: () => <ChapterSlide number="04" title="Prodotti" subtitle="Costruiamo prima per noi. Poi per voi." /> },
  { key: 'products', render: () => <ProductsSlide /> },
  { key: 'cs-cards', render: () => <CaseStudyCardsSlide /> },
  {
    key: 'vm-cards',
    render: () => (
      <VideoSliderSlide
        videos={[
          { url: '/video/cards/Render-v1.mp4', label: 'Render' },
          { url: '/video/cards/PitchDeck Cards.mp4', label: 'Pitch Deck' },
        ]}
        caption="Cards"
      />
    ),
  },
  { key: 'results', render: () => <ResultsSlide /> },
  { key: 'ms-concepts', render: () => <MediaSliderSlide {...sliders.concepts} /> },

  // --- Chapter 05: Team ---
  { key: 'ch-team', chapter: 'Team', render: () => <ChapterSlide number="05" title="Team" subtitle="Non siamo freelance assemblati a progetto." /> },
  { key: 'team', render: () => <TeamSlide /> },
  { key: 'team-partners', render: () => <TeamPartnershipsSlide /> },
  { key: 'post-project', render: () => <PostProjectSlide /> },
  { key: 'cta', render: () => <CTASlide /> },
]

// Slide 0 is the cover, so every deck entry sits at index + 1.
const chapters: ChapterIndexEntry[] = deck.flatMap((entry, i) =>
  entry.chapter ? [{ label: entry.chapter, slide: i + 1 }] : [],
)

export default function App() {
  const slides = [
    <CoverSlide key="cover" chapters={chapters} />,
    ...deck.map((entry) => React.cloneElement(entry.render(), { key: entry.key })),
  ]

  return (
    <>
      <PresentationView>{slides}</PresentationView>
      <div className="wmie-noise" aria-hidden="true" />
    </>
  )
}
