import './css/style.css';
import { callApi } from './components/apicall';
import { locateCity } from './components/localization';


const city = document.getElementById('city');
const form = document.querySelector('.city-entry');
const slider = document.querySelector("input[type='checkbox']");

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
    let unit = 'metric';
    let sym = 'C';
    callApi(lat, lon, time, unit, sym);


    slider.addEventListener('change', () => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const time = new Date().getHours();

      if (unit === 'metric') {
        unit = 'imperial';
        sym = 'F';
      } else {
        unit = 'metric';
        sym = 'C';
      }
      callApi(lat, lon, time, unit, sym);
    });
  });
}
