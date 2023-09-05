// Global Variables
let userInputEl = document.getElementById('user-input');
let cityNameEl = document.getElementById('city-name');
let currentWeatherEl = document.querySelector('.current-weather');
let currentCityEl = document.querySelector('.current-city');

let currentTempEl = document.querySelector('.day0-temp');
let currentWindEl = document.querySelector('.day0-wind');
let currentHumidEl = document.querySelector('.day0-humid');
let forecastDay1El = document.querySelector('.forecast-date1');
let day1TempEl = document.querySelector('.day1-temp');
let day1WindEl = document.querySelector('.day1-wind');
let day1HumidEl = document.querySelector('.day1-humid');
let forecastDay2El = document.querySelector('.forecast-date2');
let day2TempEl = document.querySelector('.day2-temp');
let day2WindEl = document.querySelector('.day2-wind');
let day2HumidEl = document.querySelector('.day2-humid');
let forecastDay3El = document.querySelector('.forecast-date3');
let day3TempEl = document.querySelector('.day3-temp');
let day3WindEl = document.querySelector('.day3-wind');
let day3HumidEl = document.querySelector('.day3-humid');
let forecastDay4El = document.querySelector('.forecast-date4');
let day4TempEl = document.querySelector('.day4-temp');
let day4WindEl = document.querySelector('.day4-wind');
let day4HumidEl = document.querySelector('.day4-humid');
let forecastDay5El = document.querySelector('.forecast-date5');
let day5TempEl = document.querySelector('.day5-temp');
let day5WindEl = document.querySelector('.day5-wind');
let day5HumidEl = document.querySelector('.day5-humid');

const iconSrc = 'https://openweathermap.org/img/wn/';
let icon0El = document.querySelector('.weather-icon-0');
let icon1El = document.querySelector('.weather-icon-1');
let icon2El = document.querySelector('.weather-icon-2');
let icon3El = document.querySelector('.weather-icon-3');
let icon4El = document.querySelector('.weather-icon-4');
let icon5El = document.querySelector('.weather-icon-5');

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

let currentDateFormat = `(${currentMonth}/${currentDay}/${currentYear})`;

let day1Forecast = currentDay + 1;
let day2Forecast = currentDay + 2;
let day3Forecast = currentDay + 3;
let day4Forecast = currentDay + 4;
let day5Forecast = currentDay + 5;

// Create function for what happens when you press submit

let formSubmitHandler = function (event) {
    event.preventDefault();

    let cityName = cityNameEl.value.trim();

    if (cityName !== '') {
        getCurrentWeatherInfo(cityName);
        getForecastInfo(cityName);

        cityNameEl.value = '';

    } else {
        alert('Please enter a city');
    }
    // localStorage.setItem('name', cityName);
};



// Fetch current weather data from open weather API using city name input - want temp, wind and humidity
let getCurrentWeatherInfo = function (city) {
    // API Key and URL setup
    const myKey = config.APIkey;
    const requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + myKey + '&units=imperial';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Check to see what the response is from the fetch so if fetch returns nothing, put error prompt, 
            // make sure it doesn't save in the search list if message: city is not found or if data is equal to empty array, 
            // don't save, prompt error, return function (stop)
            if (data.message === 'city not found' || data === '[]') {
                alert('City not found');
                return;
            }
            addRecentSearch(city);
            console.log(data);
            currentIcon = data.weather[0].icon;
            icon0El.setAttribute('src', iconSrc + currentIcon + '@2x.png');
            icon0El.setAttribute('alt', 'Weather icon');
            currentCityEl.textContent = data.name + ' ' + currentDateFormat;
            currentTempEl.textContent = data.main.temp + ' °F';
            currentWindEl.textContent = data.wind.speed + ' MPH';
            currentHumidEl.textContent = data.main.humidity + ' %';

            // call function that calls both localstorage functions using data.name
        })
};

