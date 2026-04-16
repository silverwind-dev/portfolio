<script setup>
import { ref } from 'vue';

const sliderRef = ref(null);

const projects = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Современное SPA для управления задачами с реальным временем и совместной работой.',
    technologies: ['Vue.js', 'TypeScript', 'Firebase'],
    image: 'https://via.placeholder.com/320x200/141414/737373?text=Project+1'
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'E-commerce платформа с интеграцией платежей и админ-панелью.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://via.placeholder.com/320x200/141414/737373?text=Project+2'
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Аналитическая дашборд с визуализацией данных и отчётами.',
    technologies: ['Vue.js', 'D3.js', 'Python'],
    image: 'https://via.placeholder.com/320x200/141414/737373?text=Project+3'
  },
  {
    id: 4,
    title: 'Проект 4',
    description: 'Мобильное приложение для трекинга здоровья и фитнеса.',
    technologies: ['React Native', 'GraphQL', 'AWS'],
    image: 'https://via.placeholder.com/320x200/141414/737373?text=Project+4'
  },
  {
    id: 5,
    title: 'Проект 5',
    description: 'Платформа для онлайн-обучения с видео-контентом и тестами.',
    technologies: ['Next.js', 'Prisma', 'Stripe'],
    image: 'https://via.placeholder.com/320x200/141414/737373?text=Project+5'
  },
  {
    id: 6,
    title: 'Проект 6',
    description: 'CRM система для управления клиентами и продажами.',
    technologies: ['Vue.js', 'NestJS', 'MongoDB'],
    image: 'https://via.placeholder.com/320x200/141414/737373?text=Project+6'
  }
];

const scroll = (direction) => {
  if (sliderRef.value) {
    const scrollAmount = 340;
    sliderRef.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <section id="projects" class="min-h-screen flex items-center px-6 py-24 relative">
    <div class="max-w-6xl mx-auto w-full">
      <h2 class="text-3xl font-bold mb-12 text-center animate-on-scroll">
        Projects
      </h2>

      <div class="relative group">
        <!-- Navigation Buttons -->
        <button
          @click="scroll('left')"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-surface border border-muted rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-text"
        >
          ←
        </button>
        <button
          @click="scroll('right')"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-surface border border-muted rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-text"
        >
          →
        </button>

        <!-- Slider Container -->
        <div
          ref="sliderRef"
          class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth py-4 -mx-6 px-6"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="project in projects"
            :key="project.id"
            class="flex-none w-80 snap-center animate-on-scroll"
          >
            <div class="bg-surface rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-40 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-muted text-sm mb-4 line-clamp-2">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-bg rounded text-xs text-muted"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-muted mt-8 text-sm">
        Scroll horizontally or use the arrows to view more projects
      </p>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
