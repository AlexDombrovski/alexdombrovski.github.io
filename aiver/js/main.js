// callback-modal in header 
const callback = document.querySelector('.btn-callback');
const modalCallOrder = document.querySelector('.callorder');
const closeCallbackModal = document.querySelector('.callorder__close');

callback.addEventListener('click', () => {
  modalCallOrder.removeAttribute('hidden');
})

closeCallbackModal.addEventListener('click', () => {
  modalCallOrder.setAttribute('hidden', 'true');
})

// callback-modal in service section
const getConsult = document.querySelector('.service__button');
const modalConsaltOrder = document.querySelector('.consult');
const closeConsultModal = document.querySelector('.consult__close');

getConsult.addEventListener('click', () => {
  modalConsaltOrder.removeAttribute('hidden');
})

closeConsultModal.addEventListener('click', () => {
  modalConsaltOrder.setAttribute('hidden', 'true');
})

// phone number mask in modal of header
$(document).ready(function () {
  $("#callorder").mask("+7(999)999-99-99");
});

// phone number mask in first screen
$(document).ready(function () {
  $("#clientPhone").mask("+7(999)999-99-99");
});


// show tooltips

const plusButton = $('.image-modal__inside');
const tooltip = $('.mobile-station__tooltip-image');

plusButton.each(function () {
  $(this).click(function() {
    const plusButtonId = $(this).attr('id');
    
    tooltip.each(function() {
      const tooltipId = $(this).attr('data-id');
      const hidden = $(this).attr('hidden');
      
      if (!hidden) {
        $(this).attr('hidden', 'true');
        plusButton.html('&#43;');
      } 
      else if (plusButtonId === tooltipId) {
        $(this).removeAttr('hidden');
        plusButton.html('&#8722;');
      }
    })
  })
})



const minus = '&#8722;';
// plusButton.forEach((plus) => {
//   plus.addEventListener('click', () => {
//     const plusId = plus.getAttribute('id');

//     tooltips.forEach((tooltip) => {
//       const tooltipId = tooltip.getAttribute('data-id');
//       const hidden = tooltip.getAttribute('hidden');

//       if (plusId === tooltipId) {
//         tooltip.removeAttribute('hidden');
//         plus.innerHTML = minus;
//       }      
//     })
//   })
// })


// delivery slides functions
const truck = () => {
  document.querySelector('.truck').removeAttribute('hidden');
  document.querySelector('.helicopter').setAttribute('hidden', 'true');
  document.querySelector('.chassis').setAttribute('hidden', 'true');
  document.querySelector('.sledge').setAttribute('hidden', 'true');
}

const helicopter = () => {
  document.querySelector('.helicopter').removeAttribute('hidden');
  document.querySelector('.truck').setAttribute('hidden', 'true');
  document.querySelector('.chassis').setAttribute('hidden', 'true');
  document.querySelector('.sledge').setAttribute('hidden', 'true');
};

const chassis = () => {
  document.querySelector('.chassis').removeAttribute('hidden');
  document.querySelector('.truck').setAttribute('hidden', 'true');
  document.querySelector('.helicopter').setAttribute('hidden', 'true');
  document.querySelector('.sledge').setAttribute('hidden', 'true');
};

const sledge = () => {
  document.querySelector('.sledge').removeAttribute('hidden');
  document.querySelector('.truck').setAttribute('hidden', 'true');
  document.querySelector('.helicopter').setAttribute('hidden', 'true');
  document.querySelector('.chassis').setAttribute('hidden', 'true');
};

// fast-construction section
const imgLeft = document.querySelector('.fast-construction__image-left');
const imgRight = document.querySelector('.fast-construction__image-right');

const showFullFotos = () => {
  if (imgRight.style.width <= '460px') {
    imgRight.style.width = '920px';
    imgLeft.style.width = '0';
  }
  else {
    imgLeft.style.width = '920px';
    imgRight.style.width = '0';
  }
};

// slick slider: Clients
$('.clients__slyder').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// slick slider: Brief-recommendations
$('.recommend__slyder').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// open full text
const textArea = document.querySelector('.recommend__desc-text');

const openText = () => {
  textArea.classList.toggle('max');
};

// first modal window for small screen
const modalWindow = () => {
  document.querySelector('.first-screen__box-calculate').setAttribute('style', 'display: block');
};

const closeModal = () => {
  document.querySelector('.first-screen__box-calculate').removeAttribute('style');
};
