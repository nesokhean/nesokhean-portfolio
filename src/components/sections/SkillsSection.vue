<script setup>
import { skillGroups } from '../../data/portfolioData'
import ContourLines from '../ui/ContourLines.vue'
import SectionHead from '../ui/SectionHead.vue'
</script>

<template>
  <section id="skills" class="section" data-reveal-style="scan">
    <ContourLines />
    <SectionHead
      title="Skills"
      label="What I work with"
      sub="3 areas · 27 tools"
    />

    <div class="skills-grid">
      <article
        v-for="(group, index) in skillGroups"
        :key="group.key"
        class="hud skill"
        data-reveal="true"
        :style="{ '--i': index }"
      >
        <p class="hud-label">{{ group.label }}</p>
        <h3 class="cond">{{ group.title }}</h3>
        <p class="skill-desc">{{ group.description }}</p>
        <ul class="logos">
          <li v-for="tool in group.tools" :key="tool.name">
            <img
              :src="tool.icon"
              alt=""
              width="20"
              height="20"
              loading="lazy"
              decoding="async"
            />
            <span>{{ tool.name }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
