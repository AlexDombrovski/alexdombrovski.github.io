let nameInput = document.querySelector('.name'),
    surnameInput = document.querySelector('.surname'),
    gender = document.querySelectorAll('.label-of'),
    genderInput = document.querySelectorAll('.genderinput'),
    buttonToggle = document.querySelector('.toggle'),
    buttonToggleOff = document.querySelector('.toggle-of'),
    buttonPay = document.querySelector('.new-account__button'),
    dateBirth = document.querySelector('#booking-dates'),
    emailInput = document.querySelector('#email'),
    passInput = document.querySelector('#pass'),
    newAccountBox = document.querySelector('.new-account-box'),
    newAcc = document.querySelector('.new-acc');


  

// choice of a gender
for(let i = 0; i < gender.length; i++) {
  gender[i].addEventListener('click', function(evt) {
    gender[i].classList.toggle('label-on');
  })
}


// datepicker for registration page
$(function() {
  $('#booking-dates').daterangepicker({
    opens: 'right',
    locale: {
      format: 'DD.MM.YYYY'
    }
  });
});

// choice of special offer
buttonToggle.addEventListener('click', function (evt) {
    buttonToggleOff.classList.toggle('toggle-on');
});


// result (click on buttonPay)
buttonPay.addEventListener('click', function (evt) {
  evt.preventDefault();
      
  if (nameInput || surnameInput || dateBirth || emailInput || passInput) {
    console.log(nameInput.value, surnameInput.value);
    console.log(dateBirth.value);
    console.log(emailInput.value);
    console.log(passInput.value);
    newAccountBox.classList.add('new-account-box-off');

    var divMessage = document.createElement('div');
        divMessage.classList.add('message-result');
        newAcc.appendChild(divMessage);
        divMessage.classList.toggle('message-result-on');

    var messageTitle = document.createElement('div');
        messageTitle.classList.add('message-result__title');
        messageTitle.textContent = 'Регистрационные данные';
        divMessage.appendChild(messageTitle);
        
    var name = document.createElement('div');
        name.classList.add('message-result__name');
        name.textContent = 'Имя: ' + nameInput.value;
        divMessage.appendChild(name);

    var surName = document.createElement('div');
        surName.classList.add('message-result__name');
        surName.textContent = 'Фамилия: ' + surnameInput.value;
        divMessage.appendChild(surName);

    var birthDay = document.createElement('div');
        birthDay.classList.add('message-result__name');
        birthDay.textContent = 'Дата рождения: date picker under repair :)';
        divMessage.appendChild(birthDay);

    var email = document.createElement('div');
        email.classList.add('message-result__name');
        email.textContent = 'Email: ' + emailInput.value;
        divMessage.appendChild(email);

    var pass = document.createElement('div');
        pass.classList.add('message-result__name');
        pass.textContent = 'Пароль: ' + passInput.value;
        divMessage.appendChild(pass);
  }
});