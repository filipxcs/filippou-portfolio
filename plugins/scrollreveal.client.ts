import { defineNuxtPlugin } from '#app';
import ScrollReveal from 'scrollreveal';

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize ScrollReveal with default options
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 400,
    reset: true,
  });

  // Provide ScrollReveal globally via $sr
  nuxtApp.provide('sr', sr);
});