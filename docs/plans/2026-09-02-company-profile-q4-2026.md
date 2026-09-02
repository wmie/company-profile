# Company Profile Q4 2026 — Direction

**Date:** 2026-09-02 · **Branch:** `feat/company-profile-q4-2026` (from `develop`) · **Owner:** Enrico (direction, copy, scaffold) · **Builders:** Opus agents (components), QA agent (screenshots)

## 1. Goal

Rebuild the Company Profile deck around the work published on wmie.it in August 2026:

- **CAO Formaggi rework** — 3D cheese served as ultra-light transparent video (stacked alpha, AV1/HEVC, WebGL), storytelling di filiera, RAG assistant with the CAO mascot, plus the **event minisite** (95 Lighthouse, -85% first-load, paper catalogue gone). New videos from the wmie.it CMS.
- **E-commerce Shopify** — a new sub-section inside Case Studies: **Tendenze Store** (Shopify Plus, +18% conversion, margin automation → Collaudo, platform bug fixed by Shopify in 22 days) and **Gruppo Collu** (Shopify + Zucchetti Atelier, 13.835 products back on sales channels, 6.449 redirects, single technical referent).
- Everything else stays, refreshed where it was stale (CAO "WIP/NDA" metrics, Quella grant, Products with Collaudo, Cover image 404).

Source of truth for facts: the case studies in the wmie.it CMS (`cao-formaggi-rework`, `cao-formaggi-event-minisite`, `tendenze-store`, `gruppo-collu`, `collaudo`, `quella`). Do not invent metrics. CAO's main site is in staging (launch upcoming): no traffic metrics for it, only technical/product facts.

## 2. Non-negotiables

- All copy lives in `src/data/content.ts` (director-owned). Components read from it; no hardcoded strings unless they are already in the component today.
- Canvas is fixed 1440×900 (desktop) and scaled on mobile by `PresentationView`. Every slide must fit 1440×900 without inner scrolling: check with the QA screenshots.
- Design system = the existing one: `service-card`, `browser-frame`, `SectionLabel`, `reveal reveal-dN`, `stat-value portfolio-metric`, mono eyebrows `font-wmie-mono text-[11px] uppercase tracking-[0.12em] text-wmie-accent`, borders `rgba(255,255,255,0.06)`, radius 2px, accent `#8B5CF6`. No new colours, no rounded cards, no gradients beyond what exists.
- Media: new assets are hotlinked from Vercel Blob (`https://drrmobjnk8tvuzmv.public.blob.vercel-storage.com/<file>`, public, CDN). Do **not** add binaries to the repo. Legacy local videos under `public/video/` stay as they are.
- Videos: `autoPlay muted loop playsInline`, only the active item of a slider plays. Images: `object-fit: contain` inside the frame, dark background.
- `pnpm build` (= `tsc -b && vite build`) must pass. Package manager pinned to pnpm 10.30.2 (`packageManager` in package.json) because corepack's pnpm 11 needs Node 22.

## 3. Slide order (App.tsx, director-owned)

| # | Key | Component | Notes |
|---|-----|-----------|-------|
| 0 | cover | `CoverSlide` | chapters index passed as prop; ambient CAO video replaces the 404 office photo |
| 1 | ch-about | `ChapterSlide` 01 Chi siamo | |
| 2 | about | `AboutSlide` | |
| 3 | problem | `ProblemSlide` | |
| 4 | ecosystem | `EcosystemSlide` | |
| 5 | ecosystem-exec | `EcosystemExecutiveSlide` | |
| 6 | ch-services | `ChapterSlide` 02 Servizi | |
| 7 | services | `ServicesSlide` | E-Commerce copy updated in content.ts |
| 8 | sla | `SLASlide` | |
| 9 | process | `ProcessSlide` | |
| 10 | ch-cases | `ChapterSlide` 03 Case Studies | |
| 11 | cs-ceo | `CaseStudySlide` (C&O) | SectionLabel 05 |
| 12 | vm-ceo | `VideoMockupSlide` | |
| 13 | cs-cao | `CaseStudyCaoSlide` **rewritten** | SectionLabel 06 |
| 14 | ms-cao-metodo | `MediaSliderSlide` | 3 videos: render set, pagina, categorie |
| 15 | ms-cao-sito | `MediaSliderSlide` | 6 videos: forma 3D, alpha demo, filiera, storie, catalogo, assistente |
| 16 | cs-cao-events | `CaoEventsSlide` **new** | SectionLabel 07; text + KPIs left, 16:9 video right |
| 17 | ch-shopify | `ChapterSlide` **extended** | sub-chapter divider "E-commerce Shopify" with badge + 3 stats |
| 18 | cs-tendenze | `CaseStudyTendenzeSlide` **new** | SectionLabel 08 |
| 19 | ms-tendenze | `MediaSliderSlide` | 4 images |
| 20 | cs-collu | `CaseStudyColluSlide` **new** | SectionLabel 09 |
| 21 | ms-collu | `MediaSliderSlide` | 3 images |
| 22 | cs-enermed | `CaseStudyEnermedSlide` | SectionLabel 10 |
| 23 | vm-enermed | `VideoSliderSlide` | unchanged |
| 24 | cs-guilds | `CaseStudyGuildsSlide` | SectionLabel 11 |
| 25 | vm-guilds | `VideoMockupSlide` | |
| 26 | cs-w2ew | `CaseStudyW2ewSlide` | SectionLabel 12 |
| 27 | vm-w2ew | `VideoMockupSlide` | |
| 28 | ch-products | `ChapterSlide` 04 Prodotti | |
| 29 | products | `ProductsSlide` | Collaudo added (5 cards), Quella grant aligned to CMS |
| 30 | cs-cards | `CaseStudyCardsSlide` | moved under Prodotti, SectionLabel 14 |
| 31 | vm-cards | `VideoSliderSlide` | |
| 32 | results | `ResultsSlide` | 3×2 grid, 6 clients |
| 33 | ms-concepts | `MediaSliderSlide` | 4 legacy concept videos in one slide (was 4 slides) |
| 34 | ch-team | `ChapterSlide` 05 Team | |
| 35 | team | `TeamSlide` | |
| 36 | team-partners | `TeamPartnershipsSlide` | |
| 37 | post-project | `PostProjectSlide` | |
| 38 | cta | `CTASlide` | |

