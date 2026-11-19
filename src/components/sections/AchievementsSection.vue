<script setup>
import { ref } from 'vue'
import { achievements } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'
import ContourLines from '../ui/ContourLines.vue'
import ImageCarousel from '../ui/ImageCarousel.vue'
import ImageLightbox from '../ui/ImageLightbox.vue'
import SectionHead from '../ui/SectionHead.vue'

const featured = achievements.featured
const lightboxIndex = ref(-1)
</script>

<template>
  <section id="achievements" class="section">
    <ContourLines />
    <SectionHead
      title="Achievements"
      label="Verified milestone"
      :sub="achievements.sub"
    />

    <ul class="achievements">
      <li class="hud achievement" data-reveal="true">
        <div class="achievement-media">
          <ImageCarousel :images="featured.images" @open="lightboxIndex = $event" />
          <span class="achievement-badge">
            <AppIcon name="spark" />
            {{ featured.badge }}
          </span>
        </div>

        <div class="achievement-body">
          <p class="hud-label">{{ featured.kicker }}</p>
          <h3 class="cond">
            {{ featured.place }}
            <span>{{ featured.event }}</span>
          </h3>
          <p class="achievement-desc">{{ featured.description }}</p>

          <dl class="achievement-facts">
            <div v-for="fact in featured.facts" :key="fact.label">
              <dt>{{ fact.label }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          </dl>

          <ul class="tags">
            <li v-for="tag in featured.tags" :key="tag">{{ tag }}</li>
          </ul>

          <div class="achievement-actions">
            <a :href="featured.primary.href" class="cut-btn is-solid">
              {{ featured.primary.label }}
              <AppIcon name="arrow" />
            </a>
          </div>
        </div>
      </li>
    </ul>

    <ImageLightbox
      :images="featured.images"
      :index="lightboxIndex"
      @close="lightboxIndex = -1"
      @change="lightboxIndex = $event"
    />
  </section>
</template>
