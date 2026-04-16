# KODA.md — Контекст проекта: Портфолио Евгения Бухарина

## 📋 Обзор проекта

**Назначение:** Одностраничный сайт-визитка (лендинг) для веб-разработчика с минималистичным, строгим дизайном.

**Тип проекта:** Frontend (HTML/CSS) — статический сайт без серверной части.

**Основные технологии:**
- **HTML5** — семантическая разметка
- **Tailwind CSS v3** — утилитарная стилизация (локальная установка)
- **PostCSS + Autoprefixer** — обработка CSS
- **Vanilla CSS** — scroll-driven анимации, CSS Scroll Snap
- **Без JavaScript** для переключения темы (только CSS `prefers-color-scheme`)

---

## 📁 Структура проекта

```
portfolio/
├── index.html              # Главная страница (разметка)
├── src/
│   └── input.css           # Исходный CSS с директивами Tailwind
├── dist/
│   └── output.css          # Скомпилированный CSS (генерируется)
├── tailwind.config.js      # Конфигурация Tailwind CSS
├── postcss.config.js       # Конфигурация PostCSS
├── package.json            # Зависимости и скрипты npm
├── README.md               # Документация для пользователя
└── KODA.md                 # Этот файл — контекст проекта
```

---

## 🛠 Сборка и запуск

### Установка зависимостей

```bash
npm install
```

### Команды npm

| Команда | Описание |
|---------|----------|
| `npm run build` | Собрать CSS для продакшена |
| `npm run build:css` | Однократная сборка CSS |
| `npm run watch` | Сборка CSS в режиме watching (разработка) |
| `npm run watch:css` | Алиас для watch |

### Запуск локального сервера

```bash
# Python 3
python3 -m http.server 8080

# Затем открыть http://localhost:8080
```

### Требования к окружению

- **Node.js** v16+ (для работы Tailwind CSS CLI)
- **npm** v8+ (поставляется с Node.js)
- **Браузер** с поддержкой современных CSS-функций

---

## 🎨 Архитектура и дизайн

### Цветовая палитра

**Светлая тема (по умолчанию):**
| Переменная | Значение | Назначение |
|------------|----------|------------|
| `--bg-primary` | `#ffffff` | Основной фон |
| `--bg-secondary` | `#f8f9fa` | Вторичный фон (карточки, секции) |
| `--text-primary` | `#1a1a1a` | Основной текст |
| `--text-secondary` | `#4b5563` | Вторичный текст |
| `--accent` | `#3b82f6` | Акцентный цвет (синий) |
| `--accent-hover` | `#2563eb` | Акцент при наведении |

**Тёмная тема (автоматически):**
| Переменная | Значение |
|------------|----------|
| `--bg-primary` | `#111827` |
| `--bg-secondary` | `#1f2937` |
| `--text-primary` | `#f9fafb` |
| `--text-secondary` | `#9ca3af` |
| `--accent` | `#60a5fa` |
| `--accent-hover` | `#3b82f6` |

### Шрифты

- **Основной:** `system-ui`, `-apple-system`, `Inter`, sans-serif
- **Моноширинный:** `monospace` (для кода, если потребуется)

### Адаптивность

- **Mobile-first** подход
- **Брейкпоинты Tailwind:**
  - `sm:` — 640px+
  - `md:` — 768px+
  - `lg:` — 1024px+
  - `xl:` — 1280px+

---

## 🧩 Структура страницы

### 1. Header (фиксированная навигация)
- Логотип: инициалы «JD» с градиентом
- Навигационные якоря: Обо мне, Портфолио, Контакты
- Фиксированное позиционирование с blur-эффектом
- Мобильное меню (кнопка, требует JS для функциональности)

### 2. Hero-секция
- Приветствие и имя
- Должность: Fullstack Developer
- Краткий теглайн о специализации
- Две CTA-кнопки: «Связаться», «Смотреть работы»
- Parallax фон с радиальными градиентами
- Индикатор прокрутки (bounce-анимация)

### 3. Обо мне
- Двухколоночная сетка (на десктопе)
- Аватар/изображение слева
- Биография (3 абзаца)
- Ключевые навыки (12 тегов)

### 4. Портфолио (слайдер)
- Горизонтальный скролл с CSS Scroll Snap
- 4 карточки проектов с:
  - Названием проекта
  - Описанием
  - Технологическим стеком
  - Ссылками на демо и GitHub
- Адаптивная ширина слайдов

### 5. Контакты
- Три карточки: Email, Telegram, GitHub
- Дополнительные ссылки: LinkedIn, Резюме, Блог

### 6. Footer
- Копирайт
- Повтор навигации

---

## ✨ Scroll-driven анимации

### Реализованные анимации