39 slides. The cover index is derived from the `ch-*` keys in `App.tsx`, never hardcoded.

## 4. Component contracts

### `MediaSliderSlide` (new, `src/components/slides/MediaSliderSlide.tsx`)

```ts
export type MediaSliderItem = {
  type: 'video' | 'image'
  src: string
  label: string        // pill text, ≤ 16 chars
  caption?: string     // shown under the frame when active (falls back to slide caption)
}
export type MediaSliderSlideProps = {
  items: MediaSliderItem[]
  eyebrow?: string     // mono label above the frame, e.g. "CAO Formaggi · Il metodo"
  caption?: string     // default caption under the frame
}
```

- Browser frame (`.browser-frame`, `.browser-frame-bar`, dots left, pills right) exactly like `VideoSliderSlide`.
- Content area fixed **1100×619** (16:9) with background `#0A0A0A`; videos and images `object-fit: contain`, `display: block`. Mixed 4:3 images sit centered with dark bands. Never change the frame size between pills.
- Only the active `<video>` plays: on pill change `pause()` the previous, `play()` the next (catch the promise). Inactive items `display: none` but mounted (small files, instant switch).
- Optional eyebrow above the frame, caption below in mono 11px `#A3A3A3`. Whole thing vertically centered in the slide, `reveal` stagger on frame and caption.
- Keep `VideoSliderSlide` and `VideoMockupSlide` untouched (still used).

### `ChapterSlide` (extend, keep backwards compatible)

```ts
type ChapterSlideProps = {
  number: string; title: string; subtitle?: string
  badge?: string                                  // mono pill above the number, e.g. "Shopify Partner"
  stats?: { value: string; label: string }[]      // up to 3, rendered in a row under the subtitle
}
```

Stats use `stat-value portfolio-metric font-display text-[44px] font-semibold` + mono label, separated by `1px solid rgba(255,255,255,0.06)` top border, max-width ~900px centered.

### `CaseStudyCaoSlide` (rewrite in place), `CaseStudyTendenzeSlide`, `CaseStudyColluSlide` (new)

Same anatomy as today's `CaseStudyCaoSlide`: SectionLabel → h2 (accent on the last words, `content.*.headlineAccent`) → intro paragraph → two columns (left 400px "La sfida" card with 3 mini metrics, right 3 intervention cards with lucide icons) → stats row (3 stats with optional `note`) + italic bottom note on the right. Everything from `content.caseStudies.cao | tendenze | collu`. Icons: CAO `Box, BookOpen, Bot`; Tendenze `MousePointerClick, Workflow, Bug`; Collu `Route, Eye, GitMerge`.

Density: intro ≤ 2 lines, challenge body ≤ 6 lines at 12px, intervention descriptions ≤ 3 lines at 12px. If text overflows at 1440×900, reduce leading or trim from the component side only by clamping (`-webkit-line-clamp`), never by editing copy; report overflow instead.

### `CaoEventsSlide` (new)

Left column (≈ 560px): SectionLabel 07, h2 with accent, intro, 3 compact intervention rows (icon `Server, ImageDown, Languages`), stats row (3). Right column: `.browser-frame` with the minisite video (16:9, width ≈ 720px) vertically centered, caption under it. Data from `content.caseStudies.caoEvents`.

### `ResultsSlide` (modify)

Grid 3×2 (`repeat(3, 1fr)` × `repeat(2, 1fr)`), 6 cards from `content.results.clients`. Same card anatomy. Reduce paddings to 18px if needed. Bottom note + engagement stat unchanged.

### `ProductsSlide` (modify)

Quella hero card unchanged in structure; grant badge text comes from `content.products` (`quella.grantBadge`, `quella.grant`). Right grid: 5 cards — Collaudo spans the full first row (`grid-column: 1 / -1`, horizontal layout icon + text), then Swiftrise, Cards, Pigeon, Cream in 2×2. Icons: Collaudo `ShieldCheck`, Swiftrise `Server`, Cards `CreditCard`, Pigeon `Share2`, Cream `PartyPopper`.

