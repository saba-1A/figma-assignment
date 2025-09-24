c sec

<template>
  <section
    class="relative w-full flex flex-col items-center justify-center bg-[#E4FF97] py-20 overflow-hidden"
  >
    <!-- Vimeo iframe -->
    <div class="w-full max-w-5xl aspect-video relative z-10 px-4 md:px-0">
      <iframe
        id="vimeo-player"
        src="https://player.vimeo.com/video/1048971700?h=9aa067f81e&title=0&byline=0&portrait=0&playsinline=0&muted=1&autopause=0&loop=1&app_id=122963"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        class="w-full h-full rounded-xl shadow-lg"
      ></iframe>
    </div>

    <!-- Play/Pause button -->
    <button
      @click="togglePlay"
      class="absolute bottom-10 left-6 sm:left-12 px-5 py-2 sm:px-6 sm:py-3 bg-black text-white text-sm sm:text-base rounded-md shadow-lg z-20"
    >
      {{ isPlaying ? "Pause" : "Play" }}
    </button>
  </section>
</template>

<script setup>
import Player from "@vimeo/player"
import { ref, onMounted } from "vue"

const isPlaying = ref(false)
let player

onMounted(() => {
  const iframe = document.getElementById("vimeo-player")
  player = new Player(iframe)
})

const togglePlay = async () => {
  if (!player) return
  if (isPlaying.value) {
    await player.pause()
    isPlaying.value = false
  } else {
    await player.play()
    isPlaying.value = true
  }
}
</script>
