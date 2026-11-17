<script setup>
import AuraRing from './AuraRing.vue'
</script>

<template>
  <div class="hero-portrait">
    <div class="portrait-light" aria-hidden="true" />

    <img
      class="portrait-aura"
      src="/img/hero-aura-hd.webp"
      srcset="/img/hero-aura-hd-960.webp 960w, /img/hero-aura-hd.webp 1920w"
      sizes="(max-width: 1024px) 100vw, 1920px"
      width="1920"
      height="1792"
      alt=""
      aria-hidden="true"
      decoding="async"
      fetchpriority="auto"
    />

    <AuraRing />

    <img
      class="portrait-photo"
      src="/img/hero-portrait-hd.webp"
      srcset="/img/hero-portrait-hd-960.webp 960w, /img/hero-portrait-hd.webp 1920w"
      sizes="(max-width: 1024px) 100vw, 1920px"
      width="1920"
      height="1792"
      alt="Portrait of NE Sokhean"
      decoding="async"
      fetchpriority="high"
    />
  </div>
</template>
