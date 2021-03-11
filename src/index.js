import './css/style.css';
import { callApi } from './components/apicall';
import { locateCity } from './components/localization';

let city = document.getElementById('city');
let form = document.querySelector('.city-entry');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let chosenCity = city.value.trim();
    locateCity(chosenCity);
    city.value = "";
    return;
})

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        let time = new Date().getHours();
        callApi(lat, lon, time);
    })
}