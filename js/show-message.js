import {isUseEsc} from './util.js';
import {getFieldsEmpty} from './form-user.js';

const main = document.querySelector('main');
const templeSuccess = document.querySelector('#success').content;
const messageSuccess = templeSuccess.querySelector('.success');
const templeError = document.querySelector('#error').content;
const messageError = templeError.querySelector('.error');
const buttonError = messageError.querySelector('.error__button');

const onMessageEscKey = (element) => (evt) => {
  if (isUseEsc(evt)) {
    evt.preventDefault();
    element.classList.add('hidden');
    getFieldsEmpty(evt);
  }
};

const getMessageSuccess = () => {
  const newElementSuccess = messageSuccess.cloneNode(true);
  main.appendChild(newElementSuccess);

  document.addEventListener('keydown', onMessageEscKey(newElementSuccess));
  document.removeEventListener(onMessageEscKey(newElementSuccess));

  document.addEventListener('click', (evt) => {
    newElementSuccess.classList.add('hidden');
    getFieldsEmpty(evt);
  });
}

const getMessageError = () => {
  const newElementError = messageError.cloneNode(true);
  main.appendChild(newElementError);

  document.addEventListener('keydown', (evt) => {
    if (isUseEsc(evt)) {
      evt.preventDefault();
      newElementError.classList.add('hidden');
    }
  });

  document.addEventListener('click', () => {
    newElementError.classList.add('hidden');
  });

  buttonError.addEventListener('click', () => {
    newElementError.classList.add('hidden');
  });
}

export { getMessageSuccess, getMessageError };
