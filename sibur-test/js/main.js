// sections limit on 256 letters
let aboutUs = document.querySelector('.about-us__description').innerText;
console.log(aboutUs.length);

let newAboutAs = aboutUs.substring(0, 750);

document.querySelector('.about-us__description').innerText = newAboutAs;



// sections limit on 512 letters
let ourProgram = document.querySelector('.our-program__description').innerText;
console.log(ourProgram.length);

let newOurProgram = ourProgram.substring(0, 890);

document.querySelector('.our-program__description').innerText = newOurProgram;



// phone number jquery-mask
let phoneInput = document.querySelector('#phone');

const mask = function() {
  jQuery(function($){
    $("#phone").mask("+7(999)999-99-99");
  });
};
mask();

phoneInput.addEventListener('focus', () => {
  if (mask) {
    document.querySelector('#phone-label').classList.add('valid');
  }
});



// change color on valid (surname input-label)
let surnameInput = document.querySelector('#surname');

surnameInput.addEventListener('blur', () => {
  document.querySelector('#surname-label').classList.add('valid');
});



// result of form-inputs (click button)
let emailInput = document.querySelector('#email'),
    aboutMeField = document.querySelector('#about'),
    buttonAboutMe = document.querySelector('.about-me__button'),
    contentWrapper = document.querySelector('.content-wrapper');
    
    buttonAboutMe.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (surnameInput || emailInput || phoneInput || aboutMe) {
        let modalWindow = document.createElement('div');
        modalWindow.classList.add('button-click-result__wrapper');
        contentWrapper.appendChild(modalWindow);

        let resultTitle = document.createElement('h5');
        resultTitle.classList.add('button-click-result__title');
        resultTitle.textContent = 'Вы ввели следующие данные';
        modalWindow.appendChild(resultTitle);

        let dataList = document.createElement('ul');
        dataList.classList.add('button-click-result__list');
        modalWindow.appendChild(dataList);

        let surname = document.createElement('li');
        surname.classList.add('button-click-result__item');
        surname.setAttribute('style', 'text-transform: capitalize');
        surname.textContent = 'ФИО: ' + surnameInput.value;
        dataList.appendChild(surname);

        let email = document.createElement('li');
        email.classList.add('button-click-result__item');
        email.textContent = 'E-mail: ' + emailInput.value;
        dataList.appendChild(email);

        let phoneNumber = document.createElement('li');
        phoneNumber.classList.add('button-click-result__item');
        phoneNumber.textContent = 'Tel: ' + phoneInput.value;
        dataList.appendChild(phoneNumber);

        let aboutMe = document.createElement('li');
        aboutMe.classList.add('button-click-result__item');
        aboutMe.textContent = 'О себе: ' + aboutMeField.value;
        dataList.appendChild(aboutMe);
      }
    });



// nav buttons on the right
let aboutUsBlock = document.querySelector('.blocks-scrolling__about-us')
    aboutUsLink = document.querySelector('#about-us-link'),
    ourProgramBlock = document.querySelector('.blocks-scrolling__program'),
    ourProgramLink = document.querySelector('#our-program-link'),
    aboutMeBlock = document.querySelector('.blocks-scrolling__about-me'),
    aboutMeLink = document.querySelector('#about-me-link');

aboutUsLink.addEventListener('click', () => {
  aboutUsLink.classList.remove('off');
  aboutUsBlock.classList.remove('off');
  ourProgramBlock.classList.add('off');
  ourProgramLink.classList.add('off');
  aboutMeBlock.classList.add('off');
  aboutMeLink.classList.add('off');
})

ourProgramLink.addEventListener('click', () => {
  aboutUsLink.classList.add('off');
  aboutUsBlock.classList.add('off');
  ourProgramBlock.classList.remove('off');
  ourProgramLink.classList.remove('off');
  aboutMeBlock.classList.add('off');
  aboutMeLink.classList.add('off');
})

aboutMeLink.addEventListener('click', () => {
  aboutUsLink.classList.add('off');
  aboutUsBlock.classList.add('off');
  ourProgramBlock.classList.add('off');
  ourProgramLink.classList.add('off');
  aboutMeBlock.classList.remove('off');
  aboutMeLink.classList.remove('off'); 
})



// email validation
const checkEmail = (email) => {

  const emailTemplate = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  let emailInput = document.querySelector('#email');

  emailInput.addEventListener('blur', () => {
    if (emailTemplate.test(emailInput.value)) {
      document.querySelector('#email-label').classList.add('valid');
    } else {
      alert('Неправильный email');
    }
  });
};

checkEmail();



// mouse auto scrolling
//-----------------------
// const scrollToAboutUs = () => {
//   window.location.hash = "about-us";
// };

// const scrollToProgram = () => {
//   window.location.hash ="our-program";
// };

// const scrollToAboutMe = () => {
//   window.location.hash = "about-me";
// };

// document.onwheel = (evt) => {
//   evt.preventDefault();
//     scrollToAboutMe();
// };

// document.onwheel = (evt) => {
//   evt.preventDefault();
//     scrollToAboutUs();
// };
