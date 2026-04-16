# ИНСТРУКЦИЯ ПО ЗАПУСКУ

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

Откройте http://localhost:5173

## Сборка для продакшна

```bash
npm run build
```

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Запушьте код:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/ваш-логин/portfolio.git
   git push -u origin main
   ```
3. В настройках репозитория включите GitHub Pages (source: main branch, root folder)
4. Сайт будет доступен по адресу: https://ваш-логин.github.io/portfolio/

## Что менять

Все плейсхолдеры находятся в `src/components/`:
- `HeroSection.vue` — имя, должность, описание
- `AboutSection.vue` — биография и навыки
- `ProjectsSlider.vue` — массив проектов
- `ContactSection.vue` — контактные данные
