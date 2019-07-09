// drop-down menu
let arrowDwn = document.querySelectorAll('.nav-item__img'),
    dropDownList = document.querySelectorAll('.nav-item__ul');

for (let i = 0; i < arrowDwn.length; i++) {
    arrowDwn[i].addEventListener('click', function(evt) {
        arrowDwn[i].classList.toggle('nav-item__img-down');
        dropDownList[i].classList.toggle('nav-item__ul-block')
    }); 
}