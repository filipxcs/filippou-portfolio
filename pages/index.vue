<template>
  <div class="bg-[#0D0D0D] text-white min-h-screen flex items-center justify-center">
    <div class="container mx-auto md:overflow-hidden">
      <div
        class="grid grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-4 gap-3 p-5"
      >
        <!-- Profile Card -->
        <div class="bg-offload-black rounded-3xl p-6 flex flex-col items-start row-span-2 md:row-span-5 md:col-span-3 relative border-[2px] border-[#3D3D3D59] shadow-lg">
          <div class="relative w-full">
            <img src="~/assets/filippou-photo.png" alt="Profile" class="rounded-2xl w-full object-cover" style="max-height:30vh;" />
            <div class="absolute -top-3 right-4 bg-gradient-to-b from-[#212121] to-[#101010] px-4 py-2 rounded-full">
              <span class="text-green-400 text-sm">● Open to work</span>
            </div>
          </div>
          <h2 class="text-2xl font-bold mt-4">Petros Filippou</h2>
          <p class="text-zinc-400 text-md mb-4">Full Stack Developer</p>
          <p class="text-zinc-300 text-left text-lg flex-1">
            I care about building things that feel right, clean code, thoughtful design, and websites that load fast and make people smile. Let's make something simple and solid together.
          </p>
        </div>

        <!-- Contact Card (Contact Info + Form, one column, wider and shorter) -->
        <div class="bg-offload-black rounded-3xl p-2 flex flex-col justify-between row-span-2 md:row-span-2 col-span-1 md:col-span-6 border-orange-500 border-[2px] shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <!-- Left Column - Contact Info -->
            <div class="flex flex-col gap-4 px-3 h-full">
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
        <div class="bg-offload-black rounded-3xl p-3 flex flex-col justify-between md:row-span-1 md:col-span-3 border-[2px] border-[#3D3D3D59] shadow-lg">
          <h3 class="font-bold mb-2">Social Profiles</h3>
          <div class="flex gap-4 text-3xl justify-center items-center">
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="GitHub">
              <Icon name="mdi:github" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="Instagram">
              <Icon name="mdi:instagram" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="LinkedIn">
              <Icon name="mdi:linkedin" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="Twitter">
              <Icon name="mdi:twitter" class="w-10 h-10" />
            </a>
          </div>
        </div>
        <!-- Offload Studio Link (under social profiles) -->
        <div class="bg-offload-black rounded-3xl p-3 flex flex-col justify-between row-span-1 md:row-span-1 md:col-span-3 h-full border-[0.2dvh] border-[#3D3D3D59] shadow-lg">
          <span class="text-zinc-400 text-xs">Co-Founder @ Offload Studio</span>
          <a href="https://offload.studio" target="_blank" class="block mt-2 text-lg font-bold text-pink-500 hover:underline">Visit <span class="text-orange-400">Offload Studio</span></a>
        </div>
        <!-- My Journey -->
        <div class="bg-offload-black rounded-3xl p-3 row-span-2 md:row-span-5 md:col-span-3 h-full border-[2px] border-[#3D3D3D59] shadow-lg flex flex-col">
          <h2 class="font-bold text-2xl mb-4 bg-[#212121] px-5 py-6 rounded-3xl shadow-lg border border-[#3D3D3D59]">My Journey</h2>
          <div class="flex flex-col flex-1 justify-end gap-4">
            <Card class="flex-1 bg-[#212121] rounded-3xl px-4 py-2 border border-[#3D3D3D59] shadow-lg">
              <div class="flex items-center justify-between">
                <div class="font-bold text-white">Offload Studio</div>
                <Badge class="ml-2 bg-offload-black font-medium">2025-Current</Badge>
              </div>
              <div class="text-zinc-400 text-sm mb-1">Co-Founder</div>
              <div class="text-zinc-300 text-xs">I care about building things that feel right, clean code, thoughtful design, and websites that load fast and make people smile.</div>
            </Card>
            <Card class="flex-1 bg-[#212121] rounded-3xl px-4 py-2 border border-[#3D3D3D59] shadow-lg">
              <div class="flex items-center justify-between">
                <div class="font-bold text-white">Freelance</div>
                <Badge class="ml-2 bg-offload-black font-medium">2019-Current</Badge>
              </div>
              <div class="text-zinc-400 text-sm mb-1">Full Stack Developer</div>
              <li class="text-sm text-zinc-300">Developed custom websites using WordPress, OpenCart, and Vue.js for small businesses.</li>
               <li class="text-sm text-zinc-300">Created and maintained FiveM scripts with Lua and JavaScript, including UIs and server-side logic.</li>
            </Card>
            <Card class="flex-1 bg-[#212121] rounded-3xl px-4 py-2 border border-[#3D3D3D59] shadow-lg">
              <div class="flex items-center justify-between">
                <div class="font-bold text-white">CC-Lit</div>
                <Badge class="ml-2 bg-offload-black font-medium">2021-2024</Badge>
              </div>
              <div class="text-zinc-400 text-sm mb-1">Lead Developer/Full Stack Developer </div>
              <ul class="list-disc list-inside">
                <li class="text-sm text-zinc-300">Developed and deployed 7 full websites using WordPress and OpenCart, tailored to client-specific requirements.</li>
                <li class="text-sm text-zinc-300">Built multiple custom OpenCart extensions to enhance e-commerce functionality and automate business operations.</li>
              </ul>
            </Card>

          </div>
        </div>
        <!-- Projects Grid: 2x2 next to My Journey -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 md:col-span-6 row-span-2 md:row-span-5 h-full border-[2px] border-[#3D3D3D59] shadow-lg rounded-3xl bg-offload-black p-3">
          <!-- Project 1 -->
          <div class="flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-tr from-blue-400/80 via-blue-500/70 to-blue-700/80 shadow-lg">
            <div>
              <h3 class="text-2xl font-bold mb-2">Harís Fish Market</h3>
              <p class="text-zinc-200 mb-4">A modern e-commerce platform for fresh fish delivery, featuring real-time inventory and seamless checkout.</p>
            </div>
            <Button class="mt-2 bg-offload-black hover:bg-pink-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg transition shadow-sm">Visit Website</Button>
          </div>

          <!-- Project 2 -->
          <div class="flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-tr from-lime-700/80 via-green-600/70 to-yellow-200/60 shadow-lg">
            <div>
              <h3 class="text-2xl font-bold mb-2">Karemfillis Olives</h3>
              <p class="text-zinc-200 mb-4">Brand and website for a premium olive oil producer, with a focus on storytelling and product showcase.</p>
            </div>
            <Button class="mt-2 bg-offload-black hover:bg-pink-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg transition shadow-sm">Visit Website</Button>
          </div>

          <!-- Project 3 -->
          <div class="flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-tr from-green-400/70 via-emerald-500/50 to-black shadow-lg">
            <div>
              <h3 class="text-2xl font-bold mb-2">NetConnect</h3>
              <p class="text-zinc-200 mb-4">Corporate site for a networking solutions provider, with custom service pages and contact flows.</p>
            </div>
            <Button class="mt-2 bg-offload-black hover:bg-pink-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg transition shadow-sm">Visit Website</Button>
          </div>

          <!-- Project 4 -->
          <div class="flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-tr from-orange-400/70 via-yellow-300/50 to-black shadow-lg">
            <div>
              <h3 class="text-2xl font-bold mb-2">PCShop</h3>
              <p class="text-zinc-200 mb-4">E-commerce for a local computer shop, with product catalog, online ordering, and admin dashboard.</p>
            </div>
            <Button class="mt-2 bg-offload-black hover:bg-pink-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg transition shadow-sm">Visit Website</Button>
          </div>
        </div>
        <!-- What I Use Daily (under Profile Card) -->
        <div class="bg-offload-black rounded-3xl p-6 flex flex-col items-center justify-center row-span-1 md:row-span-2 md:col-span-3 h-full border-[2px] border-[#3D3D3D59] shadow-lg">
          <h3 class="font-bold mb-2">What I use daily</h3>
          <div class="flex gap-4 flex-wrap justify-center">
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="Nuxt.js">
              <Icon name="logos:nuxt-icon" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="Vue.js">
              <Icon name="logos:vue" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="Node.js">
              <Icon name="logos:nodejs-icon" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="PHP">
              <Icon name="logos:php" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="PHP">
              <Icon name="material-icon-theme:javascript" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="HTML5">
              <Icon name="logos:html-5" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="CSS3">
              <Icon name="logos:css-3" class="w-10 h-10" />
            </a>
            <a href="#" class="hover:text-pink-500 px-2 py-2 bg-[#212121] rounded-xl flex items-center justify-center" title="Odoo">
              <Icon name="simple-icons:odoo" class="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from '~/components/ui/card/Card.vue';

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