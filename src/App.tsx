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
import { CaseStudyEnermedSlide } from './components/slides/CaseStudyEnermedSlide'
import { CaseStudyGuildsSlide } from './components/slides/CaseStudyGuildsSlide'
import { CaseStudyW2ewSlide } from './components/slides/CaseStudyW2ewSlide'
import { CaseStudyCardsSlide } from './components/slides/CaseStudyCardsSlide'
import { VideoMockupSlide } from './components/slides/VideoMockupSlide'
import { VideoSliderSlide } from './components/slides/VideoSliderSlide'
import { ProductsSlide } from './components/slides/ProductsSlide'
import { ResultsSlide } from './components/slides/ResultsSlide'
import { TeamSlide } from './components/slides/TeamSlide'
import { TeamPartnershipsSlide } from './components/slides/TeamPartnershipsSlide'
import { PostProjectSlide } from './components/slides/PostProjectSlide'
import { CTASlide } from './components/slides/CTASlide'
import { content } from './data/content'

export default function App() {
  const slides = [
    // 0: Cover (with clickable chapter index)
    <CoverSlide key="cover" />,

    // --- Chapter: Chi siamo (slide 1) ---
    <ChapterSlide key="ch-about" number="01" title="Chi siamo" subtitle="Il reparto tech che vi mancava." />,
    <AboutSlide key="about" />,
    <ProblemSlide key="problem" />,
    <EcosystemSlide key="ecosystem" />,
    <EcosystemExecutiveSlide key="ecosystem-exec" />,

    // --- Chapter: Servizi (slide 6) ---
    <ChapterSlide key="ch-services" number="02" title="Servizi" subtitle="Quattro leve, un unico ecosistema." />,
    <ServicesSlide key="services" />,
    <SLASlide key="sla" />,
    <ProcessSlide key="process" />,

    // --- Chapter: Case Studies (slide 10) ---
    <ChapterSlide key="ch-cases" number="03" title="Case Studies" subtitle="Risultati reali, non promesse." />,

    // C&O Welcoming Italy
    <CaseStudySlide key="cs-ceo" />,
    <VideoMockupSlide key="vm-ceo" videoUrl={content.videoMockups[0].url} caption={content.videoMockups[0].caption} />,

    // CAO Formaggi
    <CaseStudyCaoSlide key="cs-cao" />,
    <VideoSliderSlide
      key="vm-cao"
      videos={[
        { url: '/video/cao/Heros.mp4', label: 'Hero' },
        { url: '/video/cao/Product.mp4', label: 'Product' },
      ]}
      caption="CAO Formaggi"
    />,

    // Enermed (slider with 2 videos)
    <CaseStudyEnermedSlide key="cs-enermed" />,
    <VideoSliderSlide
      key="vm-enermed"
      videos={[
        { url: '/video/enermed/EnermedPromoBento.mp4', label: 'Promo' },
        { url: '/video/enermed/CTA-section.mp4', label: 'CTA Section' },
      ]}
      caption="Enermed"
    />,

    // Guilds
    <CaseStudyGuildsSlide key="cs-guilds" />,
    <VideoMockupSlide key="vm-guilds" videoUrl={content.videoMockups[1].url} caption={content.videoMockups[1].caption} />,

    // W2EW
    <CaseStudyW2ewSlide key="cs-w2ew" />,
    <VideoMockupSlide key="vm-w2ew" videoUrl="/video/RecWave.mp4" caption="W2EW" />,

    // Cards (product, slider with 2 videos)
    <CaseStudyCardsSlide key="cs-cards" />,
    <VideoSliderSlide
      key="vm-cards"
      videos={[
        { url: '/video/cards/Render-v1.mp4', label: 'Render' },
        { url: '/video/cards/PitchDeck Cards.mp4', label: 'Pitch Deck' },
      ]}
      caption="Cards"
    />,

    // --- Chapter: Prodotti (slide 22) ---
    <ChapterSlide key="ch-products" number="04" title="Prodotti" subtitle="Costruiamo prima per noi. Poi per voi." />,
    <ProductsSlide key="products" />,
    <ResultsSlide key="results" />,

    // Design concepts showcase
    <VideoMockupSlide key="vm-construction" videoUrl={content.videoMockups[2].url} caption={content.videoMockups[2].caption} />,
    <VideoMockupSlide key="vm-pharma" videoUrl={content.videoMockups[3].url} caption={content.videoMockups[3].caption} />,
    <VideoMockupSlide key="vm-construction2" videoUrl={content.videoMockups[4].url} caption={content.videoMockups[4].caption} />,
    <VideoMockupSlide key="vm-boat" videoUrl={content.videoMockups[5].url} caption={content.videoMockups[5].caption} />,

    // --- Chapter: Team (slide 29) ---
    <ChapterSlide key="ch-team" number="05" title="Team" subtitle="Non siamo freelance assemblati a progetto." />,
    <TeamSlide key="team" />,
    <TeamPartnershipsSlide key="team-partners" />,
    <PostProjectSlide key="post-project" />,
    <CTASlide key="cta" />,
  ]

  return (
    <>
      <PresentationView>{slides}</PresentationView>
      <div className="wmie-noise" aria-hidden="true" />
    </>
  )
}
