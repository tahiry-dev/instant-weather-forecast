import './css/style.css';
import { callApi } from './components/apicall';
import { locateCity } from './components/localization';

const city = document.getElementById('city');
const form = document.querySelector('.city-entry');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const chosenCity = city.value.trim();
  locateCity(chosenCity);
  city.value = '';
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const time = new Date().getHours();
    callApi(lat, lon, time);
  });
}