<script setup>
import { ref } from 'vue'
import HeroSection from '../components/hero/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import AchievementsSection from '../components/sections/AchievementsSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import BusinessSection from '../components/sections/BusinessSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'

const selectedProject = ref(null)
</script>

<template>
  <HeroSection @open-project="selectedProject = $event" />

  <div class="paper">
    <AboutSection />
    <AchievementsSection />
    <SkillsSection />
    <ProjectsSection v-model:selected="selectedProject" />
    <BusinessSection />
    <ContactSection />
    <SiteFooter />
  </div>
</template>
