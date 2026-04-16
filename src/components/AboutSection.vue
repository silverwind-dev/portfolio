<script setup>
const skills = [
  'Vue.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Vite',
  'Git',
  'PostgreSQL',
  'Docker',
  'Figma'
];
</script>

<template>
  <section id="about" class="min-h-screen flex items-center px-6 py-24">
    <div class="max-w-6xl mx-auto w-full">
      <h2 class="text-3xl font-bold mb-12 text-center animate-on-scroll">
        About Me
      </h2>
      
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="animate-on-scroll">
          <p class="text-muted text-lg mb-6">
            Привет! Я разработчик с более чем 5-летним опытом создания веб-приложений.
            Моя страсть — создавать чистый, поддерживаемый код и интуитивные пользовательские интерфейсы.
          </p>
          <p class="text-muted text-lg">
            Я постоянно учусь и слежу за новыми технологиями. Когда не пишу код,
            занимаюсь открытым исходным кодом и делюсь знаниями с сообществом.
          </p>
        </div>

        <div class="animate-on-scroll">
          <h3 class="text-xl font-semibold mb-6">Skills</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-surface rounded-full text-sm hover:text-highlight transition-colors cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
