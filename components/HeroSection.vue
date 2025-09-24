<template>
  <section>
    <!-- Hero top -->
    <div
      class="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white"
    >
      <!-- Left content -->
      <div class="max-w-xl text-left">
       <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold md:font-normal leading-tight mb-6">
  Think bigger. <br />
  Build faster.
</h1>


        <p class="text-lg md:text-xl text-black-600 mb-8">
          Figma helps design and development teams build great products, together.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="px-6 py-3 rounded-lg text-lg font-semibold bg-black text-white hover:bg-gray-900"
          >
            Get started for free
          </button>
          <button
            class="px-6 py-3 rounded-lg text-lg font-medium border border-gray-300 hover:bg-gray-50"
          >
            Contact sales
          </button>
        </div>
      </div>

      <!-- Right hero image -->
      <div
        class="mt-10 md:mt-0 md:ml-12 flex-shrink-0 w-full md:w-auto flex justify-center"
      >
        <img
          src="/public/h1.png"
          alt="Figma Hero"
          class="w-3/4 md:w-full max-w-md cursor-pointer transition-transform duration-300 ease-in-out"
          :class="{ 'scale-90 -translate-y-2': clicked }"
          @click="handleClick"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <!-- Hero Down image -->
    <div class="w-full">
      <img
        src="/public/h2.png"
        alt="Hero Down Decoration"
        class="w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>

    <!-- Another image below -->
    <div class="w-full">
      <img
        src="/public/h3.png"
        alt="Hero Extra Decoration"
        class="w-full object-cover"
      />
    </div>

    <!-- Moving Logos Carousel below h3.png -->
    <section class="overflow-hidden py-8 bg-white">
      <div
        class="flex items-center space-x-8 whitespace-nowrap animate-scroll"
        :class="{ 'paused': isPaused }"
        @mouseover="pauseAnimation"
        @mouseleave="playAnimation"
        @click="togglePause"
        style="will-change: transform;"
      >
        <img
  v-for="num in 15"
  :key="num"
  :src="`/${num}.svg`"
  alt="Company Logo"
  class="h-5 w-auto object-contain"
  loading="lazy"
/>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const clicked = ref(false)
const isPaused = ref(false)

function handleClick() {
  clicked.value = true
  setTimeout(() => {
    clicked.value = false
  }, 300) // Animation duration = 300ms
}

const pauseAnimation = () => (isPaused.value = true)
const playAnimation = () => (isPaused.value = false)
const togglePause = () => (isPaused.value = !isPaused.value)
</script>

<style scoped>
@keyframes clickMove {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9) translateY(-8px);
  }
  100% {
    transform: scale(1);
  }
}

.clicked {
  animation: clickMove 0.3s ease forwards;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: inline-flex;
  animation: scroll 20s linear infinite;
}

.paused {
  animation-play-state: paused !important;
}
</style>