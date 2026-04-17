const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.remove('opacity-0', 'invisible');
    mobileMenu.classList.add('opacity-100', 'visible');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.remove('opacity-100', 'visible');
    mobileMenu.classList.add('opacity-0', 'invisible');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

mobileMenuBtn.addEventListener('click', toggleMenu);

// Закрыть меню при клике на ссылку
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

// Закрыть меню при клике вне его
document.addEventListener('click', (e) => {
  if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    toggleMenu();
  }
});

const portfolioSlider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-btn-prev');
const nextBtn = document.querySelector('.slider-btn-next');

const scrollSlider = (direction) => {
  if (!portfolioSlider) return;
  const amount = portfolioSlider.clientWidth * 0.8;
  portfolioSlider.scrollBy({ left: direction * amount, behavior: 'smooth' });
};

if (prevBtn) {
  prevBtn.addEventListener('click', () => scrollSlider(-1));
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => scrollSlider(1));
}