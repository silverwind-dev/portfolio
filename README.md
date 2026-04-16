# Portfolio Website

A professional portfolio landing page for a web developer built with Vue.js, Vite, and Tailwind CSS.

## Features

- Single-page application with smooth scrolling
- Portfolio project slider with scroll-driven animations
- Responsive design using Tailwind CSS
- Built with Vue 3 and Vite
- All resources stored locally (no CDN)
- Deployable to GitHub Pages

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select the `main` branch and `/ (root)` folder
5. Click Save

The site will be available at `https://<username>.github.io/<repository>`

## Technologies

- Vue.js 3
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Project Structure

```
portfolio/
├── dist/               # Production build
├── public/             # Static assets
├── src/
│   ├── components/     # Vue components
│   ├── App.vue         # Root component
│   ├── main.js         # Application entry point
│   └── style.css       # Tailwind imports
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.cjs  # PostCSS configuration
├── vite.config.js      # Vite configuration
├── package.json
└── README.md
```