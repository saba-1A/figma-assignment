<template>
  <nav
    class="flex items-center justify-between px-6 md:px-16 py-4 border-b bg-white-100 border-white-300 relative transition-colors"
  >
    <!-- Left: Logo + Menu -->
    <div class="flex items-center space-x-8">
      <img src="/public/logo.svg" alt="Figma Logo" class="w-7 h-7" />

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 font-medium text-gray-800">
        <a href="#" class="hover:text-black">Products</a>
        <a href="#" class="hover:text-black">Solutions</a>
        <a href="#" class="hover:text-black">Community</a>
        <a href="#" class="hover:text-black">Resources</a>
        <a href="#" class="hover:text-black">Pricing</a>
      </div>
    </div>

    <!-- Right: Auth + Buttons (desktop) -->
    <div class="hidden md:flex items-center space-x-4">
      <a href="#" class="text-gray-700 hover:text-black">
        Log in
      </a>
      <button class="px-5 py-2 border rounded-lg hover:bg-gray-200">
        Contact sales
      </button>
      <button class="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
        Get started for free
      </button>
    </div>

    <!-- Mobile Hamburger -->
    <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-gray-100 border border-gray-300 shadow-md md:hidden z-20 transition-colors"
    >
      <div class="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-800">
        <a href="#" class="hover:text-black">Products</a>
        <a href="#" class="hover:text-black">Solutions</a>
        <a href="#" class="hover:text-black">Community</a>
        <a href="#" class="hover:text-black">Resources</a>
        <a href="#" class="hover:text-black">Pricing</a>
        <hr class="border-gray-300" />
        <a href="#" class="hover:text-black">Log in</a>
        <button class="px-5 py-2 border rounded-lg hover:bg-gray-200">
          Contact sales
        </button>
        <button class="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
          Get started for free
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
const isOpen = ref(false)
</script>