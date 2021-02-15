const getRandomNumber = (min, max, fracNumber) => {
  let randomNumber = (Math.random() * (max - min) + min).toFixed(fracNumber);
  if (max < min) {
    return 'Ошибка! ' + max + ' меньше ' + min;
  }
  if (max == min) {
    return 'Ошибка! ' + max + ' равно ' + min;
  }
  return randomNumber;
}

export {getRandomNumber};
