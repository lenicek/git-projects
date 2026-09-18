document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Kód pro navigaci ---
  const toggleBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggleBtn && nav) {
    nav.hidden = true;
    toggleBtn.setAttribute('aria-expanded', false);

    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
      nav.hidden = expanded;
      toggleBtn.textContent = expanded ? '☰' : '×';
    });
  } else {
    console.warn('Navigation elements not found');
  }

  // --- 2. Inicializace Swiperu (už není vnořená, běží v jednom bloku) ---
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1, 
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Breakpointy pro různé šířky obrazovky
    breakpoints: {
      640: { 
        slidesPerView: 2,
        spaceBetween: 20 
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 30 
      },
      1400: { 
        slidesPerView: 4,
        spaceBetween: 30 
      }
    }
  });
}); 