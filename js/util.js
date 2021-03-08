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

const showMessage = (message) => {
  const containerMessage = document.createElement('div');
  containerMessage.style.zIndex = 100;
  containerMessage.style.position = 'fixed';
  containerMessage.style.bottom = 0;
  containerMessage.style.right = 0;
  containerMessage.style.color = 'red';
  containerMessage.style.fontFamily = 'Roboto';
  containerMessage.style.fontWeight = 'bold';
  containerMessage.style.fontSize = '20px';
  containerMessage.style.padding = '20px';
  containerMessage.style.cursor = 'default';

  containerMessage.textContent = message;

  document.body.appendChild(containerMessage);

  setTimeout(() => {
    containerMessage.remove();
  }, 3000);
}

export {getRandomNumber, showMessage};
