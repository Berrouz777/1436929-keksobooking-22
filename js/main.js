import { getData } from './api.js';
import {getAds} from './create-map.js';
import {getMapFilterValue} from './mapForm-user.js';
import './form-state.js';
import './form-user.js';
import './mapForm-user.js';

getData((offers) => {
  getAds(offers);
  getMapFilterValue(offers);
});



