import tailwindTypography from '@tailwindcss/typography';

// Production domain of the portfolio. Override with NUXT_PUBLIC_SITE_URL (build or runtime env),
// e.g. when a custom domain is added to the Cloudflare Pages project.
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://filippou-portfolio.pages.dev').replace(/\/+$/, '')
const siteName = 'Petros Filippou'
const siteTitle = 'Petros Filippou | Full Stack Developer'
const siteDescription =
  'Petros Filippou, Full Stack Developer in Thessaloniki. Websites and e-commerce with Vue.js, Nuxt, WordPress and OpenCart, plus solar park SCADA integration.'
const ogImage = `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/fontaine', '@nuxt/image', '@nuxtjs/seo', '@nuxthub/core', '@nuxt/icon', 'nuxt-delay-hydration', '@dargmuesli/nuxt-cookie-control', 'nuxt-booster'],
  tailwindcss: {
    config: {
        plugins: [tailwindTypography],
    }
},
  hub: {
    cache: true,
  },
  nitro: {
    preset: 'cloudflare-pages',
    // Render the home page once at build time. It then ships as dist/index.html and is excluded
    // from dist/_routes.json, so Cloudflare serves it as a static asset without starting the
    // Worker. Rendering "/" in the Worker on every request used to exceed the Workers Free
    // 10 ms CPU limit (Error 1102).
    prerender: {
      routes: ['/'],
      crawlLinks: false,
    },
  },
  site: {
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    defaultLocale: 'en',
  },

  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    // Site-wide SEO defaults. nuxt-seo-utils 6.0.x only applies these from app.seoMeta
    // (a `seo.meta` block is silently ignored). og:image/twitter:image + size come from
    // public/og-image.png, which nuxt-seo-utils detects automatically; pages/index.vue sets the absolute URLs.
    seoMeta: {
      description: siteDescription,
      themeColor: [
        { content: '#0E0E10', media: '(prefers-color-scheme: dark)' },
        { content: '#F4F2EC', media: '(prefers-color-scheme: light)' },
      ],
      author: siteName,
      colorScheme: 'light dark',
      applicationName: siteName,
      ogSiteName: siteName,
      ogLocale: 'en_US',
      ogType: 'website',
      ogTitle: siteTitle,
      ogDescription: siteDescription,
      ogImageAlt: 'Petros Filippou, Full Stack Developer',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
    },
  },

  ssr: true,

  image: {
    formats: ['webp', 'avif'],
    dir: 'assets/images',
    domains: ['offload.studio'],
    lazy: true,
    staticFilename: '[name]-[hash][ext]',
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  // The share image is the static public/og-image.png (see scripts/build-og-image.mjs). Turn off the
  // runtime og-image generator: it bundles a 2.5 MB resvg wasm into the Worker that slows every
  // cold start and is never used.
  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    // Plain object with `type` (not definePerson()): the helper's resolver is lost when the
    // config is serialised into runtime config, and no identity node is rendered.
    identity: {
      type: 'Person',
      name: siteName,
      jobTitle: 'Full Stack Developer',
      description: siteDescription,
      url: siteUrl,
      image: ogImage,
      email: 'filippou.petros.dev@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thessaloniki',
        addressCountry: 'GR',
      },
      knowsAbout: ['Vue.js', 'Nuxt', 'WordPress', 'OpenCart', 'Moodle LMS', 'SCADA integration'],
      sameAs: [
        'https://github.com/filipxcs',
        'https://www.linkedin.com/in/petros-filippou-55993b228/',
      ],
    },
  },

  robots: {
    groups: [
      {
        userAgent: ['Yandex'],
        cleanParam: ['param1', 'param2']
      }
    ]
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-10-03',

  devtools: {
    enabled: true
  }
})