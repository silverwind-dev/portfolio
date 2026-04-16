# Портфолио Веб-Разработчика

Одностраничный лендинг портфолио, созданный с помощью Vue 3 + Vite + Tailwind CSS.

## 🚀 Быстрый старт

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/ваш-логин/portfolio.git

# Перейти в директорию проекта
cd portfolio

# Установить зависимости
npm install
```

### Разработка

```bash
# Запустить локальный сервер разработки
npm run dev
```

Откройте http://localhost:5173 в браузере.

### Сборка

```bash
# Создать продакшн-сборку
npm run build
```

Файлы будут созданы в папке `dist/`.

### Предпросмотр сборки

```bash
# Запустить локальный сервер для просмотра продакшн-сборки
npm run preview
```

## 📁 Структура проекта

```
portfolio/
├── public/              # Статические файлы (favicon, images)
├── src/
│   ├── assets/          # Локальные ресурсы
│   ├── components/      # Vue компоненты
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSlider.vue
│   │   └── ContactSection.vue
│   ├── App.vue          # Корневой компонент
│   ├── main.js          # Точка входа
│   └── style.css        # Глобальные стили
├── index.html           # HTML шаблон
├── vite.config.js       # Конфигурация Vite
└── package.json         # Зависимости проекта
```

## 🎨 Настройка контента

Откройте компоненты в папке `src/components/` и замените плейсхолдеры на ваши данные:

- **HeroSection.vue** — имя, должность, описание
- **AboutSection.vue** — биография и навыки
- **ProjectsSlider.vue** — список проектов (массив `projects`)
- **ContactSection.vue** — контактная информация

## 🌐 Деплой на GitHub Pages

### 1. Создайте репозиторий на GitHub

```bash
# Инициализируйте git (если ещё не сделано)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit"

# Добавьте удалённый репозиторий
git remote add origin https://github.com/ваш-логин/portfolio.git

# Запушьте код
git push -u origin main
```

### 2. Настройте GitHub Pages

1. Перейдите в настройки репозитория на GitHub
2. Найдите раздел "Pages"
3. В поле "Source" выберите branch `main` и папку `/ (root)`
4. Нажмите "Save"

### 3. Обновите базовый путь (если нужно)

Если ваш репозиторий называется не `portfolio`, а что-то другое, обновите `vite.config.js`:

```js
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/имя-вашего-репозитория/'
})
```

### 4. Задеплойте

```bash
# Создайте продакшн-сборку
npm run build

# Запушьте dist-папку (опционально, GitHub Pages берёт из main)
```

После деплоя ваш сайт будет доступен по адресу:
`https://ваш-логин.github.io/portfolio/`

## 🛠 Технологии

- **Vue 3** — фреймворк для UI
- **Vite** — сборщик проекта
- **Tailwind CSS** — утилитарные стили
- **GitHub Pages** — хостинг

## 📝 License

MIT License. Свободно используйте и модифицируйте.
