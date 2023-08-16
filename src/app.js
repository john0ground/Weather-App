import { startLoading, endLoading, updateHistoryInterface } from "./interface";

const history = ['London', 'Buenos Aires', 'Tokyo', 'Manila'];
let activeData;

function updateHistory() {
    const city = activeData.location.name;

    if(history.includes(city)) {
        const index = history.indexOf(city);
        history.splice(index, 1);
    } else {
        history.pop();
    }

    history.unshift(city);
    updateHistoryInterface(history);
}

function emptyInputError(city) {
    const onlySpaces = /^ +$/;

    if (city.length === 0 || onlySpaces.test(city)) {
        console.log('Please input a city');
        return true;
    }
    
    return false;
}

async function searchCity(city) {
    if (emptyInputError(city)) return;
    startLoading();

    const link = `http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=${city}&aqi=no`;
    await fetchWeather(link)
    .then(() => {
        updateHistory();
    })

    .finally(() => {
        endLoading();
    });
}

async function fetchWeather(link) {
    try {
        const response = await fetch(link, {mode: 'cors'});

        if (!response.ok) {
            throw response;
        }

        const weatherData = await response.json();
        activeData = weatherData;
        // console.log(weatherData);
    } catch(err) {
        const errorData = await err.json();
        console.log(errorData.error.message);
        throw errorData;
    }
}

export { searchCity }

//  implement display data / run temp conversion / pexels api