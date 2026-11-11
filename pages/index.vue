<template>
  <div class="min-h-dvh bg-pf-bg font-body text-pf-text antialiased">
    <!-- Scroll progress (CSS scroll timeline; hidden where unsupported or with reduced motion) -->
    <div class="pf-progress fixed inset-x-0 top-0 z-50 h-[0.1875rem] bg-pf-accent" aria-hidden="true" />

    <a
      href="#main"
      class="pf-focus sr-only rounded-full bg-pf-cta px-4 py-2 font-semibold text-pf-on-cta focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
    >Skip to content</a>

    <header class="sticky top-0 z-40 border-b border-transparent bg-pf-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-pf-bg/70">
      <div class="mx-auto flex w-[min(100%_-_2rem,80rem)] items-center justify-between gap-4 py-3 md:py-4">
        <a href="/" class="pf-focus inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-full font-display text-[1.0625rem] font-semibold tracking-tight">
          <span class="inline-flex size-8 items-center justify-center rounded-full bg-pf-text text-[0.8125rem] font-bold text-pf-bg" aria-hidden="true">PF</span>
          Petros Filippou
        </a>
        <nav aria-label="Profiles" class="flex items-center gap-1">
          <a
            v-for="link in profile.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="pf-focus inline-flex size-11 items-center justify-center rounded-full text-pf-muted transition-colors hover:bg-pf-raised hover:text-pf-text"
          >
            <component :is="iconFor(link.icon)" class="size-5" aria-hidden="true" />
            <span class="sr-only">{{ link.label }} (opens in a new tab)</span>
          </a>
          <a :href="profile.cv" download class="pf-btn-ghost ml-1 hidden sm:inline-flex">
            <Download class="pf-btn-icon size-4" aria-hidden="true" />
            CV
            <span class="sr-only">(PDF)</span>
          </a>
        </nav>
      </div>
    </header>

    <main id="main" class="mx-auto w-[min(100%_-_2rem,80rem)] pb-12 pt-2" @pointermove="onPointer">
      <div class="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-4 lg:grid-cols-12">
        <!-- Hero -->
        <section
          aria-labelledby="hero-title"
          class="pf-card pf-card-hero pf-intro flex flex-col justify-between gap-10 md:col-span-6 md:min-h-[32rem] lg:col-span-8"
          style="--i: 0"
        >
          <span
            class="pf-orb pointer-events-none absolute -right-[18%] -top-[30%] -z-10 aspect-square w-[70%] rounded-full bg-pf-cta/25 blur-3xl"
            aria-hidden="true"
          />
          <div class="flex items-center gap-4">
            <img
              src="~/assets/petros.webp"
              alt="Petros Filippou"
              width="310"
              height="311"
              fetchpriority="high"
              class="size-16 rounded-full border-2 border-pf-hero-line object-cover md:size-20"
            />
            <div class="min-w-0">
              <p class="font-semibold">{{ profile.title }}</p>
              <p class="text-[0.9375rem] text-pf-hero-muted">{{ profile.location }}</p>
            </div>
          </div>

          <div>
            <h1
              id="hero-title"
              class="font-display font-bold leading-[0.98] tracking-[-0.035em]"
              style="font-size: clamp(2.6rem, 1.5rem + 5vw, 5rem)"
            >
              <span class="pf-mask"><span style="--l: 0">Websites for businesses.</span></span>
              <span class="pf-mask"><span style="--l: 1">Logic for <em class="not-italic text-pf-hero-accent">solar parks.</em></span></span>
            </h1>
            <p class="pf-intro-late mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-pf-hero-muted">
              {{ profile.summary }}
            </p>
          </div>

          <div class="pf-intro-late flex flex-wrap items-center gap-3">
            <a :href="`mailto:${profile.email}`" class="pf-btn-primary">
              <Mail class="size-4" aria-hidden="true" />
              Email me
              <ArrowRight class="pf-btn-icon pf-btn-icon-x size-4" aria-hidden="true" />
            </a>
            <a :href="profile.cv" download class="pf-btn-hero">
              <Download class="pf-btn-icon size-4" aria-hidden="true" />
              Download CV
              <span class="sr-only">(PDF)</span>
            </a>
          </div>
        </section>

        <!-- Now -->
        <section
          aria-labelledby="now-title"
          class="pf-card pf-intro flex flex-col gap-5 md:col-span-6 lg:col-span-4"
          style="--i: 1"
        >
          <p class="inline-flex items-center gap-2 self-start rounded-full border border-pf-line bg-pf-raised px-3 py-1 text-[0.8125rem]">
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full rounded-full bg-pf-live opacity-60 motion-safe:animate-ping" />
              <span class="relative inline-flex size-2 rounded-full bg-pf-live" />
            </span>
            {{ profile.availability }}
          </p>
          <div>
            <h2 id="now-title" class="pf-title">Now: {{ currentRole.role }}</h2>
            <p class="mt-1 text-[0.9375rem] text-pf-muted">
              {{ currentRole.company }}, {{ currentRole.place }}. {{ currentRole.period }}
            </p>
          </div>
          <ul class="space-y-2 text-[0.9375rem] leading-relaxed">
            <li v-for="p in currentRole.points" :key="p" class="flex gap-3">
              <span class="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-pf-accent" aria-hidden="true" />
              <span>{{ p }}</span>
            </li>
          </ul>
          <ul class="mt-auto flex flex-wrap gap-2" aria-label="Tools in this role">
            <li v-for="t in currentRole.tags" :key="t" class="pf-chip">{{ t }}</li>
          </ul>
        </section>

        <!-- Projects -->
        <section
          aria-labelledby="work-title"
          class="pf-card pf-scroll md:col-span-6 lg:col-span-12"
          style="--i: 2"
        >
          <div class="flex flex-wrap items-end justify-between gap-2">
            <h2 id="work-title" class="pf-title">Selected websites</h2>
            <p class="text-[0.9375rem] text-pf-muted">Shops and company sites, 2019 to now</p>
          </div>
          <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li
              v-for="(project, n) in projects"
              :key="project.name"
              class="pf-scroll group flex min-w-0 flex-col overflow-hidden rounded-tile border border-pf-line bg-pf-raised transition-colors duration-300 hover:border-pf-accent/50"
              :style="{ '--i': n }"
            >
              <div class="overflow-hidden border-b border-pf-line">
                <img
                  :src="project.image"
                  :alt="`Screenshot of the ${project.name} website`"
                  width="960"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  class="pf-shot aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <div class="flex flex-1 flex-col gap-3 p-4">
                <div>
                  <h3 class="font-display text-[1.0625rem] font-semibold">{{ project.name }}</h3>
                  <p class="mt-1 text-[0.9375rem] leading-relaxed text-pf-muted">{{ project.description }}</p>
                </div>
                <ul class="flex flex-wrap gap-1.5" :aria-label="`${project.name} stack`">
                  <li v-for="s in project.stack" :key="s" class="rounded-full bg-pf-surface px-2.5 py-0.5 text-[0.8125rem] text-pf-muted">{{ s }}</li>
                </ul>
                <a
                  v-if="project.href"
                  :href="project.href"
                  target="_blank"
                  rel="noopener"
                  class="pf-focus pf-link mt-auto inline-flex min-h-[2.75rem] items-center gap-1.5 self-start rounded-full text-[0.9375rem] font-semibold"
                >
                  Visit {{ project.name }}
                  <ArrowUpRight class="pf-btn-icon pf-btn-icon-x size-4" aria-hidden="true" />
                  <span class="sr-only">(opens in a new tab)</span>
                </a>
                <p v-else class="mt-auto text-[0.8125rem] text-pf-muted">{{ project.note }}</p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Experience -->
        <section
          aria-labelledby="exp-title"
          class="pf-card pf-scroll md:col-span-6 lg:col-span-7"
          style="--i: 3"
        >
          <h2 id="exp-title" class="pf-title">Web work since 2019</h2>
          <ol class="mt-6 space-y-6 border-l border-pf-line pl-5">
            <li v-for="job in experience" :key="job.company" class="relative">
              <span class="absolute -left-[1.5625rem] top-[0.4rem] size-2 rounded-full border-2 border-pf-accent bg-pf-surface" aria-hidden="true" />
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 class="font-display text-[1.0625rem] font-semibold">{{ job.role }}</h3>
                <span class="text-[0.8125rem] text-pf-muted">{{ job.period }}</span>
              </div>
              <p class="text-[0.9375rem] text-pf-muted">
                <a
                  v-if="job.href"
                  :href="job.href"
                  target="_blank"
                  rel="noopener"
                  class="pf-focus pf-link rounded text-pf-text"
                >{{ job.company }}<span class="sr-only"> (opens in a new tab)</span></a>
                <template v-else>{{ job.company }}</template>
                <template v-if="job.place">, {{ job.place }}</template>
              </p>
              <ul class="mt-2 space-y-1.5 text-[0.9375rem] leading-relaxed">
                <li v-for="p in job.points" :key="p">{{ p }}</li>
              </ul>
            </li>
          </ol>
        </section>

        <!-- Skills -->
        <section
          aria-labelledby="skills-title"
          class="pf-card pf-scroll md:col-span-6 lg:col-span-5"
          style="--i: 4"
        >
          <h2 id="skills-title" class="pf-title">Skills</h2>
          <dl class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div v-for="g in skills" :key="g.group" class="min-w-0">
              <dt class="text-[0.9375rem] text-pf-muted">{{ g.group }}</dt>
              <dd class="mt-2 flex flex-wrap gap-1.5">
                <span v-for="s in g.items" :key="s" class="pf-chip">{{ s }}</span>
              </dd>
            </div>
          </dl>
        </section>

        <!-- Education -->
        <section
          aria-labelledby="edu-title"
          class="pf-card pf-scroll flex flex-col gap-5 md:col-span-6 lg:col-span-4"
          style="--i: 5"
        >
          <div>
            <h2 id="edu-title" class="pf-title">Education</h2>
            <p class="mt-4 font-semibold">{{ education.title }}</p>
            <p class="text-[0.9375rem] text-pf-muted">{{ education.school }}, {{ education.place }}</p>
            <p class="mt-1 text-[0.9375rem] text-pf-muted">{{ education.detail }}</p>
          </div>
          <div class="mt-auto">
            <h3 class="text-[0.9375rem] text-pf-muted">Languages</h3>
            <ul class="mt-2 flex flex-wrap gap-2">
              <li v-for="l in education.languages" :key="l.name" class="pf-chip">
                {{ l.name }}<span class="ml-1.5 text-pf-muted">{{ l.level }}</span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Contact -->
        <section
          aria-labelledby="contact-title"
          class="pf-card pf-card-cta pf-scroll flex flex-col justify-between gap-6 md:col-span-6 lg:col-span-8"
          style="--i: 6"
        >
          <div>
            <h2 id="contact-title" class="pf-title">Have a website or an integration in mind?</h2>
            <p class="mt-2 max-w-[60ch]">
              Write to me in English or Greek. Freelance projects, full-time roles and integration work are all welcome.
            </p>
          </div>
          <a
            :href="`mailto:${profile.email}`"
            class="pf-focus-light group inline-flex min-h-[2.75rem] max-w-full items-center gap-3 self-start break-all rounded py-1 font-display font-semibold tracking-tight underline decoration-white/40 decoration-2 underline-offset-[0.2em] transition-[text-decoration-color] hover:decoration-white sm:break-normal"
            style="font-size: clamp(1.25rem, 0.9rem + 1.6vw, 2.25rem)"
          >
            {{ profile.email }}
            <ArrowUpRight class="pf-btn-icon pf-btn-icon-x size-[0.9em] shrink-0" aria-hidden="true" />
          </a>
          <ul class="flex flex-wrap gap-2">
            <li>
              <a :href="profile.phoneHref" class="pf-btn-oncta">
                <Phone class="size-4" aria-hidden="true" />
                {{ profile.phone }}
              </a>
            </li>
            <li v-for="link in profile.links" :key="link.href">
              <a :href="link.href" target="_blank" rel="noopener" class="pf-btn-oncta">
                <component :is="iconFor(link.icon)" class="size-4" aria-hidden="true" />
                {{ link.label }}
                <span class="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a :href="profile.cv" download class="pf-btn-oncta">
                <Download class="pf-btn-icon size-4" aria-hidden="true" />
                Download CV
                <span class="sr-only">(PDF)</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <footer class="mx-auto flex w-[min(100%_-_2rem,80rem)] flex-wrap items-center justify-between gap-2 border-t border-pf-line py-6 text-[0.8125rem] text-pf-muted">
      <p>© {{ year }} Petros Filippou</p>
      <p class="inline-flex items-center gap-1.5">
        <MapPin class="size-3.5" aria-hidden="true" />
        {{ profile.location }}
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-vue-next'
import { profile, currentRole, experience, skills, education } from '~/data/cv'
import harisfish from '~/assets/projects/harisfish.webp'
import karemfillis from '~/assets/projects/karemfillis.webp'
import netconnect from '~/assets/projects/netconnect.webp'
import pcshop from '~/assets/projects/pcshop.webp'

