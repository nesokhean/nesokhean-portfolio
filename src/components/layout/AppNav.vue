<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { navigation, profile } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'

const scrolled = ref(false)
const hidden = ref(false)
const open = ref(false)
const isDark = ref(false)
let lastY = 0

const setTheme = (dark) => {
  isDark.value = dark
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1026' : '#eef3f4')
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', dark ? 'dark' : 'light')
}

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
  isDark.value = document.documentElement.dataset.theme === 'dark'
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
      <button
        type="button"
        class="nav-theme-btn"
        :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
        :aria-pressed="isDark"
        :title="isDark ? 'Light theme' : 'Dark theme'"
        @click="setTheme(!isDark)"
      >
        <AppIcon :name="isDark ? 'sun' : 'moon'" />
      </button>
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
