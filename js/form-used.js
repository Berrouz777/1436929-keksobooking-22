const inputPrice = document.querySelector('[name="price"]');
const selectType = document.querySelector('[name="type"]');

if (selectType.value === 'flat') {
  inputPrice.setAttribute('min', '1000');
  inputPrice.placeholder = 1000;
}
if (selectType.value === 'bungalow') {
  inputPrice.setAttribute('min', '0');
  inputPrice.placeholder = 0;
}
if (selectType.value === 'house') {
  inputPrice.setAttribute('min', '5000');
  inputPrice.placeholder = 5000;
}
if (selectType.value === 'palace') {
  inputPrice.setAttribute('min', '10000');
  inputPrice.placeholder = 10000;
}
console.log(inputPrice);