const year = new Date().getFullYear()

const iconFor = (name: string) => (name === 'github' ? Github : Linkedin)

// Pointer spotlight: move the card's radial highlight to the cursor (CSS reads --mx / --my).
const onPointer = (e: PointerEvent) => {
  if (e.pointerType !== 'mouse') return
  const card = (e.target as HTMLElement).closest<HTMLElement>('.pf-card')
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
  card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
}

const projects = [
  {
    name: 'Haris Fish',
    description: 'Online shop for fresh fish and Greek products, with a mobile ordering flow and checkout.',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind', 'shadcn-vue'],
    image: harisfish,
    note: 'Built at Offload Studio',
  },
  {
    name: 'Karemfillis Olives',
    description: 'Brand site and shop for a family olive producer in Chalkidiki, built around their story and products.',
    stack: ['WordPress', 'PHP'],
    image: karemfillis,
    href: 'https://karemfillisolives.com/',
  },
  {
    name: 'NetConnect',
    description: 'Corporate site for a networking solutions provider, with custom service pages and contact flows.',
    stack: ['OpenCart', 'PHP', 'JavaScript'],
    image: netconnect,
    href: 'https://www.netconnect.gr/',
  },
  {
    name: 'PCShop',
    description: 'Online store for a local computer shop, with product catalogue, ordering and an admin dashboard.',
    stack: ['OpenCart', 'PHP', 'JavaScript'],
    image: pcshop,
    href: 'https://www.pcshop.gr/',
  },
]

const description =
  'Petros Filippou, Full Stack Developer in Thessaloniki. Websites and e-commerce with Vue.js, Nuxt, WordPress and OpenCart, plus solar park SCADA integration.'

// Absolute URLs come from the site config (site.url / NUXT_PUBLIC_SITE_URL), never hardcoded.
const site = useSiteConfig()
const siteUrl = site.url.replace(/\/+$/, '')
const ogImage = `${siteUrl}/og-image.png`

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Petros Filippou | Full Stack Developer',
  titleTemplate: '%s',
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow' },
    { name: 'color-scheme', content: 'light dark' },
    { property: 'og:title', content: 'Petros Filippou | Full Stack Developer' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: `${siteUrl}/` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Petros Filippou | Full Stack Developer' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ],
})
</script>
