<template>
  <div
    @mousemove="moveCursor"
    @mouseleave="hideCursor"
    @mouseenter="showCursor"
  >
    <!-- Slot to wrap your page content if needed -->
    <slot />
    <!-- Custom cursor circle -->
    <div
      ref="cursor"
      class="custom-cursor"
      :style="{ top: `${y}px`, left: `${x}px`, opacity: visible ? 1 : 0 }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)
const visible = ref(false)

function moveCursor(e) {
  x.value = e.clientX
  y.value = e.clientY
  visible.value = true
}

function hideCursor() {
  visible.value = false
}

function showCursor() {
  visible.value = true
}
</script>

<style scoped>
/* Hide native cursor on parent div */
div {
  cursor: none;
}

/* Custom cursor style similar to Figma */
.custom-cursor {
  position: fixed;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  transition: transform 0.15s ease, opacity 0.15s ease;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
