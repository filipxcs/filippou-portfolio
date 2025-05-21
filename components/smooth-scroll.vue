<template>
  <div class="smooth-scroll-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';

const { $gsap } = useNuxtApp();
const smoothScrollToCenter = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    // Calculate the target element's position
    const offset = (window.innerHeight - targetElement.offsetHeight) / 2;
    
    // Use GSAP to scroll to the element, adjusting for the center position
    gsap.to(window, {
      scrollTo: {
        y: targetElement.offsetTop - offset, // Adjust position to center it
        autoKill: false
      },
      duration: 1.5,
      ease: 'power2.out'
    });
  }
};
</script>

<style>
/* Apply smooth scrolling to the whole document */
html {
  scroll-behavior: smooth;
}

body {
  overscroll-behavior-y: none;
}

.smooth-scroll-container {
  width: 100%;
  overflow-x: hidden;
}
</style>