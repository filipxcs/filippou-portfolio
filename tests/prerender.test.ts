// Regression: Cloudflare Error 1102 (Worker exceeded resource limits) on "/".
// The home page was rendered by the Worker on every request (SSR + 2.5 MB wasm),
// which goes over the 10 ms CPU limit on Workers Free. "/" must be prerendered at
// build time so Cloudflare Pages serves it as a static file without running the Worker.
//
// Run: bun run build && bun test tests/prerender.test.ts
import { describe, expect, test } from 'bun:test'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(import.meta.dir, '..', 'dist')

// Total bytes of everything under a path (dist/_worker.js is a directory of chunks + wasm).
function sizeOf(path: string): number {
  const st = statSync(path)
  if (!st.isDirectory()) return st.size
  return readdirSync(path).reduce((sum, name) => sum + sizeOf(join(path, name)), 0)
}

// Budget for the whole Worker bundle. The 2.5 MB resvg wasm from the runtime og-image generator
// pushed it to ~5.7 MB and caused Error 1102; without it the bundle is ~1 MB.
const WORKER_BUDGET_BYTES = 2 * 1024 * 1024

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

  test('Worker bundle (dist/_worker.js) stays under the size budget', () => {
    const worker = join(dist, '_worker.js')
    expect(existsSync(worker)).toBe(true)
    expect(sizeOf(worker)).toBeLessThan(WORKER_BUDGET_BYTES)
  })

  test('Worker bundle does not ship the og-image resvg wasm', () => {
    const wasmDir = join(dist, '_worker.js', 'wasm')
    const wasm = existsSync(wasmDir) ? readdirSync(wasmDir).filter((f) => f.endsWith('.wasm')) : []
    expect(wasm).toEqual([])
  })

  test('_routes.json still routes other pages through the Worker (include /*)', () => {
    const routes = JSON.parse(readFileSync(join(dist, '_routes.json'), 'utf8')) as { include: string[] }
    expect(routes.include).toContain('/*')
  })
})
