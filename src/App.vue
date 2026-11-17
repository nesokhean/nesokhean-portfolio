<script setup>
import AppNav from './components/layout/AppNav.vue'
</script>

<template>
  <div class="portfolio">
    <a href="#about" class="skip-link">Skip to content</a>
    <AppNav />
    <main>
      <RouterView />
    </main>
  </div>
</template>
