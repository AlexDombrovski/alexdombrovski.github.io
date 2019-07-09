// выпадание счётчика
let conArrow = document.querySelector('.conveniences__arrow'),
    conParagraf = document.querySelector('.conveniences__p'),
    conDropDown = document.querySelector('.conveniences__numb-down');

    conArrow.addEventListener('click', function (evt) {
      conArrow.classList.toggle('conveniences__arrow-down'),
      conDropDown.classList.toggle('conveniences__numb-on');
    });

// счётчик "Спальни"
let minusBedroomsButton = document.querySelector('.minus.bedrooms'),
    plusBedroomsButton = document.querySelector('.plus.bedrooms'),
    inputBedrooms = document.querySelector('#bedrooms');

function counterPlusBedrooms() {
  let valueBedrooms = inputBedrooms.value,
      min = inputBedrooms.attributes.min.value,
      max = inputBedrooms.attributes.max.value;
  
  valueBedrooms++;

  if (valueBedrooms >= min && valueBedrooms <= max) {
    return valueBedrooms;
  } else {
    return max;
  }  
}

plusBedroomsButton.addEventListener('click', function(evt) {
    inputBedrooms.value = counterPlusBedrooms();
});

function counterMinusBedrooms() {
  let valueBedrooms = inputBedrooms.value;
  let min = inputBedrooms.attributes.min.value;
  let max = inputBedrooms.attributes.max.value;

  valueBedrooms--;

  if (valueBedrooms >= min && valueBedrooms <= max) {
    return valueBedrooms;
  } else {
    return min;
  }      
}

minusBedroomsButton.addEventListener('click', function(evt) {
    inputBedrooms.value =counterMinusBedrooms();
});

// счётчик "кровати"
let minusBedButton = document.querySelector('.minus.bed'),
    plusBedButton = document.querySelector('.plus.bed'),
    inputBed = document.querySelector('#bed');

function counterPlusBed() {
  let valueBed = inputBed.value,
      min = inputBed.attributes.min.value,
      max = inputBed.attributes.max.value;
  
  valueBed++;

  if (valueBed >= min && valueBed <= max) {
    return valueBed;
  } else {
    return max;
  }  
}

plusBedButton.addEventListener('click', function(evt) {
    inputBed.value = counterPlusBed();
});

function counterMinusBed() {
  let valueBed = inputBed.value;
  let min = inputBed.attributes.min.value;
  let max = inputBed.attributes.max.value;

  valueBed--;

  if (valueBed >= min && valueBed <= max) {
    return valueBed;
  } else {
    return min;
  }      
}

minusBedButton.addEventListener('click', function(evt) {
    inputBed.value =counterMinusBed();
});

// счётчик "Ванная"
let minusBathroomButton = document.querySelector('.minus.bathroom'),
    plusBathroomButton = document.querySelector('.plus.bathroom'),
    inputBathroom = document.querySelector('#bathroom');

    function counterPlusBathroom() {
      let valueBathroom = inputBathroom.value,
          min = inputBathroom.attributes.min.value,
          max = inputBathroom.attributes.max.value;
      
      valueBathroom++;
    
      if (valueBathroom >= min && valueBathroom <= max) {
        return valueBathroom;
      } else {
        return max;
      }  
    }
    
    plusBathroomButton.addEventListener('click', function(evt) {
        inputBathroom.value = counterPlusBathroom();
    });
    
    function counterMinusBathroom() {
      let valueBathroom = inputBathroom.value;
      let min = inputBathroom.attributes.min.value;
      let max = inputBathroom.attributes.max.value;
    
      valueBathroom--;
    
      if (valueBathroom >= min && valueBathroom <= max) {
        return valueBathroom;
      } else {
        return min;
      }      
    }
    
    minusBathroomButton.addEventListener('click', function(evt) {
        inputBathroom.value =counterMinusBathroom();
    });