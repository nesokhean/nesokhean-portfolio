<script setup>
import { computed } from 'vue'
import { projects } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'
import ContourLines from '../ui/ContourLines.vue'
import SectionHead from '../ui/SectionHead.vue'
import ProjectDialog from './ProjectDialog.vue'

const props = defineProps({
  selected: { type: String, default: null },
})
const emit = defineEmits(['update:selected'])
const project = computed(() => projects.find((item) => item.id === props.selected) || null)
</script>

<template>
  <section id="projects" class="section">
    <ContourLines />
    <SectionHead title="Projects" label="" />

    <ul class="projects-grid">
      <li
        v-for="(item, index) in projects"
        :key="item.id"
        class="project"
        data-reveal="true"
        :style="{ '--i': index % 2 }"
      >
        <div class="project-media burn">
          <img
            :src="item.image"
            :alt="item.imageAlt"
            width="1200"
            height="630"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="project-row">
          <p class="hud-label">{{ item.stack[0] }} · {{ item.year }}</p>
          <h3 class="cond">{{ item.name }}</h3>
        </div>

        <p class="project-desc">{{ item.description }}</p>

        <div class="project-actions">
          <button
            type="button"
            class="cut-btn project-btn"
            aria-haspopup="dialog"
            @click="emit('update:selected', item.id)"
          >
            Details
            <AppIcon name="arrow" />
          </button>
        </div>
      </li>
    </ul>

    <ProjectDialog :project="project" @close="emit('update:selected', null)" />
  </section>
</template>
