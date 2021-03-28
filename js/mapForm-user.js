/* global _:readonly */
import { getAds } from './create-map.js';

const mapFilter = document.querySelector('.map__filters');
const userHousingType = mapFilter.querySelector('#housing-type');
const userHousingPrice = mapFilter.querySelector('#housing-price');
const userHousingRooms = mapFilter.querySelector('#housing-rooms');
const userHousingGuests = mapFilter.querySelector('#housing-guests');

const TIME_DEBOUNCE = 500;

const getMapFilterValue = (offers) => {
  const getMapFilterFeatures = (offers) => {
    const checkedFeatures = Array.from(mapFilter.querySelectorAll('.map__checkbox:checked'));

    if (checkedFeatures.length === 0) {
      return true;
    }

    return checkedFeatures.every((feature) => offers.offer.features.includes(feature.value));
  }

  const isHousingType = (item) => {
    return userHousingType.value === item.offer.type || userHousingType.value === 'any';
  }

  const isHousingPrice = (item) => {
    if (userHousingPrice.value === 'high') {
      return item.offer.price > 50000;
    } else if (userHousingPrice.value === 'low') {
      return item.offer.price < 10000;
    } else if (userHousingPrice.value === 'middle') {
      return item.offer.price >= 10000 && item.offer.price <= 50000;
    } else {
      return true;
    }
  }

  const isHousingRoomsOrGuests = (select, item, num1, num2, num3) => {
    if (select.value === num1.toString()) {
      return item === num1;
    } else if (select.value === num2.toString()) {
      return item === num2;
    } else if (select.value === num3.toString()) {
      return item === num3;
    } else {
      return true;
    }
  }

  const getAdsThroughDebounce = _.debounce((array) => getAds(array), TIME_DEBOUNCE);

  mapFilter.addEventListener('change', () => {
    const newArray = [];
    offers.some((offer) => {
      if (isHousingType(offer) &&
        isHousingPrice(offer) &&
        isHousingRoomsOrGuests(userHousingRooms, offer.offer.rooms, 3, 2, 1) &&
        isHousingRoomsOrGuests(userHousingGuests, offer.offer.guests, 0, 1, 2) &&
        getMapFilterFeatures(offer)
      ) {
        newArray.push(offer)
      }
      if (newArray.length === 10) {
        return true;
      }
      getAdsThroughDebounce(newArray);
    })
  })



  //   userHousingRooms.addEventListener('change', () => {
  //     if (userHousingRooms.value === '3') {
  //       const adds = offers.filter(value => value.offer.rooms === 3);
  //       getAds(adds);
  //     } else if (userHousingRooms.value === '2') {
  //       const adds = offers.filter(value => value.offer.rooms === 2);
  //       getAds(adds);
  //     } else if (userHousingRooms.value === '1') {
  //       const adds = offers.filter(value => value.offer.rooms === 1);
  //       getAds(adds);
  //     } else {
  //       const adds = offers.filter(value => value);
  //       getAds(adds);
  //     }
  //   });

  //   userHousingGuests.addEventListener('change', () => {
  //     if (userHousingGuests.value === '0') {
  //       const adds = offers.filter(value => value.offer.guests === 0);
  //       getAds(adds);
  //     } else if (userHousingGuests.value === '1') {
  //       const adds = offers.filter(value => value.offer.guests === 1);
  //       getAds(adds);
  //     } else if (userHousingGuests.value === '2') {
  //       const adds = offers.filter(value => value.offer.guests === 2);
  //       getAds(adds);
  //     } else {
  //       const adds = offers.filter(value => value);
  //       getAds(adds);
  //     }
  //   });
}

export { getMapFilterValue };
