<script setup>
import { computed, ref } from 'vue'
import { business } from '../../data/portfolioData'
import AppIcon from '../ui/AppIcon.vue'
import ContourLines from '../ui/ContourLines.vue'
import ImageLightbox from '../ui/ImageLightbox.vue'
import SectionHead from '../ui/SectionHead.vue'

const retail = business.retailBusiness
const lightboxIndex = ref(-1)
const galleryImages = computed(() =>
  retail.gallery.map((image) => ({ src: image.src, alt: image.alt })),
)
const chart = [36, 62, 45, 78, 52, 88, 66]
</script>

<template>
  <section id="business" class="section" data-reveal-style="scan">
    <ContourLines />
    <SectionHead
      title="Business"
      :label="business.label"
      :sub="business.sub"
    />

    <div class="sub-head" data-reveal="true">
      <p class="hud-label">{{ business.software.label }}</p>
      <h3 class="cond">{{ business.software.title }}</h3>
      <p class="sub-sub">{{ business.software.sub }}</p>
    </div>

    <ul class="ventures">
      <li
        v-for="(focus, index) in business.focuses"
        :key="focus.key"
        class="venture"
        data-reveal="true"
        :style="{ '--i': index, '--accent': focus.accent }"
      >
        <article class="hud venture-card" :class="{ 'is-reverse': index === 1 }">
          <div class="venture-screen">
            <div class="venture-poster">
              <div class="browser">
                <div class="browser-bar">
                  <span class="dot" />
                  <span class="dot" />
                  <span class="dot" />
                  <span class="browser-url">{{ focus.domain }}</span>
                </div>
                <div class="mock">
                  <div class="mock-side">
                    <span class="mock-logo">{{ focus.mockName[0] }}</span>
                    <i /><i /><i /><i /><i />
                  </div>
                  <div class="mock-main">
                    <div class="mock-row">
                      <span class="mock-pill" />
                      <span class="mock-pill wide" />
                    </div>
                    <div class="mock-cards">
                      <span /><span /><span />
                    </div>
                    <div class="mock-chart">
                      <i
                        v-for="(height, chartIndex) in chart"
                        :key="chartIndex"
                        :style="{ height: `${height}%` }"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="venture-status">{{ focus.status }}</span>
            <span class="venture-domain">{{ focus.domain }}</span>
          </div>

          <div class="venture-body">
            <p class="hud-label">Focus · Learning</p>
            <h3 class="cond">{{ focus.name }}</h3>
            <p class="venture-tagline">{{ focus.tagline }}</p>
            <p class="venture-desc">{{ focus.desc }}</p>

            <ul class="venture-features">
              <li v-for="feature in focus.features" :key="feature">
                <AppIcon name="check" />
                {{ feature }}
              </li>
            </ul>

            <div class="venture-foot">
              <ul class="tags venture-stack">
                <li v-for="item in focus.stack" :key="item">{{ item }}</li>
              </ul>
              <div class="venture-actions">
                <a :href="focus.detail.url" class="venture-detail">
                  {{ focus.detail.label }}
                </a>
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>

    <div class="sub-head" data-reveal="true">
      <p class="hud-label">{{ business.retail.label }}</p>
      <h3 class="cond">{{ business.retail.title }}</h3>
      <p class="sub-sub">{{ business.retail.sub }}</p>
    </div>

    <div class="hud business" data-reveal="true">
      <div class="business-head">
        <img
          :src="retail.logo"
          width="80"
          height="80"
          alt=""
          class="business-logo"
          loading="lazy"
        />
        <div>
          <p class="hud-label">Retail · Part-time</p>
          <h3 class="cond">{{ retail.name }}</h3>
          <p class="business-desc">{{ retail.desc }}</p>
          <ul class="tags">
            <li v-for="item in retail.services" :key="item">{{ item }}</li>
          </ul>
        </div>
        <ul class="business-links">
          <li v-for="link in retail.links" :key="link.label">
            <a :href="link.url" class="cut-btn" target="_blank" rel="noopener">
              {{ link.label }}
              <AppIcon name="arrow" />
            </a>
          </li>
        </ul>
      </div>

      <ul class="gallery" aria-label="Barista work posters">
        <li v-for="(image, index) in retail.gallery" :key="image.src" class="gallery-item">
          <button
            type="button"
            class="burn"
            :aria-label="`Open poster ${index + 1} of ${retail.gallery.length}`"
            @click="lightboxIndex = index"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
            />
          </button>
        </li>
      </ul>
    </div>

    <ImageLightbox
      :images="galleryImages"
      :index="lightboxIndex"
      @close="lightboxIndex = -1"
      @change="lightboxIndex = $event"
    />
  </section>
</template>
