const APIKEY = '5020f52919e5e158831dceb8b9d46e77';


const callApi = (lat, lon, currentTime) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&
lon=${lon}&exclude=minutely&units=metric&appid=${APIKEY}`)
        .then((response) => {
            return response.json();
        })
        .then((informations) => {
            apiData = informations
            console.log(apiData.current.dt);
            weather.innerText = apiData.current.weather[0].description;
            temperature.innerText = `${Math.trunc(apiData.current.temp)}°C`;

            let cityName = (apiData.timezone).split("/");
            localization.innerText = cityName[1];

            // let currentTime = new Date().getHours();
            for (let i = 0; i < hours.length; i++) {
                let incrHour = currentTime + i * 3;

                if (incrHour > 24) {
                    hours[i].innerText = `${incrHour - 24}:00`
                } else if (incrHour === 24) {
                    hours[i].innerText = '00:00'
                } else {
                    hours[i].innerText = `${incrHour}:00`
                }

            }

            for (let j = 0; j < values.length; j++) {
                values[j].innerText = `${Math.trunc(apiData.hourly[j * 3].temp)}°C`
            }

            for (let k = 0; k < orderedDay.length; k++) {
                days[k].innerText = orderedDay[k].slice(0, 3);
            }

            for (let m = 0; m < 7; m++) {
                daysValues[m].innerText = `${Math.trunc(apiData.daily[m + 1].temp.day)}°C`;
            }

            if (currentTime >= 6 && currentTime < 21) {
                img.setAttribute('alt', 'logo of weather');
                img.setAttribute('src', `ressources/jour/${apiData.current.weather[0].icon}.svg`);
            } else {
                img.setAttribute('alt', 'logo of weather');
                img.setAttribute('src', `ressources/nuit/${apiData.current.weather[0].icon}.svg`);
            }

            logoImg.appendChild(img);

        })
}