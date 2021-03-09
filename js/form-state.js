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

export { getIncluded, fieldsets, mapItems };
