<template>
  <div class="bg-black text-white container-fluid p-0 m-0 md:overflow-hidden md:h-screen">
    <div
      class="grid grid-cols-1 md:grid-cols-10 grid-rows-6 md:grid-rows-10 gap-3 p-5"
    >
      <!-- Profile Card -->
      <div class="bg-zinc-900 rounded-3xl p-6 flex flex-col items-start row-span-2 md:row-span-5 md:col-span-2 relative">
        <div class="relative">
          <img src="~/assets/filippou-photo.png" alt="Profile" class="rounded-2xl w-[70dvh] object-cover">
          <div class="absolute -top-3 right-4 bg-gradient-to-b from-[#212121] to-[#101010] px-4 py-2 rounded-full">
            <span class="text-green-400 text-sm">● Open to work</span>
          </div>
        </div>
        <h2 class="text-2xl font-bold mt-4">Petros Filippou</h2>
        <p class="text-zinc-400 text-md mb-4">Full Stack Developer</p>
        <p class="text-zinc-300 text-left text-lg">
          I care about building things that feel right, clean code, thoughtful design, and websites that load fast and make people smile. Let's make something simple and solid together.
        </p>
      </div>

      <!-- Contact Card (Contact Info + Form, one column, wider and shorter) -->
      <div class="bg-zinc-900 rounded-3xl p-2 flex flex-col justify-between md:row-span-2 md:col-span-5 row-span-2">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Left Column - Contact Info -->
          <div class="flex flex-col gap-4 px-3">
            <p class="text-2xl text-[#A3A3A3] mt-10">Contact</p>
            <h1 class="text-white text-4xl font-bold">Let's talk!</h1>
          </div>
          
          <!-- Right Column - Contact Form -->
          <form class="flex flex-col gap-3 bg-offload-black px-4 py-3 rounded-2xl border border-[#3D3D3D59]">
            <h3 class="text-xl text-white mb-1">Do you prefer I reach out?</h3>
            <input class="bg-zinc-800 rounded-xl p-3" placeholder="Your Email" />
            <textarea class="bg-zinc-800 rounded-xl p-3" placeholder="Your Message" rows="4"></textarea>
            <button class="bg-offload-pink hover:bg-pink-600 rounded-xl p-3 font-medium">Send Message</button>
          </form>
        </div>
      </div>
            <!-- Social Profiles (right of contact card) -->
        <div class="bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between md:row-span-1 md:col-span-3">
        <h3 class="font-bold mb-2">Social Profiles</h3>
        <div class="flex gap-6 text-3xl justify-center items-center">
          <a href="#" class="hover:text-pink-500 px-4 py-3 bg-offload-black rounded-xl flex items-center justify-center" title="GitHub">
            <Icon name="mdi:github" class="w-12 h-12" />
          </a>
          <a href="#" class="hover:text-pink-500 px-4 py-3 bg-offload-black rounded-xl flex items-center justify-center" title="Instagram">
            <Icon name="mdi:instagram" class="w-12 h-12" />
          </a>
          <a href="#" class="hover:text-pink-500 px-4 py-3 bg-offload-black rounded-xl flex items-center justify-center" title="LinkedIn">
            <Icon name="mdi:linkedin" class="w-12 h-12" />
          </a>
          <a href="#" class="hover:text-pink-500 px-4 py-3 bg-offload-black rounded-xl flex items-center justify-center" title="Twitter">
            <Icon name="mdi:twitter" class="w-12 h-12" />
          </a>
        </div>
      </div>

      <!-- Offload Studio Link (under social profiles) -->
      <div class="bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between row-span-1 md:row-span-1 md:col-span-3">
        <span class="text-zinc-400 text-xs">Co-Founder @ Offload Studio</span>
        <a href="https://offload.studio" target="_blank" class="block mt-2 text-lg font-bold text-pink-500 hover:underline">Visit <span class="text-orange-400">Offload Studio</span></a>
      </div>

      <!-- My Journey -->
      <div class="bg-zinc-900 rounded-3xl p-6 overflow-y-auto row-span-2 md:row-span-5 md:col-span-3">
        <h3 class="font-bold mb-4">My Journey</h3>
        <div class="mb-4">
          <div class="font-bold">Offload Studio <span class="text-xs text-zinc-400">2025-Current</span></div>
          <div class="text-zinc-400 text-sm">Co-Founder</div>
          <div class="text-zinc-300 text-xs mb-2">I care about building things that feel right, clean code, thoughtful design, and websites that load fast and make people smile.</div>
        </div>
        <div class="mb-4">
          <div class="font-bold">CC-Lit <span class="text-xs text-zinc-400">2025-Current</span></div>
          <div class="text-zinc-400 text-sm">Lead Dev</div>
          <div class="text-zinc-300 text-xs mb-2">Focused on creating user-centric solutions that enhance usability and foster engagement through interactive design.</div>
        </div>
        <div>
          <div class="font-bold">Freelance <span class="text-xs text-zinc-400">2025-Current</span></div>
          <div class="text-zinc-400 text-sm">FullStack</div>
          <div class="text-zinc-300 text-xs">Responsible for driving product strategy and collaborating with cross-functional teams to deliver innovative tech products that address user needs.</div>
        </div>
      </div>

      <!-- Projects Grid: 2x2 next to My Journey -->
      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 md:col-span-5 md:row-span-5">
        <div class="bg-gradient-to-tr from-pink-500/30 to-black rounded-3xl p-4 flex items-center justify-center">
          <img src="#" alt="Project 1" class="rounded-xl w-full h-40 object-cover" />
        </div>
        <div class="bg-gradient-to-tr from-green-500/30 to-black rounded-3xl p-4 flex items-center justify-center">
          <img src="#" alt="Project 2" class="rounded-xl w-full h-40 object-cover" />
        </div>
        <div class="bg-gradient-to-tr from-orange-500/30 to-black rounded-3xl p-4 flex items-center justify-center">
          <img src="#" alt="Project 3" class="rounded-xl w-full h-40 object-cover" />
        </div>
        <div class="bg-gradient-to-tr from-blue-500/30 to-black rounded-3xl p-4 flex items-center justify-center">
          <img src="#" alt="Project 4" class="rounded-xl w-full h-40 object-cover" />
        </div>
      </div>

      <!-- What I Use Daily (under Profile Card) -->
      <div class="bg-zinc-900 rounded-3xl p-6 flex flex-col items-center justify-center row-span-1 md:row-span-2 md:col-span-2">
        <h3 class="font-bold mb-2">What I use daily</h3>
        <div class="flex gap-4 flex-wrap justify-center">
          <Icon name="logos:nuxt-icon" class="w-10 h-10" title="Nuxt.js" />
          <Icon name="logos:vue" class="w-10 h-10" title="Vue.js" />
          <Icon name="logos:nodejs-icon" class="w-10 h-10" title="Node.js" />
          <Icon name="logos:php" class="w-10 h-10" title="PHP" />
          <Icon name="logos:html-5" class="w-10 h-10" title="HTML5" />
          <Icon name="logos:css-3" class="w-10 h-10" title="CSS3" />
          <Icon name="logos:odoo" class="w-10 h-10" title="Odoo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
