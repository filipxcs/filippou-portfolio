import { defineOrganization  } from 'nuxt-schema-org/schema';
import tailwindTypography from '@tailwindcss/typography';
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

  },
  site: { 
    url: 'https://offload.studio', 
  },

  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
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

  seo: {
    meta: {
      title:"Offload Studio | Design & Web Development Agency",
      description: 'Offload Studio is a creative design and web development agency specializing in branding, logos, posters, and custom websites. We craft tailored solutions to help businesses stand out and succeed in the digital world. Let us turn your ideas into reality!',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      author: 'Filippou/Afentakis',
      colorScheme: 'dark light',
      applicationName: 'Offload.studio',
      // Nuxt SEO Utils already sets the below tags for you
      ogSiteName: 'Offload Studio | Design & Web Development Agency',
      ogLocale: 'en_US',
      ogType: 'website',
      ogUrl: 'https://offload.studio',
      ogImage: 'https://offload.studio/_nuxt/LogoNav.208eZWZG.svg',
      ogTitle: 'Offload Studio | Design & Web Development Agency',
      ogDescription: 'Offload Studio provides innovative solutions in branding, design, and web development. From custom logos to complete websites, we help businesses thrive online.',
      titleTemplate: '%s | Design & Web Development Agency',
      // Other Nuxt SEO modules handles these
      // ogImage: 'https://example.com/my-og-image.png',
      robots: 'index, follow',
    }
  },

  schemaOrg: {
    identity: defineOrganization({
      // Basic Information
      name: 'Offload Studio',
      logo: 'https://offload.studio/_nuxt/LogoNav.208eZWZG.svg',
      description: 'Offload Studio provides innovative solutions in branding, design, and web development. From custom logos to complete websites, we help businesses thrive online.',
      url: 'https://offload.studio',
      email: 'info@offload.studio',
      foundingDate: '2015-03-25',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        'minValue': 1,
        'maxValue': 10
      },
    })
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