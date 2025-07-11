document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  // Start with collapsed nav
  nav.hidden = true;
  toggleBtn.setAttribute('aria-expanded', false);

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);
    nav.hidden = expanded;

    // Update button icon
    toggleBtn.innerHTML = expanded ? '&#9776;' : '&times;'; // ☰ or ✖
  });
});