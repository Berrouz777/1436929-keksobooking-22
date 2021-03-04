const form = document.querySelector('.ad-form');
const sendData = form.querySelector('.ad-form__submit');
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

sendData.addEventListener('click', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  console.log(formData);

  // fetch('https://22.javascript.pages.academy/keksobooking',
  //   {
  //     method: 'POST',
  //     body: formData,
  //   },
  // );
})

export { getIncluded, fieldsets, mapItems };
