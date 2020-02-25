
// один элемент
// $('.mobile-station__title').css({'border':'1px solid tomato'});

// // массив элементов (перебирать не нужно!)
// $('.advantages__box').css({'border':'1px solid tomato'});

// $('.mobile-station__title, .advantages__box, .mobile-station__image').css({'border':'1px solid tomato'});

// $('.advantages__image').css({'width':'inherit', 'border':'green'});


'Работа с атрибутами:'

const img = $('.advantages__icon');
img.attr('src');
img.removeAttr('');
img.hasClass(''); // проверка наличия класса;
img.addClass(''); // добавление класса;
img.removeClass(''); // удаление класса;
img.toggleClass(''); // добавление/удаление класса;

$('input[name=name]').val(); // получение/назначение значения val;


'Работа со стилями:'
img.css('width', 100); // style="width: 100px;"

$('.advantages__icon').css('width'); // узнать значение свойства;
$('.advantages__icon').css({
  'width': 'initial',
  'height': 100
}); // присвоение свойств

img.width(320);
img.height(200);

img.css('position', 'absolute');
img.offset({left:200,top:500});

$(document).scrollTop(); // получить значение скролла (px);
$(document).scrollTop(1000); // устанавливаем значение скролла;

'Манипуляция с элементами и их содержимым'
// html(); // получение
$('.preffix-one').html('<p>Some text</p>');

// text(); // получение содержимого
var text = $('.preffix-one').text('Some text'); 
// text.toUpperCase(); // установка зглавных симв.

'Методы аннимационных эффектов'
// hide(); // = display: none; 
// hide('slow'); hide('normal'); hide('fast');
// const remove = () => {
//   $('.advantages__image').hide(900, function() {
//     const section = $('<div id="mytext" style="width:300px; height:100px; background-color:tomato">Hallo!</div>');
//     section.insertAfter($(this)).hide().show(1000);
//   });
// }


