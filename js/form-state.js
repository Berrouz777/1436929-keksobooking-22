import { addError, addSuccess } from './show-message.js';

const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapItems = Array.from(mapFilter.children);

const getDisabled = (array) => {
  array.forEach((value) => {
    value.setAttribute('disabled', '');
    value.parentElement.classList.add('ad-form--disabled');
  })
};
getDisabled(fieldsets);
getDisabled(mapItems);

const getIncluded = (array) => {
  array.forEach((value) => {
    value.removeAttribute('disabled');
    value.parentElement.classList.remove('ad-form--disabled');
  })
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    // .then((response) => response.json())
    .then((response) => {
      if (response.ok) {
        addSuccess();
        return response;
      }

      throw new Error(addError());
    })
    .catch((error) => error);
})

export { getIncluded, fieldsets, mapItems };
