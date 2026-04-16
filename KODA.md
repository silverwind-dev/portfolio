# Техническое задание: Лендинг веб-разработчика

## Общая информация

Одностраничный сайт-визитка (лендинг) для веб-разработчика. Дизайн минималистичный, строгий, профессиональный.

## Технологии

- **HTML5** — семантическая разметка
- **Tailwind CSS** — стилизация (локальная установка через npm, без CDN)
- **Vanilla JavaScript** — чистый JS без jQuery и других библиотек (опционально, только если нужен для других задач)
- **Без внешних библиотек** для слайдера и анимаций
- **Без JavaScript для переключения темы** — только CSS `prefers-color-scheme`

### Требования к зависимостям

- **Все пакеты устанавливаются локально** через npm/yarn/pnpm
- **CDN не используются** — все ресурсы должны быть доступны офлайн
- **Чистый JavaScript (Vanilla JS)** — никаких jQuery, Zepto или других библиотек-обёрток
- Tailwind CSS собирается через CLI или PostCSS с локальной установкой

## Структура страницы

### 1. Header / Навигация
- Логотип (имя/инициалы разработчика)
- Навигационные якоря: Обо мне, Портфолио, Контакты
- Переключение темы автоматически (без видимого переключателя)

### 2. Hero-секция (Главный экран)
- Краткое приветствие
- Имя и фамилия
- Должность (Web Developer / Fullstack Developer)
- Краткий теглайн (1-2 предложения о специализации)
- Кнопка CTA: «Связаться» или «Смотреть работы»

### 3. Обо мне
- Краткая биография (3-5 предложений)
- Ключевые навыки (списком или тегами)
- Опционально: фото/аватар

### 4. Портфолио (слайдер карточек)
- Горизонтальный скролл с проектами
- Каждая карточка содержит:
  - Название проекта
  - Краткое описание
  - Технологии (стеки)
  - Ссылки: демо / репозиторий
  - Изображение проекта (опционально)

### 5. Контакты
- Email
- Телефон (опционально)
- Социальные сети: GitHub, LinkedIn, Telegram
- Форма обратной связи (опционально, можно просто ссылки)

### 6. Footer
- Копирайт
- Повтор навигации (опционально)

---

## Решения для слайдера портфолио

### Вариант 1: CSS Scroll Snap (рекомендуемый)

```css
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.slide {
  flex: 0 0 100%; /* или 80% для показа части следующей карточки */
  scroll-snap-align: start;
}
```

**Преимущества:**
- Нативная поддержка во всех современных браузерах
- Плавная прокрутка с «прилипанием» слайдов
- Работает без JavaScript
- Поддержка свайпов на мобильных

**Дополнительно:**
- Скрыть скроллбар: `scrollbar-width: none` (Firefox) + `::-webkit-scrollbar { display: none; }`
- Индикаторы-точки через JS или CSS counters

### Вариант 2: CSS Scroll-Driven Animations + horizontal scroll

Использование `animation-timeline: scroll()` для анимации прогресса слайдера.

### Вариант 3: Grid с overflow

```css
.slider {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
}
```

---

## Решения для scroll-driven анимаций

### 1. Fade-in при скролле

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-on-scroll {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;
}
```

**Эффект:** Элемент плавно появляется при попадании в область видимости.

### 2. Parallax для фона Hero-секции

```css
.hero-bg {
  animation: parallax linear;
  animation-timeline: scroll();
}

@keyframes parallax {
  to { transform: translateY(50%); }
}
```

### 3. Прогресс-бар чтения страницы

```css
.read-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: accent-color;
  animation: progress linear;
  animation-timeline: scroll(root);
}

@keyframes progress {
  to { width: 100%; }
}
```

### 4. Scale-эффект для карточек портфолио

```css
@keyframes scale-up {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.portfolio-card {
  animation: scale-up linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```

### 5. Slide-in с боков для секций

```css
@keyframes slide-from-left {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.section {
  animation: slide-from-left linear;
  animation-timeline: view();
  animation-range: entry 10% cover 25%;
}
```

---

## Переключение темы (светлая/тёмная)

**Реализация:** Только CSS через `prefers-color-scheme`. JavaScript не используется.

```css
@layer base {
  :root {
    --bg: #ffffff;
    --text: #1a1a1a;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1a1a1a;
      --text: #ffffff;
    }
  }
}
```

**Преимущества:**
- Нет JavaScript — тема переключается мгновенно
- Автоматически адаптируется под настройки ОС
- Отсутствие FOUC (flash of unstyled content)
- Меньший размер страницы

**В Tailwind CSS:**
Использовать модификатор `dark:` с `class="dark"` на `<html>` не требуется.  
Вместо этого применять `[@media_(prefers-color-scheme:dark)]:` произвольные значения или настраивать `tailwind.config.js` для работы с `prefers-color-scheme`.

---

## Цветовая палитра (строгая, профессиональная)

### Светлая тема
- Фон: `#ffffff` / `#f8f9fa`
- Текст: `#1a1a1a` / `#2d3748`
- Акцент: `#3b82f6` (синий) или `#6366f1` (индиго)
- Вторичный: `#6b7280` (серый)

### Тёмная тема
- Фон: `#1a1a1a` / `#111827`
- Текст: `#f9fafb` / `#e5e7eb`
- Акцент: `#60a5fa` (светло-синий)
- Вторичный: `#9ca3af` (серый)

---

## Шрифты

- **Основной:** Inter / system-ui / -apple-system
- **Моноширинный (для кода):** JetBrains Mono / Fira Code / monospace

---

## Адаптивность

- Mobile-first подход
- Брейкпоинты Tailwind: `sm:`, `md:`, `lg:`, `xl:`
- Слайдер: на мобильных — 1 слайд, на десктопе — можно 2-3 с наложением

---

## Дополнительные улучшения (опционально)

1. **Плавный скролл к якорям:** `html { scroll-behavior: smooth; }`
2. **Индикатор текущей секции** в навигации (JS)
3. **Микро-анимации на кнопках** (hover, active)
4. **SEO-мета-теги** (title, description, Open Graph)
5. **Favicon**

---

## Структура файлов

```
project/
├── index.html
├── styles.css (опционально, если нужны кастомные стили)
└── script.js (опционально, для переключения темы)
```

Или всё в одном `index.html` для максимальной простоты.

---

## Browser Support

- CSS Scroll Snap: все современные браузеры
- CSS Scroll-driven Animations: Chrome 115+, Edge 115+, Safari 17+
- Для старых браузеров — graceful degradation (анимации просто не работают)
