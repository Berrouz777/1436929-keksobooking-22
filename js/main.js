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

getRandomNumber(1.98, 2.01, 2);
