const data = JSON.parse(localStorage.getItem('ishopBasket'));
console.log(data);

const divShoppingCart = document.querySelector('#shoppingCart'); // parrent

if (data.length > 0) {
  data.forEach((productdata) => {
    const name = productdata.name,
      code = productdata.code,
      count = productdata.count,
      image = productdata.image,
      currency = productdata.currency,
      price = productdata.price;

    const divBasketWrapper = document.createElement('div');
    divBasketWrapper.className = 'basket__wrapper';
    divShoppingCart.append(divBasketWrapper);

    const divBasketDesc = document.createElement('div');
    divBasketDesc.className = 'basket__desc';
    divBasketWrapper.append(divBasketDesc);

    const imgBasketImage = document.createElement('img');
    imgBasketImage.className = 'basket__img';
    imgBasketImage.setAttribute('src', image);
    imgBasketImage.setAttribute('alt', name);
    divBasketDesc.append(imgBasketImage);

    const basketItemTitle = document.createElement('h4');
    basketItemTitle.className = 'basket__name-item';
    basketItemTitle.innerText = name;
    divBasketDesc.append(basketItemTitle);

    const divBasketQuantity = document.createElement('div');
    divBasketQuantity.className = 'basket__quantity';
    divBasketWrapper.append(divBasketQuantity);

    const pQuantityTitle = document.createElement('p');
    pQuantityTitle.innerText = 'Количество: ';
    divBasketQuantity.append(pQuantityTitle);

    const pQuantityNumb = document.createElement('p');
    pQuantityNumb.innerText = count;
    divBasketQuantity.append(pQuantityNumb);

    const divBasketPrice = document.createElement('div');
    divBasketPrice.className = 'basket__price';
    divBasketWrapper.append(divBasketPrice);

    const pPriceTitle = document.createElement('p');
    pPriceTitle.innerText = 'Стоимость: ';
    divBasketPrice.append(pPriceTitle);

    const spanCurrency = document.createElement('span');
    spanCurrency.innerText = `${currency} `;
    divBasketPrice.append(spanCurrency);

    const pPriceNumb = document.createElement('p');
    pPriceNumb.className = 'price-numb';
    pPriceNumb.innerText = price * count;
    divBasketPrice.append(pPriceNumb);

    const divDeleteItem = document.createElement('div');
    divDeleteItem.className = 'basket__delete-item';
    divBasketWrapper.append(divDeleteItem);

    const aDeleteItem = document.createElement('a');
    aDeleteItem.className = 'btn btn-danger';
    aDeleteItem.innerText = 'Удалить';
    aDeleteItem.setAttribute('href', 'shopping-cart.html');
    aDeleteItem.onclick = () => deleteItem(code);
    divDeleteItem.append(aDeleteItem);
  });

  const divBasketTotal = document.createElement('div');
  divBasketTotal.className = 'basket__total';
  divShoppingCart.append(divBasketTotal);

  const divBasketTotalQuantity = document.createElement('div');
  divBasketTotalQuantity.className = 'basket__total-quantity';
  divBasketTotal.append(divBasketTotalQuantity);

  const pTotalQuantityTitle = document.createElement('p');
  pTotalQuantityTitle.innerText = 'Общее количество: ';
  divBasketTotalQuantity.append(pTotalQuantityTitle);

  const pTotalQuantityNumb = document.createElement('p');
  pTotalQuantityNumb.innerText = data.reduce((sum, obj) => sum + +obj.count, 0);
  divBasketTotalQuantity.append(pTotalQuantityNumb);

  const divBasketTotalPrice = document.createElement('div');
  divBasketTotalPrice.className = 'basket__total-price';
  divBasketTotal.append(divBasketTotalPrice);

  const pTotalPriceTitle = document.createElement('p');
  pTotalPriceTitle.innerText = 'Общая стоимость:';
  divBasketTotalPrice.append(pTotalPriceTitle);

  const pTotalPriceNumb = document.createElement('p');
  const numbArray = [...document.querySelectorAll('.price-numb')];
  pTotalPriceNumb.innerText = numbArray.reduce((sum, obj) => sum + +obj.innerText, 0);
  divBasketTotalPrice.append(pTotalPriceNumb);

  const spanCurrency = document.createElement('span');
  spanCurrency.innerText = `${document.querySelector('.basket__price span').innerText} `;
  pTotalPriceNumb.prepend(spanCurrency);
} else {
  const divEmptyBasket = document.createElement('div');
  divEmptyBasket.className = 'empty-basket';
  divShoppingCart.append(divEmptyBasket);

  const pEmptyBasket = document.createElement('h4');
  pEmptyBasket.className = 'empty-basket-text';
  pEmptyBasket.innerText = 'Ваша корзина пуста';
  divEmptyBasket.prepend(pEmptyBasket);
  document.querySelector('.alert-warning').classList.add('hidden');
}

const divEnterFb = document.createElement('div');
divEnterFb.className = 'enter-fb-btn';
divShoppingCart.append(divEnterFb);

const aEnterFb = document.createElement('a');
aEnterFb.className = 'btn btn-primary btn-enter';
aEnterFb.innerText = 'Войти';
divEnterFb.append(aEnterFb);

const iEnterFb = document.createElement('i');
iEnterFb.className = 'fa fa-facebook-official';
aEnterFb.prepend(iEnterFb);


// remove Item from a basket
const deleteItem = (code) => {
  const newData = data.filter(obj => obj.code != +code);
  localStorage.removeItem('ishopBasket');
  localStorage.setItem('ishopBasket', JSON.stringify(newData));
};