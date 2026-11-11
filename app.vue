<template>
  <div class="h-screen">
    <!-- <LoadingScreen /> -->
    <NuxtLayout>
      <NuxtPage />
      <!--<CookiesButton></CookiesButton>-->
      <Toaster />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// GTM no-JS fallback. Rendered through useHead so Vue does not try to hydrate
// the <noscript> iframe (which caused a hydration mismatch in the template).
useHead({
  noscript: [
    {
      tagPosition: 'bodyOpen',
      innerHTML:
        '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBFKRND2" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
    },
  ],
})
</script>
