<script setup>
import { hero, profile } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'
import ContourLines from '../ui/ContourLines.vue'
import PortraitStage from './PortraitStage.vue'

const emit = defineEmits(['open-project'])
</script>

<template>
  <section id="top" class="hero">
    <ContourLines class-name="hero-contours" />

    <div class="hero-intro">
      <h1 class="hero-name">
        <span>{{ profile.firstName }}</span>
        <span>{{ profile.lastName }}</span>
      </h1>
      <ul class="hero-meta hero-meta-top">
        <li v-for="item in hero.meta" :key="item.text">
          <AppIcon :name="item.icon" />
          {{ item.text }}
        </li>
      </ul>
    </div>

    <div class="hero-stage">
      <PortraitStage />
    </div>

    <aside class="hero-panels" aria-label="At a glance">
      <div class="hud">
        <p class="hud-label">Currently</p>
        <p class="hud-title">{{ hero.currently }}</p>
        <p class="hud-sub">{{ hero.currentlyOrg }}</p>
      </div>

      <a
        class="hud hud-link"
        href="#projects"
        @click.prevent="emit('open-project', hero.latestProject.id)"
      >
        <p class="hud-label">Latest project</p>
        <p class="hud-title">{{ hero.latestProject.name }}</p>
        <p class="hud-sub">{{ hero.latestProject.stack[0] }}, {{ hero.latestProject.year }}</p>
        <svg
          class="hud-spark"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline :points="hero.sparkline" />
        </svg>
      </a>

      <div class="hud">
        <p class="hud-label">At a glance</p>
        <dl class="hud-stats">
          <div v-for="stat in hero.stats" :key="stat.label">
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </aside>

    <div class="hero-bar">
      <ul class="hero-meta hero-meta-bar">
        <li v-for="item in hero.meta" :key="item.text">
          <AppIcon :name="item.icon" />
          {{ item.text }}
        </li>
      </ul>

      <div class="hero-bar-action">
        <a href="#projects" class="hero-cta">
          View projects
          <AppIcon name="arrow" />
        </a>
      </div>
    </div>
  </section>
</template>
