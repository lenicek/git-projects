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
function changeImage(element) {
    const mainPic = document.getElementById('mainPic');
    if (!mainPic || element.classList.contains('active')) return;

    // 1. Ztmavíme starou fotku
    mainPic.classList.add('fade');

    // 2. Počkáme 200ms (doba trvání transition v CSS)
    setTimeout(() => {
        // Změníme zdroj fotky
        mainPic.src = element.dataset.full || element.src;

        // Rozsvítíme novou fotku
        mainPic.classList.remove('fade');
    }, 200);

    // Aktualizace active třídy na miniaturách
    document.querySelectorAll('.thumbnails img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}