import { callApi } from './apicall';

const MAPKEY = 'e38f9a4538444e94bac42b28e4027be5';
const TIMEKEY = '99a67da6f017470da19b331a2c14b86c';

const input = document.getElementById('city');
const slider = document.querySelector("input[type='checkbox']");
let apiData;
/* eslint-disable import/prefer-default-export */
export const locateCity = (city) => {
  fetch(`http://api.positionstack.com/v1/forward?access_key=${MAPKEY}&query=${city}`)

    .then((response) => response.json())
    .then((informations) => {
      apiData = informations;
      const { latitude } = apiData.data[0];
      const { longitude } = apiData.data[0];
      fetch(`https://api.ipgeolocation.io/timezone?apiKey=${TIMEKEY}&lat=${latitude}&long=${longitude}`)
        .then((data => data.json()))
        .then((info) => {
          const time = info.time_24;
          const sym = time.split(':');
          const chosenCityTime = (parseInt(sym, 10));
          let unit = 'metric';
          let degreeSym = 'C';
          callApi(latitude, longitude, chosenCityTime, unit, degreeSym);

          slider.addEventListener('change', () => {
            const time = info.time_24;
            const sym = time.split(':');
            const chosenCityTime = (parseInt(sym, 10));

            if (unit === 'metric') {
              unit = 'imperial';
              degreeSym = 'F';
            } else {
              unit = 'metric';
              degreeSym = 'C';
            }

            callApi(latitude, longitude, chosenCityTime, unit, degreeSym);
          });
        });
    })
    .catch(() => {
      input.setAttribute('placeholder', 'Please Add a Valid City Name');
      setTimeout(() => {
        input.setAttribute('placeholder', 'Try Another City');
      }, 3000);
    });
};
/* eslint-enable import/prefer-default-export */