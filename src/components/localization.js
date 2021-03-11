const MAPKEY = 'e38f9a4538444e94bac42b28e4027be5';
const TIMEKEY = '99a67da6f017470da19b331a2c14b86c';

export const locateCity = (city) => {
    fetch(`http://api.positionstack.com/v1/forward?access_key=${MAPKEY}&query=${city}`)

        .then((response) => {
            return response.json();
        })
        .then((informations) => {
            apiData = informations
            let latitude = apiData.data[0].latitude;
            let longitude = apiData.data[0].longitude;



            fetch(`https://api.ipgeolocation.io/timezone?apiKey=${TIMEKEY}&lat=${latitude}&long=${longitude}`)
                .then((data => {
                    return data.json();
                }))
                .then((info) => {
                    let time = info.time_24;
                    let sym = time.split(':');
                    let chosenCityTime = (parseInt(sym, 10));
                    callApi(latitude, longitude, chosenCityTime)
                })

        })
        .catch(() => {
            input.setAttribute('placeholder', 'Please Add a Valid City Name');
            setTimeout(() => {
                input.setAttribute('placeholder', 'Try Another City');
            }, 3000)

        })
}