// Условия
if (2*4 ==7) {
  console.log('Верно!');
} else {
  console.log('Неверно!')
};

// -----------
let num = 50;

if (num < 49) {
  console.log('Неверно!');
} else if (num > 100) {
  console.log('Много!');
} else {
  console.log('Верно!');
};

switch (num) {
  case num < 49:
      console.log('Неверно!');
      break;
  case num > 100:
      console.log('Много!');
      break;
  case num > 80:
      console.log('Всё ещё много!');
      break;
  case num == 50:
      console.log('Верно!');
      break;
  default:
      console.log('Что-то пошло не так!');
}

// Цикл while
while (num < 55) {
  console.log(num);
  num++;
};

// Цикл do - это сначало что-то сделать, а потом проверить это.
do {
  console.log(num);
  num++;
}
while (num < 55);

// Цикл for (используется в большинстве случаев) (break или continue)
for (let i = 1; i < 8; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
};