### `CoverSlide` (modify)

- New prop `chapters: { label: string; slide: number }[]` (already wired from App.tsx), replaces the hardcoded array.
- Background: remove the 404 `OFFICE_IMG`. Use `content.cover.ambientVideo` as a full-bleed muted looping `<video>` at `opacity: 0.35` with the same three gradient overlays as today (left-to-right, bottom, top). Keep `z-[1]` layering and the partner icons row.

### `SectionLabel` numbering (modify existing slides)

C&O 05 · CAO 06 · CAO Events 07 · Tendenze 08 · Collu 09 · Enermed 10 · Guilds 11 · W2EW 12 · Prodotti 13 · Cards 14 · Risultati 15. About 01, Servizi 02, SLA 03 stay.

## 5. Media map (all 1920×1080 H.264 unless noted)

| Key | File | Size | Use |
|-----|------|------|-----|
| cao.metodoSet | cao-metodo-set.mp4 | 0.6 MB | Metodo · Set |
| cao.metodoPagina | cao-metodo-pagina.mp4 | 2.6 MB | Metodo · Pagina prodotto |
| cao.metodoCategorie | cao-metodo-categorie.mp4 | 0.2 MB | Metodo · Categorie |
| cao.formaHero | cao-forma-hero.mp4 | 0.7 MB | Sito · Forma 3D; cover ambient |
| cao.alphaDemo | cao-3d-alpha-demo.mp4 | 2.1 MB | Sito · Alpha demo |
| cao.qualitaTimeline | cao-qualita-timeline.mp4 | 1.9 MB | Sito · Filiera |
| cao.storieDrag | cao-storie-drag.mp4 | 1.3 MB | Sito · Storie dei soci |
| cao.catalogo | cao-catalogo.mp4 | 3.2 MB | Sito · Catalogo |
| cao.assistenteDop | cao-assistente-dop.mp4 | 0.5 MB | Sito · Assistente AI |
| cao.eventsMinisite | cao-events-minisite.mp4 | 1.9 MB | CaoEventsSlide |
| tendenze.schedaProdotto | tendenze-scheda-prodotto.jpg | 1600×900 | Slider |
| tendenze.selettore | tendenze-selettore-4x3.jpg | 1120×840 | Slider |
| tendenze.collection | tendenze-collection-4x3.jpg | 1440×1080 | Slider |
| tendenze.mailShopify | tendenze-mail-shopify.jpg | 1600×900 | Slider |
| collu.collection | collu-collection.jpg | 1600×900 | Slider |
| collu.schedaProdotto | collu-scheda-prodotto-4x3.jpg | 1440×1080 | Slider |
| collu.home | collu-home-4x3.jpg | 1440×1080 | Slider |
| legacy concepts | bento.wmie.it …/portfolio/*.webm | remote | ms-concepts |

## 6. Work breakdown

- **Director (done before agents start):** this doc, `content.ts`, `App.tsx`, `CoverSlide` prop plumbing, stubs for the new components, `package.json` packageManager, `.gitignore` (`*.zip`).
- **Agent A — new slides:** `MediaSliderSlide`, `ChapterSlide` extension, `CaseStudyCaoSlide` rewrite, `CaoEventsSlide`, `CaseStudyTendenzeSlide`, `CaseStudyColluSlide`. Files owned exclusively.
- **Agent B — existing slides:** `CoverSlide` (video background, chapters prop), `ResultsSlide` 3×2, `ProductsSlide` with Collaudo, `SectionLabel` renumbering in `CaseStudySlide`, `CaseStudyEnermedSlide`, `CaseStudyGuildsSlide`, `CaseStudyW2ewSlide`, `CaseStudyCardsSlide`, `ProductsSlide`, `ResultsSlide`. Files owned exclusively.
- **QA:** Playwright screenshots of all 39 slides at 1440×900 and at 390×844 (mobile scaling), overflow audit (`scrollHeight > clientHeight` on any `.slide`), console errors, media 404s. Director reviews the contact sheet.

## 7. Verification checklist

- `pnpm build` clean, `tsc` clean.
- No slide scrolls internally at 1440×900; no element clipped.
- Every remote asset returns 200 (Blob + bento.wmie.it).
- Cover index jumps to the right chapter slide.
- Slider pills switch media without frame resize; only one video plays at a time.
- Mobile hint still shows; swipe navigation unaffected.

## 8. Implementation notes (post-review)

- `src/components/core/useSlideActive.ts` watches the parent `.slide` `data-state`; `SlideVideo` (cover ambient, CAO events) and both sliders play only while their slide is active, so no video decodes off screen in any browser.
- Sliders keep `autoPlay` on the active item as the browser's own retry path and `preload="metadata"` on the inactive ones (first load no longer downloads every slider video).
- `content.products.items` is typed (`Product[]` through `productList()`), so a renamed field fails the build; `ProductsSlide` drops a missing product instead of throwing.
- Headlines of Prodotti and Risultati now come from `content.ts` (`headline` + `headlineAccent`).
