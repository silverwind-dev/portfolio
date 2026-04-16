<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSlider from './components/ProjectsSlider.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="relative">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSlider />
      <ContactSection />
    </main>
  </div>
</template>
