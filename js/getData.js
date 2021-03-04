import { getAds } from './create-map.js';
import { showMessage } from './util.js';

const getData = fetch('https://22.javascript.pages.academy/keksobooking/data')
.then((response) => {
  if (response.ok) {
    return response;
  } else {
    showMessage('Ошибка! Данные не получены.');
  }
})
.then((response) => response.json())
.then((ads) => {
  getAds(ads);
})
.catch((error) => showMessage('Ошибка! Данные не получены.'));

export {getData};
