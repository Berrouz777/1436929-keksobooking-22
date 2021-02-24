import { getIncluded, fieldsets, mapItems } from './form-state.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    getIncluded(fieldsets);
    getIncluded(mapItems);
  })
  .setView({
    lat: 35.68958,
    lng: 139.69178,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.68958,
    lng: 139.69178,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

address.value = Object.values(marker._latlng);
address.setAttribute('disabled', '');
marker.addTo(map);

marker.on('moveend', (evt) => {
  const xY = Object.values(evt.target.getLatLng());
  address.value = xY[0].toFixed(5) + ',' + xY[1].toFixed(5);
});

// console.log(xY)