// useHead({
//     title: 'Filippou Portfolio',
//     meta: [
//       { name: 'description', content: t('seo.desc') },
//       { name: 'keywords', content: 'design, web development, branding, custom websites, Offload Studio,no code websites,ui design,ux design,seo optimization,website speed optimization' },
//       { name: 'robots', content: 'index, follow' },
//       { property: 'og:title', content: 'Offload Studio | Design & Web Development Agency' },
//       { property: 'og:description', content: 'Explore our services in design and web development at Offload Studio.' },
//       { property: 'og:image', content: 'https://offload.studio/_nuxt/LogoNav.208eZWZG.svg' },
//       { property: 'og:url', content: 'https://offload.studio/' },
//       { name: 'twitter:card', content: 'summary_large_image' },
//       { name: 'twitter:title', content: 'Offload Studio | Design & Web Development Agency' },
//       { name: 'twitter:description', content: 'Discover innovative solutions in design and web development at Offload Studio.' },
//       { name: 'twitter:image', content: 'https://offload.studio/_nuxt/LogoNav.208eZWZG.svg' }
//     ],
//     script: [
//       {
//         type: 'application/ld+json',
//         innerHTML: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebSite",
//           "name": "Offload Studio",
//           "url": "https://offload.studio/",
//           "description": "Offload Studio provides innovative solutions in branding, design, and web development.",
//           "image": "https://offload.studio/_nuxt/LogoNav.208eZWZG.svg"
//         })
//       },
//     ]
//   });
</script>