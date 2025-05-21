import { ScrollRevealObject } from 'scrollreveal';

declare module '#app' {
  interface NuxtApp {
    $sr: ScrollRevealObject;
  }
}

export {};