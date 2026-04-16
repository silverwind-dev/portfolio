<script setup>
const contactInfo = [
  {
    label: 'Email',
    value: 'hello@developer.ru',
    href: 'mailto:hello@developer.ru'
  },
  {
    label: 'Telegram',
    value: '@developer',
    href: 'https://t.me/developer'
  },
  {
    label: 'GitHub',
    value: 'github.com/developer',
    href: 'https://github.com/developer'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/developer',
    href: 'https://linkedin.com/in/developer'
  }
];
</script>

<template>
  <section id="contact" class="min-h-screen flex items-center px-6 py-24">
    <div class="max-w-4xl mx-auto w-full text-center">
      <h2 class="text-3xl font-bold mb-12 animate-on-scroll">
        Get In Touch
      </h2>

      <p class="text-muted text-lg mb-12 animate-on-scroll">
        Открыт к новым проектам и возможностям. Напишите мне, и мы обсудим,
        как можем работать вместе.
      </p>

      <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-on-scroll">
        <a
          v-for="item in contactInfo"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted hover:text-text transition-colors"
        >
          <span class="text-sm text-muted block mb-1">{{ item.label }}</span>
          <span class="text-lg">{{ item.value }}</span>
        </a>
      </div>

      <a
        href="mailto:hello@developer.ru"
        class="inline-block px-8 py-3 bg-surface border border-muted rounded hover:border-text transition-colors animate-on-scroll"
      >
        Say Hello
      </a>

      <footer class="mt-24 pt-8 border-t border-surface animate-on-scroll">
        <p class="text-muted text-sm">
          © 2025 Иван Иванов. Все права защищены.
        </p>
      </footer>
    </div>
  </section>
</template>
