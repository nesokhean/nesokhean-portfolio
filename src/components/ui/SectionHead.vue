<script setup>
defineProps({
  title: { type: String, required: true },
  label: { type: String, required: true },
  sub: { type: String, default: '' },
})
</script>

<template>
  <div class="sec-head" data-reveal="wipe">
    <h2 class="cond sec-title">{{ title }}</h2>
    <div class="sec-meta" data-reveal="true" style="--i: 1">
      <p class="hud-label">{{ label }}</p>
      <p v-if="sub" class="sec-sub">{{ sub }}</p>
    </div>
  </div>
</template>