| Класс | Эффект | Parameters |
|-------|--------|------------|
| `.animate-fade-up` | Появление с движением вверх | `entry 10% cover 30%` |
| `.animate-scale-in` | Увеличение масштаба | `entry 0% cover 40%` |
| `.animate-slide-left` | Выезд слева | `entry 10% cover 25%` |
| `.read-progress` | Прогресс-бар чтения | `scroll(root)` |
| `.hero-bg` | Parallax фона | `scroll()` |

### Keyframes

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slide-from-left {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes progress {
  to { width: 100%; }
}

@keyframes parallax {
  to { transform: translateY(20%); }
}
```

### Поддержка браузеров

| Функция | Chrome | Edge | Safari | Firefox |
|---------|--------|------|--------|---------|
| `animation-timeline` | 115+ | 115+ | 17+ | ❌ |
| CSS Scroll Snap | ✅ | ✅ | ✅ | ✅ |

**Graceful degradation:** В браузерах без поддержки scroll-driven анимаций они просто не применяются — контент остаётся видимым.

---

## 📱 Слайдер портфолио (CSS Scroll Snap)

### Реализация

```css
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
}

.slider::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .slide { flex: 0 0 50%; }
}

@media (min-width: 1024px) {
  .slide { flex: 0 0 33.333%; }
}
```

### Преимущества

- ✅ Работает без JavaScript
- ✅ Нативная поддержка свайпов на мобильных
- ✅ Плавное «прилипание» слайдов
- ✅ Адаптивная ширина слайдов
- ✅ Graceful degradation в старых браузерах

---

## 🎨 Переключение темы

### Реализация (только CSS)

```css
@layer base {
  :root {
    --bg-primary: #ffffff;
    --text-primary: #1a1a1a;
    /* ... другие переменные ... */
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-primary: #111827;
      --text-primary: #f9fafb;
      /* ... тёмные значения ... */
    }
  }
}
```

### Преимущества

- ✅ Нет JavaScript — мгновенное переключение
- ✅ Автоматическая адаптация под настройки ОС
- ✅ Отсутствие FOUC (flash of unstyled content)
- ✅ Меньший размер страницы

### Ограничения

- ❌ Нет ручного переключателя
- ❌ Нельзя переопределить системную настройку

---

## 📦 Зависимости

### Dev Dependencies

| Пакет | Версия | Назначение |
|-------|--------|------------|
| `tailwindcss` | ^3.4.19 | Утилитарный CSS-фреймворк |
| `postcss` | ^8.5.10 | Обработчик CSS |
| `autoprefixer` | ^10.5.0 | Автодобавление вендорных префиксов |

### Требования

- **Все пакеты устанавливаются локально** через npm
- **CDN не используются** — офлайн-доступность
- **Чистый CSS/JS** — без jQuery и других библиотек

---

## 📝 Правила разработки

### Стиль кодирования

1. **HTML:**
   - Семантическая разметка (`<section>`, `<nav>`, `<header>`, `<footer>`)
   - `lang="ru"` для русского контента
   - accessibility-атрибуты (`aria-label` для кнопок)

2. **CSS:**
   - CSS-переменные для темизации
   - `@layer` для управления специфичностью
   - Mobile-first медиа-запросы

3. **Tailwind:**
   - Утилитарные классы для layout и spacing
   - Кастомные компоненты через `@layer components`
   - Избегать произвольных значений `[]` где возможно

### Структура коммитов (рекомендуемая)

```
feat: добавить секцию портфолио
fix: исправить анимацию fade-up на мобильных
style: обновить цветовую палитру
docs: обновить README.md
```

### Контрибуция

1. fork репозитория
2. создать ветку (`git checkout -b feature/amazing-feature`)
3. закоммитить изменения (`git commit -m 'feat: добавить amazing-feature'`)
4. запушить (`git push origin feature/amazing-feature`)
5. открыть Pull Request

---

## 🔧 Кастомизация

### Изменение цветовой палитры

Отредактируйте CSS-переменные в `src/input.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a1a;
  --text-secondary: #4b5563;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
}
```

### Изменение контента

Отредактируйте `index.html`:
- Имя и должность в Hero-секции
- Биография в разделе «Обо мне»
- Навыки (теги `.skill-tag`)
- Проекты в портфолио
- Контактная информация

### Добавление новых анимаций

Добавьте keyframes и классы в `src/input.css`:

```css
@keyframes custom-animation {
  from { /* начальное состояние */ }
  to { /* конечное состояние */ }
}

.animate-custom {
  animation: custom-animation linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;
}
```

---

## 🌐 Browser Support

| Функция | Поддержка |
|---------|-----------|
| CSS Scroll Snap | Все современные браузеры |
| CSS Scroll-driven Animations | Chrome 115+, Edge 115+, Safari 17+ |
| `prefers-color-scheme` | Все современные браузеры |
| CSS Grid | Все современные браузеры |
| CSS Custom Properties | Все современные браузеры |

**Минимальная версия:** Браузеры с поддержкой CSS Grid и Custom Properties (2020+)

---

## 📄 Лицензия

MIT