// Fetch 5 day weather forecast data from open weather API using city name input - want temp, wind and humidity
let getForecastInfo = function (city) {
    // API Key and URL setup
    const myKey = config.APIkey;
    const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + myKey + '&units=imperial';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            forecastDay1El.textContent = `${currentMonth}/${day1Forecast}/${currentYear}`;
            fc1Icon = data.list[5].weather[0].icon;
            icon1El.setAttribute('src', iconSrc + fc1Icon + '@2x.png');
            icon1El.setAttribute('alt', 'Weather icon');
            day1TempEl.textContent = data.list[5].main.temp + ' °F';
            day1WindEl.textContent = data.list[5].wind.speed + ' MPH';
            day1HumidEl.textContent = data.list[5].main.humidity + ' %';

            forecastDay2El.textContent = `${currentMonth}/${day2Forecast}/${currentYear}`;
            fc2Icon = data.list[13].weather[0].icon;
            icon2El.setAttribute('src', iconSrc + fc2Icon + '@2x.png');
            icon2El.setAttribute('alt', 'Weather icon');
            day2TempEl.textContent = data.list[13].main.temp + ' °F';
            day2WindEl.textContent = data.list[13].wind.speed + ' MPH';
            day2HumidEl.textContent = data.list[13].main.humidity + ' %';

            forecastDay3El.textContent = `${currentMonth}/${day3Forecast}/${currentYear}`;
            fc3Icon = data.list[21].weather[0].icon;
            icon3El.setAttribute('src', iconSrc + fc3Icon + '@2x.png');
            icon3El.setAttribute('alt', 'Weather icon');
            day3TempEl.textContent = data.list[21].main.temp + ' °F';
            day3WindEl.textContent = data.list[21].wind.speed + ' MPH';
            day3HumidEl.textContent = data.list[21].main.humidity + ' %';

            forecastDay4El.textContent = `${currentMonth}/${day4Forecast}/${currentYear}`;
            fc4Icon = data.list[29].weather[0].icon;
            icon4El.setAttribute('src', iconSrc + fc4Icon + '@2x.png');
            icon4El.setAttribute('alt', 'Weather icon');
            day4TempEl.textContent = data.list[29].main.temp + ' °F';
            day4WindEl.textContent = data.list[29].wind.speed + ' MPH';
            day4HumidEl.textContent = data.list[29].main.humidity + ' %';

            forecastDay5El.textContent = `${currentMonth}/${day5Forecast}/${currentYear}`;
            fc5Icon = data.list[37].weather[0].icon;
            icon5El.setAttribute('src', iconSrc + fc5Icon + '@2x.png');
            icon5El.setAttribute('alt', 'Weather icon');
            day5TempEl.textContent = data.list[37].main.temp + ' °F';
            day5WindEl.textContent = data.list[37].wind.speed + ' MPH';
            day5HumidEl.textContent = data.list[37].main.humidity + ' %';
        })
};


// Add button event listener to call API search of city weather
userInputEl.addEventListener('submit', formSubmitHandler);

function addRecentSearch(cityName) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    // Check if city is already in recent searches
    if (!recentSearches.some(search => search === cityName)) {
        // Limit recent search to last 7 only
        if (recentSearches.length >= 7) {
            recentSearches.shift(); // Remove the oldest search
        }
        // Check if the city name was found in the API response
        if (cityName !== 'city not found') {
            // Add the new search city name
            recentSearches.push(cityName);
        }
        // Save the updated recent searches in local storage
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }

    // Clear any existing buttons in the container
    const recentSearchButtonsContainer = document.getElementById('recent-search-buttons');
    recentSearchButtonsContainer.innerHTML = '';

    // Create and append a button element for the recent search
    recentSearches.forEach(function (search) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = search; // grab the city name

        // Add an event listener to the button to fetch weather data when clicked
        button.addEventListener('click', function () {
            getCurrentWeatherInfo(search);
            getForecastInfo(search);
        });

        // Append the button to the list of recent searches
        li.appendChild(button);
        recentSearchButtonsContainer.appendChild(li);
    });
}


addRecentSearch('city not found');



// Pseudocode for recent search element
// Display list of recent searches underneath search form
// List of recent searches should be grayed out buttons 
// that are clickable and show results of weather for that specific past searched city when clicked

/* when you search a city, it blanks out the search field but the city name is saved and displayed as a button beneath Recent Searches: 
grab value of input (cityName)
set input.textContent to empty string
use localStorage.getItem() to grab previous searches, or set empty array so we can push cityName need to be converted back into object (json parse)
check if recent is already in recent list: method(same) happens before we check the length
if we want only 5 most recent, we must shift first item out of the array, only if longer than 5
use localStorage.setItem() to capture recent searches, {name: cityName} need to be converted to a json string (stringify) */

/*
localStorage.getItem(name)
for loop for each previously searched item
create element button with previous search name set equal to a variable for both parent and child
add text content to button where text content is cityName
act of clicking button (addEventListener) should call getCurrentWeather and getForecastInfo functions using textcontent(value) as city search
append to recent-search(parent) parent.append(child)

this second section function needs to be called once page is opened
*/
