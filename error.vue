<template>
  <NuxtLayout>
    <main class="flex min-h-dvh items-center justify-center bg-pf-bg px-4 py-12 font-body text-pf-text antialiased">
      <section class="pf-card w-full max-w-lg text-center" aria-labelledby="error-title">
        <p class="font-display text-[clamp(4rem,3rem+5vw,6.5rem)] font-semibold leading-none tracking-tight text-pf-accent">
          {{ statusCode }}
        </p>
        <h1 id="error-title" class="pf-title mt-4">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="mx-auto mt-3 max-w-sm text-pf-muted">
          {{ is404
            ? "The page you're looking for doesn't exist or has moved."
            : 'An unexpected error happened. Please try again in a moment.' }}
        </p>
        <div class="mt-8 flex justify-center">
          <button type="button" class="pf-btn-primary" @click="goHome">
            Back to home
          </button>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const statusCode = computed(() => props.error?.statusCode || 500)
const is404 = computed(() => statusCode.value === 404)

useHead({
  title: () => (is404.value ? 'Page not found' : 'Error') + ' | Petros Filippou',
  titleTemplate: '%s',
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'robots', content: 'noindex' }],
})

const goHome = () => clearError({ redirect: '/' })
</script>
