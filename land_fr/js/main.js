// phone number jquery-mask

$(document).ready(function() {
  $("#phone").mask("+7(999)999-99-99");
});


//
[...document.querySelectorAll('.order-cta__input_item')].forEach((item) => {
  item.addEventListener('input', () => {
    if (item.value) {
      item.setAttribute('style', 'border-left: 3px solid #8dc041');
    } else {
      item.setAttribute('style', 'border-left: 3px solid tomato');
    }   
  })
});

//
const navOpened = document.querySelector('.header__nav');
const gamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.header__nav_toggle-menu');

const openNav = () => {
  setTimeout(() => {
    navOpened.style.alignItems="start";
  }, 50);
  setTimeout(() => {
    navOpened.style.height="80px";
  }, 50);
  setTimeout(() => {
    navOpened.style.height="90px";
  }, 100);
  setTimeout(() => {
    navOpened.style.height="100px";
  }, 150);
  setTimeout(() => {
    navOpened.style.height="110px";
  }, 200);
  setTimeout(() => {
    navOpened.style.height="120px";
  }, 250);
  setTimeout(() => {
    navOpened.style.height="130px";
  }, 300);
  setTimeout(() => {
    navOpened.style.height="140px";
  }, 350);
  setTimeout(() => {
    navOpened.style.height="150px";
  }, 400);
  setTimeout(() => {
    navOpened.style.height="160px";
  }, 450);
  setTimeout(() => {
    navOpened.style.height="170px";
  }, 500);
  setTimeout(() => {
    navOpened.style.height="180px";
  }, 550);
  setTimeout(() => {
    navOpened.style.height="190px";
  }, 600); 
  setTimeout(() => {
    navOpened.style.height="200px";
  }, 700);
  setTimeout(() => {
    toggleMenu.style.display="block";
  }, 700);
};

const closeNav = () => {
  setTimeout(() => {
    toggleMenu.style.display="none";
  }, 200);
  setTimeout(() => {
    navOpened.style.height="190px";
  }, 50);
  setTimeout(() => {
    navOpened.style.height="180px";
  }, 100);
  setTimeout(() => {
    navOpened.style.height="170px";
  }, 150);
  setTimeout(() => {
    navOpened.style.height="160px";
  }, 200);
  setTimeout(() => {
    navOpened.style.height="150px";
  }, 250);
  setTimeout(() => {
    navOpened.style.height="140px";
  }, 300);
  setTimeout(() => {
    navOpened.style.height="130px";
  }, 350);
  setTimeout(() => {
    navOpened.style.height="120px";
  }, 400);
  setTimeout(() => {
    navOpened.style.height="110px";
  }, 450);
  setTimeout(() => {
    navOpened.style.height="100px";
  }, 500);
  setTimeout(() => {
    navOpened.style.height="90px";
  }, 550);
  setTimeout(() => {
    navOpened.style.height="80px";
  }, 600);
  setTimeout(() => {
    navOpened.style.height="70px";
  }, 700);
  setTimeout(() => {
    navOpened.style.alignItems="center";
  }, 700);
};



gamburger.addEventListener('click', () => {
  const navHeight = navOpened.getAttribute('style');
  if (navHeight == 'height: 70px; align-items: center;') {
    openNav();
  } else {
    closeNav();
  }
});

// Smooth scroll to anchors
const anchors = [...document.querySelectorAll('a[href*="#"]')];

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  })
})
