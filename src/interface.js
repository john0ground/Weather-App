import { searchCity } from './app';
import { format } from 'date-fns';
import { backgrounds } from './backgrounds';

const inputCity = document.querySelector('#input-city');
const searchBtn = document.querySelector('#search');
const errorMessage = document.querySelector('#error-message');
const dataContainer = document.querySelector('.data-container');
const loadingContainer = document.querySelector('.loading-container');
const pendingCity = document.querySelector('#pending-city');
const historyList = document.querySelector('#search-history > ul');

const backgroundImg = document.querySelector('.background > img');
const temperature = document.querySelector('#temperature');
const city = document.querySelector('#city');
const weatherIcon = document.querySelector('#weather-icon');
const time = document.querySelector('#time');
const day = document.querySelector('#day');
const date = document.querySelector('#date');
const condition = document.querySelector('#condition');

const dataCondition = document.querySelector('#data-condition');
const cloudPercentage = document.querySelector('#cloud-percentage');
const humidityPercentage = document.querySelector('#humidity-percentage');
const windSpeed = document.querySelector('#wind-speed');
const feelsLike = document.querySelector('#feels-like');
const country = document.querySelector('#country');
const region = document.querySelector('#region');
const latitude = document.querySelector('#lat');
const longitude = document.querySelector('#lon');

function startLoading() {
    dataContainer.style.display = 'none';
    loadingContainer.style.display = 'block';
    pendingCity.textContent = inputCity.value;

    searchBtn.classList.add('inactive');
}

function endLoading() {
    dataContainer.style.display = 'block';
    loadingContainer.style.display = 'none';

    searchBtn.classList.remove('inactive');
}

function updateHistoryInterface(history) {
    historyList.innerHTML = '';

    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        historyList.appendChild(li);
    });
}

let temp = 'celsius';
let dataCurrent;
let dataLocation;

function setTemperature() {
    // set changeTemp function
}

function displayTemperature() {
    if (temp === 'celsius') {
        temperature.textContent = dataCurrent.temp_c + '°';
        feelsLike.textContent = dataCurrent.feelslike_c + '°';
    }
}

function displayLocation() {
    city.textContent = dataLocation.name;
}

function displayWeatherIcon() {
    weatherIcon.setAttribute('src', dataCurrent.condition.icon);
}

function displayDate() {
    const [dateData, timeData] = dataLocation.localtime.split(' ');
    const localDate = new Date(dateData);
    const dayName = format(localDate, 'EEEE');
    const formattedDate = format(localDate, 'dd MMM') + ' \'' + format(localDate, 'yy');

    time.textContent = timeData + ' - ';
    day.textContent = dayName + ',';
    date.textContent = formattedDate;
}

function displayCondition() {
    condition.textContent = dataCurrent.condition.text;
    dataCondition.textContent = dataCurrent.condition.text;
}

function displaySidebarData() {
    cloudPercentage.textContent = dataCurrent.cloud + '%';
    humidityPercentage.textContent = dataCurrent.humidity + '%';
    windSpeed.textContent = dataCurrent.wind_kph + 'km/h';

    country.textContent = dataLocation.country;
    region.textContent = dataLocation.region;
    latitude.textContent = dataLocation.lat;
    longitude.textContent = dataLocation.lon;
}

function displayData(weatherData) {
    ({current:dataCurrent, location:dataLocation} = weatherData);

    displayTemperature();
    displayLocation();
    displayWeatherIcon();
    displayDate();
    displayCondition();

    displaySidebarData();
    console.log(weatherData);
}

function resetInput() {
    inputCity.value = '';
}

function displayError(error) {
    errorMessage.textContent = error;
}

function removeError() {
    errorMessage.textContent = '';
}

function displayBackground() {    
    const weatherCode = dataCurrent.condition.code.toString();
    const imageData = backgrounds.find(data => data.code.includes(weatherCode));

    if (dataCurrent.is_day === 1) {
        backgroundImg.src = imageData.day.src;
        backgroundImg.alt = imageData.day.alt;
        setTheme('day', imageData);
    } else {
        backgroundImg.src = imageData.night.src;
        backgroundImg.alt = imageData.night.alt;
        setTheme('night', imageData);
    }
}

function setTheme(time, imageData) {
    if (time === 'day') {
        searchBtn.style.background = imageData.day.theme;
    } else {
        searchBtn.style.background = imageData.night.theme;
    }
}

const eventHandlers = (() => {

    searchBtn.addEventListener('click', () => {
        if (searchBtn.classList.contains('inactive')) return;
        searchCity(inputCity.value);
    });

    inputCity.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (searchBtn.classList.contains('inactive')) return;
            searchCity(inputCity.value);
        }
    });
    
})();

export { 
    eventHandlers, 
    startLoading,
    endLoading,
    updateHistoryInterface,
    displayData,
    resetInput,
    displayError,
    removeError,
    displayBackground
}