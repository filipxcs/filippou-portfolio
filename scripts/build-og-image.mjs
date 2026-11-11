// Renders scripts/og-image.svg to public/og-image.png (1200x630) for Open Graph / Twitter cards.
// Usage: bun scripts/build-og-image.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { Resvg } from '@resvg/resvg-js'

const svg = readFileSync(new URL('./og-image.svg', import.meta.url), 'utf8')
const png = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true, defaultFontFamily: 'Arial' },
}).render().asPng()

writeFileSync(new URL('../public/og-image.png', import.meta.url), png)
console.log(`public/og-image.png written (${png.length} bytes)`)
