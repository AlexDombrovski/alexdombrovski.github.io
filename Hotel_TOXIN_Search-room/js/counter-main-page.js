// choice of guests
let arrowGuests = document.querySelector('.guests-quantity__arrow'),
    guestsChoice = document.querySelector('.guests-quantity__quantity');
    
    arrowGuests.addEventListener('click', function(evt) {
      arrowGuests.classList.toggle('guests-quantity__arrow-over');
      guestsChoice.classList.toggle('choice-number__quantity-on')
    });  

// counter on main-page
let minusAdultsButton = document.querySelector('.minus.adults'),
    plusAdultsButton = document.querySelector('.plus.adults'),
    inputAdults = document.querySelector('#adults'),
    minusChildrenButton = document.querySelector('.minus.children'),
    plusChildrenButton = document.querySelector('.plus.children'),
    inputChildren = document.querySelector('#children'),
    minusBabiesButton = document.querySelector('.minus.babies'),
    plusBabiesButton = document.querySelector('.plus.babies'),
    inputBabies = document.querySelector('#babies');

// Counter Adults
function counterPlusAdults() {
  let valueAdults = inputAdults.value;
  let min = inputAdults.attributes.min.value;
  let max = inputAdults.attributes.max.value;
  
  valueAdults++;

  if (valueAdults >= min && valueAdults <= max) {
    return valueAdults;
  } else {
    return max;
  }  
}

plusAdultsButton.addEventListener('click', function(evt) {
    inputAdults.value = counterPlusAdults();
});

function counterMinusAdults() {
  let valueAdults = inputAdults.value;
  let min = inputAdults.attributes.min.value;
  let max = inputAdults.attributes.max.value;

  valueAdults--;

  if (valueAdults >= min && valueAdults <= max) {
    return valueAdults;
  } else {
    return min;
  }      
}

minusAdultsButton.addEventListener('click', function(evt) {
    inputAdults.value =counterMinusAdults();
});

// Counter Children:
function counterPlusChildren() {
  let valueChildren = inputChildren.value;
  let min = inputChildren.attributes.min.value;
  let max = inputChildren.attributes.max.value;
  
  valueChildren++;

  if (valueChildren >= min && valueChildren <= max) {
    return valueChildren;
  } else {
    return max;
  }  
}

plusChildrenButton.addEventListener('click', function(evt) {
    inputChildren.value = counterPlusChildren();
});

function counterMinusChildren() {
  let valueChildren = inputChildren.value;
  let min = inputChildren.attributes.min.value;
  let max = inputChildren.attributes.max.value;

  valueChildren--;

  if (valueChildren >= min && valueChildren <= max) {
    return valueChildren;
  } else {
    return min;
  }      
}

minusChildrenButton.addEventListener('click', function(evt) {
    inputChildren.value =counterMinusChildren();
});

// Counter Babies:
function counterPlusBabies() {
  let valueBabies = inputBabies.value;
  let min = inputBabies.attributes.min.value;
  let max = inputBabies.attributes.max.value;
  
  valueBabies++;

  if (valueBabies >= min && valueBabies <= max) {
    return valueBabies;
  } else {
    return max;
  }  
}

plusBabiesButton.addEventListener('click', function(evt) {
    inputBabies.value = counterPlusBabies();
});

function counterMinusBabies() {
  let valueBabies = inputBabies.value;
  let min = inputBabies.attributes.min.value;
  let max = inputBabies.attributes.max.value;

  valueBabies--;

  if (valueBabies >= min && valueBabies <= max) {
    return valueBabies;
  } else {
    return min;
  }      
}

minusBabiesButton.addEventListener('click', function(evt) {
    inputBabies.value =counterMinusBabies();
});

// sum of guests
function sum () {
  let guests = 0;
  guests = parseInt(inputAdults.value) + parseInt(inputChildren.value) + parseInt(inputBabies.value);
  
  if (inputAdults.value > 0 && inputChildren.value > 0 && inputBabies.value > 0) {
        return guests + ' гостя' + ', ' + inputChildren.value + ' ребёнок' + ', ' + inputBabies.value + ' младенец';
  } if (inputAdults.value > 0 && inputChildren.value > 0) {
        return guests + ' гостя' + ', ' + inputChildren.value + ' ребёнок';
  } if (inputAdults.value > 0 && inputBabies.value > 0) {
        return guests + ' гостя' + ', ' + inputBabies.value + ' младенец';
  }  if (inputAdults.value == 0 && inputChildren.value > 0 || inputBabies.value > 0) {
        return 'Вы ввели только детей!';
  } else {
        return guests + ' гостя';        
  }
}

let guestsNumber = document.querySelector('.guests-quantity__p'),
    applyButton = document.querySelector('.apply-button');

    applyButton.addEventListener('click', function(){
      guestsNumber.innerHTML = sum();
      guestsChoice.classList.toggle('choice-number__quantity-on')
    });

// click on reset button
let resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function (evt) {
      guestsNumber.innerHTML = 'Сколько гостей';
      inputBabies.value = 0;
      inputChildren.value = 0;
      inputAdults.value = 0;
      console.log('gut!');
});