/**
 * Screenshot + overflow audit for every slide of the deck.
 *
 *   node scripts/screenshot-slides.mjs --url=http://localhost:5173 --out=.qa/1440 [--width=1440 --height=900] [--slides=13,14]
 *
 * Uses the Playwright + Chromium already installed in the wmie-web checkout
 * (no dependency added to this repo). Prints one line per slide with the inner
 * overflow of the active `.slide` and any element drawn outside its bounds,
 * plus console errors and HTTP >= 400 responses.
 */
import { createRequire } from 'node:module'
import { mkdirSync, realpathSync } from 'node:fs'
import path from 'node:path'

// Resolve `playwright` through @playwright/test (its dependency). The symlink is
// resolved to its pnpm store path first, where `playwright` sits as a sibling.
const PLAYWRIGHT_HOST =
  process.env.PLAYWRIGHT_HOST ??
  '/Users/enrico/Documents/Frontend/WMIE Frontend/Website Q4 Rework/.claude/worktrees/feat-design-playground/node_modules/@playwright/test/package.json'
let chromium
try {
  ;({ chromium } = createRequire(realpathSync(PLAYWRIGHT_HOST))('playwright'))
} catch (err) {
  console.error(
    `Cannot load playwright from ${PLAYWRIGHT_HOST}.\n` +
      'Set PLAYWRIGHT_HOST to the package.json of an installed @playwright/test (or playwright) package.',
  )
  console.error(err?.message ?? err)
  process.exit(1)
}

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.split('=')
    return [k.replace(/^--/, ''), v ?? 'true']
  }),
)
const url = args.url ?? 'http://localhost:5173'
const out = args.out ?? '.qa/1440'
const width = Number(args.width ?? 1440)
const height = Number(args.height ?? 900)
const only = args.slides ? args.slides.split(',').map(Number) : null
const settle = Number(args.settle ?? 1600)

mkdirSync(out, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 })
page.on('console', (m) => {
  if (m.type() === 'error') console.log('console.error:', m.text().slice(0, 300))
})
page.on('response', (r) => {
  if (r.status() >= 400) console.log('HTTP', r.status(), r.url())
})
page.on('requestfailed', (r) => console.log('REQUEST FAILED', r.url(), r.failure()?.errorText))

await page.goto(url, { waitUntil: 'networkidle' })
const total = await page.evaluate(() => document.querySelectorAll('.stories-bar-segment').length)
console.log(`deck: ${total} slides @ ${width}x${height}`)

for (let i = 0; i < total; i++) {
  if (only && !only.includes(i)) continue
  await page.evaluate((n) => window.dispatchEvent(new CustomEvent('goToSlide', { detail: n })), i)
  await page.waitForTimeout(settle)
  const info = await page.evaluate(() => {
    const slide = document.querySelector('.slide[data-state="active"]')
    if (!slide) return null
    const r = slide.getBoundingClientRect()
    const overflowY = slide.scrollHeight - slide.clientHeight
    const overflowX = slide.scrollWidth - slide.clientWidth
    const clipped = []
    slide.querySelectorAll('*').forEach((el) => {
      if (el.closest('.slide-bg')) return
      const b = el.getBoundingClientRect()
      if (b.width === 0 || b.height === 0) return
      if (b.bottom > r.bottom + 1 || b.right > r.right + 1 || b.top < r.top - 1 || b.left < r.left - 1) {
        const cls = (el.getAttribute('class') || '').split(' ').filter(Boolean).slice(0, 2).join('.')
        clipped.push(
          `${el.tagName.toLowerCase()}${cls ? '.' + cls : ''} [${Math.round(b.left)},${Math.round(b.top)} ${Math.round(b.width)}x${Math.round(b.height)}]`,
        )
      }
    })
    return { overflowY, overflowX, clipped: clipped.slice(0, 6) }
  })
  const file = path.join(out, `slide-${String(i).padStart(2, '0')}.png`)
  await page.screenshot({ path: file })
  const flag = info && (info.overflowY > 0 || info.overflowX > 0 || info.clipped.length) ? '  <-- CHECK' : ''
  console.log(
    `slide ${String(i).padStart(2, '0')}: overflowY=${info?.overflowY ?? '?'} overflowX=${info?.overflowX ?? '?'}${
      info?.clipped?.length ? ' outside: ' + info.clipped.join(' | ') : ''
    }${flag}`,
  )
}

await browser.close()
