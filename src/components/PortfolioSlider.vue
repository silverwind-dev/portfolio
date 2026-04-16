<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        My Portfolio
      </h2>
      <div class="relative">
        <div class="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="flex-shrink-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            :style="{ transform: `translateY(${scrollY * 0.1 * (index % 5)}px)` }"
          >
            <div class="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span class="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tech, i) in project.technologies"
                  :key="i"
                  class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
              <a
                href="#"
                class="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration and admin dashboard.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative tool for teams to manage projects and tasks efficiently.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material UI']
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with beautiful data visualizations.',
    technologies: ['Svelte', 'D3.js', 'OpenWeather API']
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills with smooth animations.',
    technologies: ['Vue.js', 'GSAP', 'Tailwind CSS']
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app with file sharing and emoji support.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express']
  },
  {
    title: 'Blog Platform',
    description: 'Content management system for writers and bloggers with SEO optimization.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS']
  }
]);

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Cleanup event listener
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>