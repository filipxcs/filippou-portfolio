<template>
  <div
    ref="textScrollRevealRef"
    :class="cn('relative z-0 h-[150vh]', $props.class)"
  >
    <div class="sticky top-0 mx-auto flex max-w-9xl items-center bg-transparent px-4 py-10 ">
      <p
        class="flex flex-wrap p-5 text-[2rem] font-medium text-black/20 xl:text-[3rem] lg:p-10 lg:text-[3rem] md:p-8 md:text-[2rem] dark:text-white/20"
      >
        <ScrollWord
          v-for="(word, i) in words"
          :key="i"
          :word="word"
          :progress="scrollYProgress"
          :range="[i / words.length, (i + 1) / words.length]"
        />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { cn } from "~/lib/utils";
import ScrollWord from "./ScrollWord.vue";

interface Props {
  class?: string;
  text: string;
}

// Props
const props = defineProps<Props>();

const textScrollRevealRef = ref<HTMLElement | null>(null);

const words = computed(() => props.text.split(" "));

const scrollYProgress = ref(0);

function updateScrollYProgress() {
  if (textScrollRevealRef.value) {
    const boundingRect = textScrollRevealRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    scrollYProgress.value = (boundingRect.y / windowHeight) * -1;
  }
}

onMounted(() => {
  window.addEventListener("scroll", updateScrollYProgress);
  window.addEventListener("resize", updateScrollYProgress);
  updateScrollYProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollYProgress);
  window.removeEventListener("resize", updateScrollYProgress);
});
</script>