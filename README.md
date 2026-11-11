# Petros Filippou — Portfolio

Personal portfolio / CV site built with Nuxt 3, deployed to Cloudflare Pages (`filippou-portfolio`).

This project uses [bun](https://bun.sh). Do not use npm, npx, yarn or pnpm.

## Setup

```bash
bun install
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build for production (Nitro `cloudflare-pages` preset, output in `dist/`):

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Deploy

The Cloudflare Pages project has no Git integration (direct upload), so merging to `main` does not deploy. After building:

```bash
bunx wrangler pages deploy dist --project-name filippou-portfolio --branch main --commit-hash <commit sha>
```
