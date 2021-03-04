import { getAds } from './create-map.js';
import { showMessage } from './util.js';

const getData = fetch('https://22.javascript.pages.academy/keksobooking/data')
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

export {getData};
