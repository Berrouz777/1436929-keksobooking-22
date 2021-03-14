import { getMessageError, getMessageSuccess } from './show-message.js';
import { getAds } from './create-map.js';
import { showMessage } from './util.js';

const form = document.querySelector('.ad-form');

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(showMessage('Ошибка! Не удалось получить данные'));
  })
  .then((response) => response.json())
  .then((ads) => {
    getAds(ads);
  })
  .catch((error) => error);


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        getMessageSuccess();
        return response;
      }

      throw new Error(getMessageError());
    })
    .catch((error) => error);
})
