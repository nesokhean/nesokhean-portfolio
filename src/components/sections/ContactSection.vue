<script setup>
import { contact } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'
import ContourLines from '../ui/ContourLines.vue'

const icons = {
  Email: 'mail',
  GitHub: 'github',
  Phone: 'phone',
}
</script>

<template>
  <section id="contact" class="section contact tone tone-ink" data-reveal-style="scan">
    <ContourLines />
    <div data-reveal="wipe">
      <h2 class="cond contact-title">Let's<br />work.</h2>
      <p class="contact-sub" data-reveal="true" style="--i: 1">{{ contact.sub }}</p>
    </div>

    <ul class="contact-list">
      <li
        v-for="(link, index) in contact.links"
        :key="link.label"
        data-reveal="true"
        :style="{ '--i': index }"
      >
        <a
          class="hud"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          <span class="hud-label">{{ link.label }}</span>
          <span class="contact-value">{{ link.value }}</span>
          <AppIcon
            :name="icons[link.label]"
            :filled="link.label === 'GitHub'"
          />
        </a>
      </li>
    </ul>
  </section>
</template>
