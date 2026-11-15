// Regression: Cloudflare Error 1102 (Worker exceeded resource limits) on "/".
// The home page was rendered by the Worker on every request (SSR + 2.5 MB wasm),
// which goes over the 10 ms CPU limit on Workers Free. "/" must be prerendered at
// build time so Cloudflare Pages serves it as a static file without running the Worker.
//
// Run: bun run build && bun test tests/prerender.test.ts
import { describe, expect, test } from 'bun:test'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(import.meta.dir, '..', 'dist')

describe('build output (dist/)', () => {
  test('build exists (run `bun run build` first)', () => {
    expect(existsSync(join(dist, '_routes.json'))).toBe(true)
  })

  test('home page is prerendered to a static dist/index.html with real content', () => {
    const file = join(dist, 'index.html')
    expect(existsSync(file)).toBe(true)
    const html = readFileSync(file, 'utf8')
    expect(html).toContain('Petros Filippou')
    expect(html).toContain('<h1')
  })

  test('"/" is not routed to the Worker (excluded in _routes.json)', () => {
    const routes = JSON.parse(readFileSync(join(dist, '_routes.json'), 'utf8')) as {
      include: string[]
      exclude: string[]
    }
    expect(routes.exclude).toContain('/')
  })
})
