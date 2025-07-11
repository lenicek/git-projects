document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (!toggleBtn || !nav) {
    console.warn('Navigation elements not found');
    return;
  }

  nav.hidden = true;
  toggleBtn.setAttribute('aria-expanded', false);

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);
    nav.hidden = expanded;
    toggleBtn.textContent = expanded ? '☰' : '×';
  });
});