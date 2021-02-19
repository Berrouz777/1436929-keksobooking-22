import {getRandomNumber} from './util.js  ';

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TITLES = ['Лучшие отзывы', 'Лучшее обслуживание!', 'ХИТ', 'Лучшее соотношение цена/качество', 'Рекомендуем'];
const CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const RENTORS = 10;

const getRoom = (room) => {
  switch (room) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    default:
      return 'На улице :)';
  }
}

const getImageRandom = () => {
  let imageRandom = getRandomNumber(1, 8, 0)
  return (imageRandom < 10) ? ('0' + imageRandom) : imageRandom;
};

const getRandomElementArray = (elements) => { // Находит случайное значение из длинны массива
  return elements[getRandomNumber(0, elements.length - 1, 0)];
};

const getNewArray = (array) => {
  let newArray = [];
  array.forEach((value) => {
    let isZeroNumber = getRandomNumber(0, 1);
    if (isZeroNumber == 0) {
      newArray.push(value);
    }
  })
  return newArray;
}

const createRentor = () => {
  return {
    autor: {
      avatar: 'img/avatars/user' + getImageRandom() + '.png',
    },
    offer: {
      title: getRandomElementArray(TITLES),
      address: '{{location.x}}, {{location.y}}',
      price: getRandomNumber(1000, 10000, 0),
      type: getRoom(getRandomElementArray(TYPES)),
      rooms: getRandomNumber(2, 4, 0),
      guests: getRandomNumber(1, 10, 0),
      checkin: getRandomElementArray(CHECKS),
      checkout: getRandomElementArray(CHECKS),
      features: getNewArray(FEATURES),
      description: 'Чисто, просторно. Двухразовое питание',
      photos: getNewArray(PHOTOS),
    },
    location: {
      x: getRandomNumber(35.65000, 35.70000, 5),
      y: getRandomNumber(139.70000, 139.80000, 5),
    },
  }
}

const createRentors = new Array(RENTORS).fill(null).map(() => createRentor());

export {createRentor, RENTORS};
