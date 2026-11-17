<script setup>
import { contourPaths } from '../../data/contours'

defineProps({
  className: { type: String, default: 'contours' },
})
</script>

<template>
  <svg
    :class="className"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <path v-for="(path, index) in contourPaths" :key="index" :d="path" />
  </svg>
</template>
