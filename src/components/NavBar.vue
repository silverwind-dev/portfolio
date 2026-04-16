<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('home');

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  const sectionElements = sections.map(s => document.getElementById(s.id));
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section, index) => {
    const element = sectionElements[index];
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <a href="#home" class="text-xl font-semibold hover:text-highlight transition-colors">
          Portfolio
        </a>
        <ul class="flex gap-8">
          <li v-for="section in sections" :key="section.id">
            <a
              :href="'#' + section.id"
              @click.prevent="scrollToSection(section.id)"
              class="text-muted hover:text-text transition-colors text-sm"
              :class="{ 'text-text font-medium': activeSection === section.id }"
            >
              {{ section.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  top: 0;
}
</style>
