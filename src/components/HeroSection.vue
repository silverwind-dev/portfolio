<script setup>
const scrollToProjects = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-16">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
        Иван Иванов
      </h1>
      <p class="text-xl text-muted mb-4 animate-on-scroll">
        Full-Stack Разработчик
      </p>
      <p class="text-lg text-muted max-w-2xl mx-auto mb-10 animate-on-scroll">
        Создаю современные веб-приложения с вниманием к деталям и пользовательскому опыту.
        Специализируюсь на Vue.js, React и современных технологиях фронтенда.
      </p>
      <button
        @click="scrollToProjects"
        class="px-8 py-3 border border-muted rounded hover:bg-surface transition-all animate-on-scroll"
      >
        View Projects
      </button>
    </div>
  </section>
</template>
