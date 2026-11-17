<script setup>
import { about } from '../../data/portfolioData'
import ContourLines from '../ui/ContourLines.vue'
import SectionHead from '../ui/SectionHead.vue'
</script>

<template>
  <section id="about" class="section tone tone-ink">
    <ContourLines />
    <SectionHead
      title="About"
      :label="about.label"
      :sub="about.sub"
    />

    <div class="about">
      <div class="about-text">
        <p
          v-for="(paragraph, index) in about.paragraphs"
          :key="paragraph"
          data-reveal="true"
          :style="{ '--i': index }"
        >
          {{ paragraph }}
        </p>
      </div>

      <dl class="facts">
        <div
          v-for="(fact, index) in about.facts"
          :key="fact.label"
          class="hud"
          data-reveal="true"
          :style="{ '--i': index + 1 }"
        >
          <dt class="hud-label">{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
