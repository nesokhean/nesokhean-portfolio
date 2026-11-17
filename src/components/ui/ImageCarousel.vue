<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  images: { type: Array, required: true },
})

const emit = defineEmits(['open'])
const current = ref(0)
const paused = ref(false)
const count = computed(() => props.images.length)
let timer

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const clearTimer = () => {
  if (timer) window.clearTimeout(timer)
  timer = undefined
}

const schedule = () => {
  clearTimer()
  if (count.value <= 1 || paused.value || reducedMotion()) return
  timer = window.setTimeout(() => {
    current.value = (current.value + 1) % count.value
  }, 4500)
}

const go = (delta) => {
  current.value = (current.value + delta + count.value) % count.value
}

watch([current, paused], schedule, { immediate: true })
onBeforeUnmount(clearTimer)
</script>

<template>
  <div
    class="carousel"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <img
      v-for="(image, index) in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      :aria-hidden="index !== current"
      tabindex="-1"
      :class="{ 'is-current': index === current }"
      :style="image.pos ? { objectPosition: image.pos } : undefined"
      :loading="index === 0 ? undefined : 'lazy'"
      decoding="async"
      @click="emit('open', index)"
    />

    <div v-if="count > 1" class="carousel-ui">
      <button type="button" class="carousel-btn" aria-label="Previous photo" @click="go(-1)">
        <AppIcon name="left" />
      </button>
      <div class="carousel-dots">
        <button
          v-for="(image, index) in images"
          :key="image.src"
          type="button"
          :aria-label="`Photo ${index + 1} of ${count}`"
          :aria-current="index === current"
          :class="{ 'is-current': index === current }"
          @click="current = index"
        />
      </div>
      <button type="button" class="carousel-btn" aria-label="Next photo" @click="go(1)">
        <AppIcon name="right" />
      </button>
    </div>
  </div>
</template>
