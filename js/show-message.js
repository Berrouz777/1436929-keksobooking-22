  const main = document.querySelector('main');
  const templeSuccess = document.querySelector('#success').content;
  const messageSuccess = templeSuccess.querySelector('.success');
  const templeError = document.querySelector('#error').content;
  const messageError = templeError.querySelector('.error');
  const buttonError = messageError.querySelector('.error__button');

  const addSuccess = () => {
    const newElementSuccess = messageSuccess.cloneNode(true);
    main.appendChild(newElementSuccess);

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || 'Esc') {
        evt.preventDefault();
        newElementSuccess.classList.add('hidden');
      }
    });

    document.addEventListener('click', (evt) => {
      newElementSuccess.classList.add('hidden');
    });
  }

  const addError = () => {
    const newElementError = messageError.cloneNode(true);
    main.appendChild(newElementError);

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || 'Esc') {
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

  export { addSuccess, addError };
