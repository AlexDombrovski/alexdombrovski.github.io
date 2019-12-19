// first-screen__slyder
let slides = document.querySelectorAll('.first-screen__slyder-slyder');
let dots = document.querySelectorAll('.dot-item');

let slideIndex = 1;

const plusSlides = (n) => {
  showSlides(slideIndex += n);
};

const currentSlide = (n) => {
  showSlides(slideIndex = n);
};

const showSlides = (n) => {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

showSlides(slideIndex);

// scrolling
let arrowTop = document.querySelector('.up-arrow');
let scrolled;
let timer;

arrowTop.addEventListener('click', () => {
  scrolled = window.pageYOffset;
  scrollToTop();
});

const scrollToTop = () => {
  if (scrolled > 0) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled - 60;
    timer = setTimeout(scrollToTop, 60);
  }
  else {
    clearTimeout(timer);
    window.scrollTo(0, 0);
  }
};

// hamburger button menu
let hamburger = document.querySelector('.navbar__wrapper');
let menuList = document.querySelector('.navbar__list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('opened');
  menuList.classList.toggle('hidden');
});