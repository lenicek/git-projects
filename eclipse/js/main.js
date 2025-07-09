
  const thumbnails = document.querySelectorAll('.carousel-thumbs .thumb');
  const mainImage = document.getElementById('mainImage');
  const prevBtn = document.querySelector('.nav.prev');
  const nextBtn = document.querySelector('.nav.next');

  let currentIndex = 0;

  function updateMainImage(index) {
    currentIndex = index;
    mainImage.src = thumbnails[currentIndex].src;

    // Remove active class from all
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    // Add active class to current
    thumbnails[currentIndex].classList.add('active');
  }

  // Thumbnail click
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateMainImage(index));
  });

  // Prev button click
  prevBtn.addEventListener('click', () => {
    let newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(newIndex);
  });

  // Next button click
  nextBtn.addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(newIndex);
  });

  // Init
  updateMainImage(0);


  // Swipe functionality 

  const carouselMain = document.querySelector('.carousel-main');
let startX = 0;
let endX = 0;

carouselMain.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselMain.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50; // Minimum distance for swipe
  const diff = startX - endX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swiped left — show next
      document.querySelector('.nav.next').click();
    } else {
      // Swiped right — show previous
      document.querySelector('.nav.prev').click();
    }
  }
}

  // CONTACT form
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const consent = form.consent.checked;

    // Clear previous messages
    let formMsg = document.querySelector(".form-message");
    if (!formMsg) {
      formMsg = document.createElement("div");
      formMsg.className = "form-message";
      form.insertAdjacentElement("beforeend", formMsg);
    }

    let errors = [];

    if (!name) errors.push("Please enter your name.");
    if (!email) {
      errors.push("Please enter your email.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Please enter a valid email.");
    }

    if (!message) errors.push("Please enter your message.");
    if (!consent) errors.push("You must agree to data processing.");

    if (errors.length > 0) {
      formMsg.innerHTML = errors.join("<br>");
      formMsg.style.color = "#b10000";
    } else {
      formMsg.innerHTML = "Message sent successfully.";
      formMsg.style.color = "#2ca8a3";
      form.reset();
    }
  });
});

  // hamburger toogle

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav-wrapper');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });