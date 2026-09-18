const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
	const setMenuState = (isOpen) => {
		mainNav.hidden = !isOpen;
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.classList.toggle('is-open', isOpen);
	};

	menuToggle.addEventListener('click', () => {
		setMenuState(mainNav.hidden);
	});

	mainNav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => setMenuState(false));
	});
}
