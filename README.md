# WMIE — Company Profile

Standalone slide deck (Vite 6 + React 19 + TypeScript + Tailwind v4) that presents WMIE to prospects. Fixed 1440×900 canvas, scaled on mobile; navigation by wheel, keyboard, swipe, the progress bar and the chapter index on the cover.

## Run

```bash
npx -y pnpm@10.30.2 install --frozen-lockfile   # Node 20/22; corepack's pnpm 11 needs Node 22
npx -y pnpm@10.30.2 dev                          # http://localhost:5173
npx -y pnpm@10.30.2 build                        # tsc -b && vite build → dist/
```

`packageManager` pins pnpm 10.30.2, so `pnpm` works directly once corepack picks it up.

## Where things live

| Path | What |
|------|------|
| `src/data/content.ts` | Every string and every media URL of the deck. Edit copy here, never in components. |
| `src/App.tsx` | Slide order. Entries with a `chapter` label feed the cover index automatically. |
| `src/components/core/` | `PresentationView` (navigation, mobile scaling, pinch zoom), `SlideContainer`, `SlideBackground`, `SectionLabel`. |
| `src/components/slides/` | One component per slide type. `CaseStudyTemplate` is the shared anatomy of the long-form case studies; `MediaSliderSlide` shows videos/images in a browser frame with pills. |
| `src/styles/` | Design tokens (`globals.css`) and the slide system (`presentations.css`). |
| `public/video/` | Legacy local videos (Enermed, Cards, W2EW). New media are hotlinked from the wmie.it Vercel Blob store; do not add binaries here. |
| `docs/plans/` | Direction documents for each rework (slide order, contracts, media map). |
| `scripts/screenshot-slides.mjs` | QA: screenshots every slide and reports inner overflow, elements drawn outside the slide, console errors and failed requests. |

## QA

```bash
npx -y pnpm@10.30.2 exec vite --port 5173 &
node scripts/screenshot-slides.mjs --url=http://localhost:5173 --out=.qa/1440            # desktop
node scripts/screenshot-slides.mjs --url=http://localhost:5173 --out=.qa/mobile --width=390 --height=844
```

Every line must read `overflowY=0 overflowX=0` with no `outside:` list. The script borrows Playwright + Chromium from the wmie-web checkout (`PLAYWRIGHT_HOST` env var overrides the path).

## Facts and sources

Case-study numbers come from the case studies in the wmie.it CMS. When a case study changes there, update `content.ts` accordingly; do not invent metrics.
