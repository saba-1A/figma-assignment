<template>
  <section class="relative px-4 sm:px-6 lg:px-16 py-20 bg-white">
    <!-- Top images f1 + f2 -->
    <div class="w-full flex flex-col mb-12">
      <img src="/f1.png" alt="Feature 1" class="w-full object-cover block" />
      <img src="/f2.png" alt="Feature 2" class="w-full object-cover block" />
    </div>

    <!-- Carousel wrapper -->
    <div class="relative">
      <!-- Counter -->
      <div class="absolute top-0 left-0 text-gray-700 font-medium text-sm sm:text-base bg-white/80 px-3 py-1 rounded">
        {{ currentIndex + 1 }}/{{ features.length }}
      </div>

      <!-- Carousel track -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
        >
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex-shrink-0 px-3"
            :class="{
              'w-full': isMobile,
              'w-1/2': isTablet,
              'w-1/3': isDesktop
            }"
          >
            <div class="bg-white rounded-lg shadow text-left p-4 h-full flex flex-col">
              <img
                :src="feature.image"
                :alt="feature.title"
                class="w-full mb-4 rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 text-sm flex-grow">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button
        @click="prevSlide"
        :disabled="currentIndex === 0"
        class="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white border rounded-full shadow p-2 disabled:opacity-30"
      >
        ←
      </button>
      <button
        @click="nextSlide"
        :disabled="currentIndex === features.length - 1"
        class="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white border rounded-full shadow p-2 disabled:opacity-30"
      >
        →
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const currentIndex = ref(0);
const windowWidth = ref(0);

const features = [
  {
    image: "/f3.png",
    title: "Design systems that scale.",
    description:
      "Streamline the product development process with a design system that’s aligned across design and code.",
  },
  {
    image: "/f4.png",
    title: "Built for building.",
    description:
      "Dev Mode is a dedicated space in Figma where developers can get what they need to turn designs into code.",
  },
  {
    image: "/f5.png",
    title: "Focus on the details in Focus View.",
    description:
      "Select and inspect a specific design in Dev Mode, then dig into the details in Focus View so you know exactly what to build.",
  },
  {
    image: "/f6.png",
    title: "Track progress with design statuses.",
    description:
      "Stay informed with clear design status updates on what’s changed, completed, or ready to build—all",
  },
];

// Responsive breakpoints
const isMobile = computed(() => windowWidth.value < 640);
const isTablet = computed(() => windowWidth.value >= 640 && windowWidth.value < 1024);
const isDesktop = computed(() => windowWidth.value >= 1024);

// Slide width % based on screen size
const slideWidth = computed(() => {
  if (isMobile.value) return 100;
  if (isTablet.value) return 50;
  return 33.3333;
});

const nextSlide = () => {
  if (currentIndex.value < features.length - 1) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>
