<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { navigation, profile } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'

const scrolled = ref(false)
const hidden = ref(false)
const open = ref(false)
let lastY = 0

const onScroll = () => {
  const y = window.scrollY
  scrolled.value = y > 40

  if (Math.abs(y - lastY) > 4) {
    hidden.value = y > 120 && y > lastY
    if (hidden.value) open.value = false
  }

  lastY = y
}

const onKeydown = (event) => {
  if (event.key === 'Escape') open.value = false
}

const onPointerDown = (event) => {
  if (open.value && !event.target.closest?.('.nav')) open.value = false
}

const close = () => {
  open.value = false
}

onMounted(() => {
  lastY = window.scrollY
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('pointerdown', onPointerDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('pointerdown', onPointerDown)
})
</script>

<template>
  <header
    class="nav"
    :class="{ 'is-scrolled': scrolled, 'is-hidden': hidden, 'is-open': open }"
  >
    <a href="#top" class="nav-brand" @click="close">{{ profile.displayName }}</a>

    <nav aria-label="Sections">
      <ul class="nav-links">
        <li v-for="item in navigation" :key="item.href">
          <a :href="item.href" @click="close">{{ item.label }}</a>
        </li>
        <li class="nav-links-contact">
          <a href="#contact" @click="close">
            Contact
            <AppIcon name="arrow" />
          </a>
        </li>
      </ul>
    </nav>

    <div class="nav-end">
      <a href="#contact" class="nav-cta" @click="close">
        Contact
        <AppIcon name="arrow" />
      </a>
      <button
        type="button"
        class="nav-menu-btn"
        :aria-expanded="open"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" />
      </button>
    </div>
  </header>
</template>
