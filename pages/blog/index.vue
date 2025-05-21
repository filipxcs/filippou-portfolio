<template>
  <div class="container mx-auto p-4 py-[5vw]">
    <h1 class="text-4xl font-bold mb-6">Blogs Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4" >
      <Card  class="border p-4 shadow w-1/2 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" v-for="blog in data.data" :key="blog.id">
        <NuxtImg :src="`https://portal.offload.studio/web/image?model=blog.post&id=${blog.id}&field=x_image`"
            :alt="blog.name"
            class="rounded-xl text-center w-3/3"
            ></NuxtImg>
        <CardHeader class="p-0 mt-6">
          <CardTitle class="text-xl font-semibold">{{ blog.name }}</CardTitle>
        </CardHeader>
        <CardFooter class="p-0 mt-8">
          <a :href="localePath(`/blog/${blog.x_slug}`)" class="text-blue-500"><Button class="bg-offload-pink">Read More</Button></a>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { data, error } = await useFetch("/api/blog/blogs")
const localePath = useLocalePath()
useHead({
    title: 'Our Blog',
    meta: [
      { name: 'description', content: 'Explore our collection of blog posts covering various topics.' },
      { name: 'keywords', content: 'blogs, articles, news,ui design,website development' },
      { property: 'og:title', content: 'Our Blog' },
      { property: 'og:description', content: 'Explore our collection of blog posts covering various topics.' },
      { property: 'og:image', content: `https://portal.offload.studio/web/image?model=blog.post&id=${data.value.data[0].id}&field=x_image` },
      { property: 'og:url', content: 'https://offload.studio/blog' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Our Blog' },
      { name: 'twitter:description', content: 'Explore our collection of blog posts covering various topics.' },
      { name: 'twitter:image', content: `https://portal.offload.studio/web/image?model=blog.post&id=${data.value.data[0].id}&field=x_image` }
    ],
    link: [
      { rel: 'canonical', href: 'https://offload.studio/blog' }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": 'All Blogs',
          "image": `https://portal.offload.studio/web/image?model=blog.post&id=${data.value.data[0].id}&field=x_image`,
          "datePublished": data.value.data[0].published_date,
          "author": {
            "@type": "Person",
            "name": "Filippou Petros"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Offload Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://offload.studio/_nuxt/LogoNav.208eZWZG.svg"
            }
          },
          "description": 'Explore our collection of blog posts covering various topics.'
        })
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://offload.studio/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blogs",
              "item": "https://offload.studio/blog"
            }
          ]
        })
      }
    ]
  });
</script>

<style>
/* Add any additional styles here */
</style>