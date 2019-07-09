// Блок "Checkbox Buttons"
let labels = document.querySelectorAll('.ch-boxes'),
    checkBoxes = document.querySelectorAll('.checkboxes'),
    avail = document.querySelectorAll('.avail'),
    availabilityCheckboxes = document.querySelectorAll('.availability__checkboxes');
    
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function(evt) {
    checkBoxes[i].classList.toggle('checkboxes__checked');
  });
}

for (let i = 0; i < avail.length; i++) {
  avail[i].addEventListener('click', function() {
    availabilityCheckboxes[i].classList.toggle('availability__checkboxes-checked');
  });
}

// Блок "дополнительные удобства":

let moreConveniencesArrow = document.querySelector('.more-conveniences__arrow'),
    moreConveniencesList = document.querySelector('.more-conveniences__list'),
    conveniencesLabel = document.querySelectorAll('.conveniences__label'),
    moreConveniencesBox = document.querySelectorAll('.more-conveniences__box');

// открытие блока
    moreConveniencesArrow.addEventListener('click', function() {
      moreConveniencesArrow.classList.toggle('more-conveniences__arrow-down');
      moreConveniencesList.classList.toggle('more-conveniences__list-visible')
    });

// кликаем чекбоксы
    for (let i = 0; i < conveniencesLabel.length; i++) {
      conveniencesLabel[i].addEventListener('click', function() {
        moreConveniencesBox[i].classList.toggle('more-conveniences__box-down')
      });
    }
