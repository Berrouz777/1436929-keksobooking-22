import { addressMarkerArray, marker } from './create-map.js';

const MIN_LENGHT_NAME = 30;
const MAX_LENGHT_NAME = 100;
const MAX_PRICE = 1000000;

const userPriceInput = document.querySelector('[name="price"]');
const userSelectType = document.querySelector('[name="type"]');
const formMapFilter = document.querySelector('.map__filters');
const form = document.querySelector('.ad-form');
const address = form.querySelector('#address');
const formButtonReset = form.querySelector('.ad-form__reset');
const userTitleInput = form.querySelector('#title');

const getFieldsEmpty = (evt) => {
  evt.preventDefault();
  form.reset();
  formMapFilter.reset();
  address.value = addressMarkerArray[0] + ', ' + addressMarkerArray[1];
  marker.setLatLng(
    {
      lat: 35.68519,
      lng: 139.75724,
    }
  );
};

formButtonReset.addEventListener('click', (evt) =>{
  getFieldsEmpty(evt);
});

userSelectType.addEventListener('click', () => {
  if (userSelectType.value === 'flat') {
    userPriceInput.min = 1000;
    userPriceInput.placeholder = 1000;
  }
  if (userSelectType.value === 'bungalow') {
    userPriceInput.min = 0;
    userPriceInput.placeholder = 0;
  }
  if (userSelectType.value === 'house') {
    userPriceInput.min = 5000;
    userPriceInput.placeholder = 5000;
  }
  if (userSelectType.value === 'palace') {
    userPriceInput.min = 10000;
    userPriceInput.placeholder = 10000;
  }
});

userPriceInput.addEventListener('input', () => {
  if (userPriceInput.value > MAX_PRICE) {
    userPriceInput.setCustomValidity('');
  }
  userPriceInput.reportValidity();
});

userTitleInput.addEventListener('input', () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_LENGHT_NAME) {
    userTitleInput.setCustomValidity('Ещё ' + (MIN_LENGHT_NAME - titleLength) + ' симв.');
  }
  else if (titleLength > MAX_LENGHT_NAME) {
    userTitleInput.setCustomValidity('Удалите ' + (titleLength - MAX_LENGHT_NAME) + ' симв.')
  } else {
    userTitleInput.setCustomValidity('');
  }
  userTitleInput.reportValidity();
});

export { getFieldsEmpty };
