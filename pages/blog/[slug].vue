<template>
  <section class="container-fluid mx-auto pt-24">
    <div class="overflow-hidden flex flex-col items-center md:mt-10 px-3" v-if="post">
      <h1 class="text-4xl font-bold mb-4 mt-10 xl:w-2/5 w-full text-center">{{ post.data.name }}</h1>
      <NuxtImg :src="`https://portal.offload.studio/web/image?model=blog.post&id=${post.data.id}&field=x_image`"
      :alt="post.data.name"
      class="rounded-xl xl:w-2/5 w-full"
      ></NuxtImg>
      <div class="blog-details p-6 mt-[10vw]">
        <div class="text-gray-600 mb-4">
          <Badge class="text-sm font-normal">Published on: {{ post.data.published_date }}</Badge>
        </div>
        <article class="content mt-10 prose lg:prose-xl" v-html="post.data.content"></article>
      </div>
      <div class="bottom-info my-[5rem] flex flex-col items-center">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/#contact')">
            <Button class="bg-offload-pink font-medium text-base hover:bg-offload-black text-white px-6 py-2 h-12 rounded-lg transition duration-300 mt-8 shadow-md">
              {{ t('header.nav.book_15_min_call') }}
            </Button>
          </NuxtLink>
          <a href="mailto:info@offload.studio" class="ml-4 text-neutral-800 text-base font-medium text-center mt-7 hover:text-offload-pink">info@offload.studio</a>
        </div>
        <div class="px-4 py-2 bg-white/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-start items-center gap-2 overflow-hidden mt-6">
          <div class="w-3.5 h-3.5 relative">
              <div class="w-3.5 h-3.5 left-0 top-0 absolute bg-green-500/25 rounded-full"></div>
              <div class="w-2 h-2 left-[3px] top-[3px] absolute bg-green-500 rounded-full"></div>
          </div>
          <div class="justify-start text-neutral-800 text-base font-medium leading-normal">{{ t('landing.sub_available') }}</div>
        </div>
      </div>

    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface BlogPost {
  data: {
    id: number;
    name: string;
    content: string;
    x_image: string;
    published_date: string;
    website_meta_title: string;
    website_meta_description: string;
    website_meta_keywords: string;
  }
}

const route = useRoute();
const post = ref<BlogPost | null>(null);
const { $sr } = useNuxtApp()
const localePath = useLocalePath()
const { locale, t } = useI18n()
const { data, error } = await useFetch<BlogPost>(`/api/blog/${route.params.slug}`);

onMounted(() => {
  $sr.reveal('.content', {
    origin:'bottom',
    distance: '150px',
    mobile: false,
    easing: 'ease-in-out',
    reset: false
  });
});

if (error.value) {
  console.error('Error fetching post:', error.value);
} else if (data.value) {
  post.value = data.value;

  // Update image URLs in post.data.content
  if (post.value.data.content) {
    post.value.data.content = post.value.data.content.replace(/src="\/web\/image/g, 'src="https://portal.offload.studio/web/image');
  }

  // Set meta tags for SEO
  useHead({
    title: post.value.data.name,
    meta: [
      { name: 'description', content: post.value.data.website_meta_description || 'This is a default description for the blog post, providing an overview of the content and its relevance to the audience.' },
      { name: 'keywords', content: post.value.data.website_meta_keywords },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: post.value.data.website_meta_title },
      { property: 'og:description', content: post.value.data.website_meta_description || 'This is a default description for the blog post, providing an overview of the content and its relevance to the audience.' },
      { property: 'og:image', content: `https://portal.offload.studio/web/image?model=blog.post&id=${post.value.data.id}&field=x_image` },
      { property: 'og:url', content: `https://offload.studio/${locale.value === 'en' ? '' : locale.value + '/'}blogs/${route.params.slug}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.value.data.website_meta_title },
      { name: 'twitter:description', content: post.value.data.website_meta_description || 'This is a default description for the blog post, providing an overview of the content and its relevance to the audience.' },
      { name: 'twitter:image', content: `https://portal.offload.studio/web/image?model=blog.post&id=${post.value.data.id}&field=x_image` }
    ],
    link: [
      { rel: 'canonical', href: `https://offload.studio/${locale.value === 'en' ? '' : locale.value + '/'}blogs/${route.params.slug}` }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.value.data.name,
          "image": `https://portal.offload.studio/web/image?model=blog.post&id=${post.value.data.id}&field=x_image`,
          "datePublished": post.value.data.published_date,
          "author": {
            "@type": "Person",
            "name": "Filippou Petros/Dimitris Afentakis" // Replace with actual author name if available
          },
          "publisher": {
            "@type": "Organization",
            "name": "Offload Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://offload.studio/_nuxt/LogoNav.208eZWZG.svg" // Replace with actual logo URL
            }
          },
          "description": post.value.data.website_meta_description || 'This is a default description for the blog post, providing an overview of the content and its relevance to the audience.'
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
              "item": "https://offload.studio/blogs"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.value.data.name,
              "item": `https://offload.studio/${locale.value === 'en' ? '' : locale.value + '/'}blogs/${route.params.slug}`
            }
          ]
        })
      }
    ]
  });
}
</script>

<style scoped>
.blog-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style> 