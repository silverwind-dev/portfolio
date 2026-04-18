/**
 * ============================================
 * Mobile Menu Toggle Functionality
 * Управление мобильным меню навигации
 * ============================================
 */

// Получаем ссылки на элементы мобильного меню
const mobileMenuBtn = document.getElementById('mobile-menu-btn'); // Кнопка открытия/закрытия меню
const mobileMenu = document.getElementById('mobile-menu'); // Контейнер мобильного меню
const menuIcon = document.getElementById('menu-icon'); // Иконка "гамбургер" (открытое меню)
const closeIcon = document.getElementById('close-icon'); // Иконка "закрыть" (активное меню)
const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link'); // Все ссылки внутри мобильного меню

// Состояние меню: false = закрыто, true = открыто
let isMenuOpen = false;

/**
 * Функция переключения состояния мобильного меню
 * Переключает видимость меню и иконок (гамбургер ↔ крестик)
 */
function toggleMenu() {
  isMenuOpen = !isMenuOpen; // Инвертируем состояние

  if (isMenuOpen) {
    // Открываем меню
    mobileMenu.classList.remove('opacity-0', 'invisible'); // Убираем скрытие
    mobileMenu.classList.add('opacity-100', 'visible'); // Делаем видимым
    menuIcon.classList.add('hidden'); // Скрываем иконку гамбургера
    closeIcon.classList.remove('hidden'); // Показываем иконку закрытия
  } else {
    // Закрываем меню
    mobileMenu.classList.remove('opacity-100', 'visible'); // Убираем видимость
    mobileMenu.classList.add('opacity-0', 'invisible'); // Скрываем меню
    menuIcon.classList.remove('hidden'); // Показываем иконку гамбургера
    closeIcon.classList.add('hidden'); // Скрываем иконку закрытия
  }
}

// Привязываем обработчик клика к кнопке меню
mobileMenuBtn.addEventListener('click', toggleMenu);

/**
 * Закрываем мобильное меню при клике на любую ссылку внутри него
 * Это улучшает UX — пользователь сразу видит целевую секцию
 */
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

/**
 * Закрываем мобильное меню при клике вне его области
 * Позволяет закрыть меню кликом в любом месте страницы
 */
document.addEventListener('click', (e) => {
  // Проверяем: меню открыто И клик был не по меню И клик был не по кнопке меню
  if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    toggleMenu();
  }
});

/**
 * ============================================
 * Portfolio Slider Navigation
 * Управление слайдером портфолио
 * ============================================
 */

// Получаем ссылки на элементы слайдера
const portfolioSlider = document.querySelector('.slider'); // Контейнер слайдера
const prevBtn = document.querySelector('.slider-btn-prev'); // Кнопка "назад"
const nextBtn = document.querySelector('.slider-btn-next'); // Кнопка "вперёд"

/**
 * Функция прокрутки слайдера в заданном направлении
 * @param {number} direction - Направление: -1 (влево) или 1 (вправо)
 */
const scrollSlider = (direction) => {
  if (!portfolioSlider) return; // Защита: если слайдер не найден, выходим
  
  // Прокручиваем на 80% ширины слайдера (для плавного перехода между слайдами)
  const amount = portfolioSlider.clientWidth * 0.8;
  portfolioSlider.scrollBy({ 
    left: direction * amount, // Отрицательное значение = влево, положительное = вправо
    behavior: 'smooth' // Плавная анимация прокрутки
  });
};

// Привязываем обработчики кнопок навигации слайдера
if (prevBtn) {
  prevBtn.addEventListener('click', () => scrollSlider(-1)); // Прокрутка влево
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => scrollSlider(1)); // Прокрутка вправо
}

/**
 * ============================================
 * Dynamic Year Update
 * Автоматическое обновление года в футере
 * ============================================
 */

// Получаем элемент с классом js-year и устанавливаем текущий год
// Это позволяет избегать ручного обновления года каждый год
document.querySelector('.js-year').textContent = new Date().getFullYear();
