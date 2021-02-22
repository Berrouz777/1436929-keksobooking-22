import { createRentor } from './create-rentors.js';
// import { RENTORS } from './create-rentors.js'

const rentor = createRentor();

const mapCanvas = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card').content;
const popup = templateFragment.querySelector('.popup');
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < RENTORS.length; i++) {
const getAd = () => {
  const newElement = popup.cloneNode(true);

  newElement.querySelector('.popup__title').textContent = rentor.offer.title;
  newElement.querySelector('.popup__text--address').textContent = rentor.offer.address;
  newElement.querySelector('.popup__text--price').innerHTML = rentor.offer.price + ' <span>₽/ночь</span>';
  newElement.querySelector('.popup__type').textContent = rentor.offer.type;
  newElement.querySelector('.popup__text--capacity').textContent = rentor.offer.rooms + ' комнаты для ' + rentor.offer.guests + ' гостей';
  newElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + rentor.offer.checkin + ' выезд до ' + rentor.offer.checkout;
  newElement.querySelector('.popup__description').textContent = rentor.offer.description;
  newElement.querySelector('.popup__avatar').src = rentor.autor.avatar;
  const features = newElement.querySelector('.popup__features');

  for (let i = features.children.length - 1; i >= 0; i--) {
    const feature = features.children[i];
    features.removeChild(feature);
  }

  for (let i = 0; i < rentor.offer.features.length; i++) {
    const li = document.createElement('li');
    li.classList.add('popup__feature');
    li.classList.add('popup__feature--' + rentor.offer.features[i]);
    features.appendChild(li);
  }

  const photos = newElement.querySelector('.popup__photos');

  if (rentor.offer.photos.length === 0) {
    photos.removeChild(photos.children[0]);
  }
  if (rentor.offer.photos.length === 1) {
    photos.children[0].src = rentor.offer.photos;
  } else {
    for (let i = 1; i < rentor.offer.photos.length; i++) {
      const img = newElement.querySelector('.popup__photo').cloneNode(true);
      photos.appendChild(img);
      photos.children[0].src = rentor.offer.photos[0];
      photos.children[i].src = rentor.offer.photos[i];
    }
  }

  // fragment.appendChild(newElement);
  // }

  // mapCanvas.appendChild(fragment);
  mapCanvas.appendChild(newElement);
}
