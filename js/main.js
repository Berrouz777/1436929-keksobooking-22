let getRandomNumber = (min, max, fracNumber) => {
  let randomNumber = (Math.random() * (max - min) + min).toFixed(fracNumber);
  if (max < min) {
    return 'Ошибка! ' + max + ' меньше ' + min;
  }
  if (max == min) {
    return 'Ошибка! ' + max + ' равно ' + min;
  }
  return randomNumber;
}

let getImageRandom = () => {
  let imageRandom = getRandomNumber(1, 8, 0)
  return (imageRandom < 10) ? ('0' + imageRandom) : imageRandom;
};

const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const TITLE = ['Лучшие отзывы', 'Лучшее обслуживание!', 'ХИТ', 'Лучшее соотношение цена/качество', 'Рекомендуем'];
const CHECK = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const RENTORS = 10;

const getRandomNumberArray = (elements) => { // Находит случайный индекс из длинны массива
  return getRandomNumber(0, elements.length - 1, 0);
};

const getRandomElementArray = (elements) => { // Находит случайное значение из длинны массива
  return elements[getRandomNumber(0, elements.length - 1, 0)];
};

const getRandomLengthArray = (elements) => { // Находит случайную длинну из данного массива
  return getRandomNumber(1, elements.length, 0);
}

const getNewRandomArray = (array, newArray) => {  // Содает массив случайной длины и заполняет его случайным количеством данных из выбранного массива
  for (let i = 0; i < getRandomLengthArray(array); i++) {
    newArray.push(getRandomElementArray(array));
    // newArray = array.slice(numberOne, numberTwo);
  }
  return newArray;
};

let numberOne;
let numberTwo;

for (let i = 0; i < 900; i++) {
  let randomNumberOne = getRandomNumberArray(FEATURES);
  let randomNumberTwo = getRandomNumberArray(FEATURES);
  if (randomNumberOne < randomNumberTwo) {
    numberOne = randomNumberOne;
    numberTwo = randomNumberTwo;
    break;
  }
}

// console.log(numberOne, numberTwo);

let features = () => {
  let newFeatures = []
  for (let i = 0; i < getRandomLengthArray(FEATURES); i++) {
    newFeatures.push(getRandomElementArray(FEATURES));
    // newFeatures = FEATURES.slice(numberOne, numberTwo);
  };
  return newFeatures;
}

let photos = () => {
  let newPhotos = [];
  for (let i = 0; i < getRandomLengthArray(PHOTO); i++) {
    newPhotos.push(getRandomElementArray(PHOTO));
  };
  return newPhotos;
}

const createRentor = () => {
  return {
    autor: {
      avatar: 'img/avatars/user' + getImageRandom() + '.png',
    },
    offer: {
      title: getRandomElementArray(TITLE),
      address: '{{location.x}}, {{location.y}}',
      price: getRandomNumber(1000, 10000, 0),
      type: getRandomElementArray(TYPE),
      rooms: getRandomNumber(1, 7, 0),
      guests: getRandomNumber(1, 15, 0),
      checkin: getRandomElementArray(CHECK),
      checkout: getRandomElementArray(CHECK),
      features: features(),
      description: 'Чисто, просторно. Двухразовое питание',
      photos: photos(),
    },
    location: {
      x: getRandomNumber(35.65000, 35.70000, 5),
      y: getRandomNumber(139.70000, 139.80000, 5),
    }
  }
}
// console.log(createRentor());

const createRentors = new Array(5).fill(null).map(() => createRentor());
console.log(createRentors);
