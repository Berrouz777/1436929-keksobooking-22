import { getIncluded, fieldsets, mapItems } from './form-state.js';
import { getAd } from './adding-an-ad.js';
// import { getData } from './getData.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    getIncluded(fieldsets);
    getIncluded(mapItems);
  })
  .setView({
    lat: 35.68519,
    lng: 139.75724,
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
    lat: 35.68519,
    lng: 139.75724,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

address.value = Object.values(marker._latlng);
address.setAttribute('readonly', '');
marker.addTo(map);

const getPosition = (marker, fact) => {
  marker.on(fact, (evt) => {
    const xY = Object.values(evt.target.getLatLng());
    address.value = xY[0].toFixed(5) + ', ' + xY[1].toFixed(5);
  });
}

getPosition(marker, 'moveend');

const getAds = (ad) => {
  ad.forEach((value) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const miniMarker = L.marker(
      {
        lat: value.location.lat,
        lng: value.location.lng,
      },
      {
        icon: icon,
      },
    );

    getPosition(miniMarker, 'click');

    miniMarker.addTo(map).bindPopup(getAd(value));
  });
};

export { getAds };

