import { orderedDay } from './dayManagement';

const APIKEY = '5020f52919e5e158831dceb8b9d46e77';

let apiData;
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const localization = document.querySelector('.localization');
const hours = document.querySelectorAll('.hour-forecast-name');
const values = document.querySelectorAll('.hour-forecast-value');
const days = document.querySelectorAll('.day-forecast-name');
const daysValues = document.querySelectorAll('.day-forecast-value');
const logoImg = document.querySelector('.logo');
const img = document.createElement('img');

/* eslint-disable import/prefer-default-export */
export const callApi = (lat, lon, currentTime) => {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&
lon=${lon}&exclude=minutely&units=metric&appid=${APIKEY}`)
    .then((response) => response.json())
    .then((informations) => {
      apiData = informations;
      weather.innerText = apiData.current.weather[0].description;
      temperature.innerText = `${Math.trunc(apiData.current.temp)}°C`;
      /* eslint-disable prefer-destructuring */
      const cityName = (apiData.timezone).split('/');
      localization.innerText = cityName[1];
      /* eslint-enable prefer-destructuring */
      for (let i = 0; i < hours.length; i += 1) {
        const incrHour = currentTime + i * 3;

        if (incrHour > 24) {
          hours[i].innerText = `${incrHour - 24}:00`;
        } else if (incrHour === 24) {
          hours[i].innerText = '00:00';
        } else {
          hours[i].innerText = `${incrHour}:00`;
        }
      }

      for (let j = 0; j < values.length; j += 1) {
        values[j].innerText = `${Math.trunc(apiData.hourly[j * 3].temp)}°C`;
      }

      for (let k = 0; k < orderedDay.length; k += 1) {
        days[k].innerText = orderedDay[k].slice(0, 3);
      }

      for (let m = 0; m < 7; m += 1) {
        daysValues[m].innerText = `${Math.trunc(apiData.daily[m + 1].temp.day)}°C`;
      }

      img.setAttribute('alt', 'logo of weather');
      img.setAttribute('src', `svgs/${apiData.current.weather[0].icon}.svg`);

      logoImg.appendChild(img);
    });
};
/* eslint-enable import/prefer-default-export */