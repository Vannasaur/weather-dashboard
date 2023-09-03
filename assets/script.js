// Global Variables
let userInputEl = document.getElementById('user-input');
let cityNameEl = document.getElementById('city-name');
let currentWeatherEl = document.querySelector('.current-weather');


// Display city search on left side of page

// Create function for what happens when you press submit
// .catch (function (error)) - check to see what the response is from the fetch so if fetch returns nothing, put error prompt, make sure it doesn't save in the search list
let formSubmitHandler = function (event) {
    event.preventDefault();

    let cityName = cityNameEl.value.trim();

    if (cityName !== '') {
        getCurrentWeatherInfo(cityName);
        getForecastInfo(cityName);

        currentWeatherEl.textContent = '';
        cityNameEl.value = '';
    } else {
        alert('Please enter a city')
    }
};

// Display list of recent searches underneath search form
// List of recent searches should be grayed out buttons that are clickable and show results of weather for that city

// Fetch current weather data from open weather API using city name input - want temp, wind and humidity
let getCurrentWeatherInfo = function (city) {
// API Key and URL setup
const myKey = config.APIkey;
const requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + myKey + '&units=imperial';

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        displayCurrent(data, city)
    })
};

// Fetch 5 day weather forecast data from open weather API using city name input - want temp, wind and humidity
let getForecastInfo = function (city) {
    // API Key and URL setup
    const myKey = config.APIkey;
    const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + myKey + '&units=imperial';
    
        fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
    };

// Display current weather data on top of page
// let displayCurrent = function ()
// Display 5 day forcast underneath, in card format (must get midday temp, not midnight temp)

// Add button event listener to call API search of city weather
userInputEl.addEventListener('submit', formSubmitHandler);