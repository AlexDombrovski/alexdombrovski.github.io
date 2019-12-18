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


let latestNews = document.querySelectorAll('.last-news__wrapper');
let left = 0;

const slyderNews = () => {
  left = left - 128;
  if (left < 512) {
    left = 0;
  }
  latestNews.style.left = left + 'px';
};