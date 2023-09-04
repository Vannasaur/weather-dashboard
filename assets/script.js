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

//const iconSrc = 'https://openweathermap.org/img/wn/' --------------FROM KYLE


// Create function for what happens when you press submit
let formSubmitHandler = function (event) {
    event.preventDefault();

    let cityName = cityNameEl.value.trim();

    if (cityName !== '') {
        getCurrentWeatherInfo(cityName);
        getForecastInfo(cityName);

        //currentWeatherEl.textContent = '';
        cityNameEl.value = '';

    } else {
        alert('Please enter a city');
    }
};



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
        // .catch (function (error)) - check to see what the response is from the fetch so if fetch returns nothing, put error prompt, make sure it doesn't save in the search list if message: city is not found or if data is equal to empty array, don't save, prompt error, return function (stop)
        if (data.message === "city not found" || data === '[]') {
            alert('City not found');
            return;
        }
        console.log(data);
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
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // if condition for current time? if current time is before 2pm? then start at index 0, else, start at index 1? 
            forecastDay1El.textContent = `${currentMonth}/${day1Forecast}/${currentYear}`;
            day1TempEl.textContent = data.list[5].main.temp + ' °F';
            day1WindEl.textContent = data.list[5].wind.speed + ' MPH';
            day1HumidEl.textContent = data.list[5].main.humidity + ' %';
            forecastDay2El.textContent = `${currentMonth}/${day2Forecast}/${currentYear}`;
            day2TempEl.textContent = data.list[13].main.temp + ' °F';
            day2WindEl.textContent = data.list[13].wind.speed + ' MPH';
            day2HumidEl.textContent = data.list[13].main.humidity + ' %';
            forecastDay3El.textContent = `${currentMonth}/${day3Forecast}/${currentYear}`;
            day3TempEl.textContent = data.list[21].main.temp + ' °F';
            day3WindEl.textContent = data.list[21].wind.speed + ' MPH';
            day3HumidEl.textContent = data.list[21].main.humidity + ' %';
            forecastDay4El.textContent = `${currentMonth}/${day4Forecast}/${currentYear}`;
            day4TempEl.textContent = data.list[29].main.temp + ' °F';
            day4WindEl.textContent = data.list[29].wind.speed + ' MPH';
            day4HumidEl.textContent = data.list[29].main.humidity + ' %';
            forecastDay5El.textContent = `${currentMonth}/${day5Forecast}/${currentYear}`;
            day5TempEl.textContent = data.list[37].main.temp + ' °F';
            day5WindEl.textContent = data.list[37].wind.speed + ' MPH';
            day5HumidEl.textContent = data.list[37].main.humidity + ' %';
        })
    };

// Display current weather data on top of page
// let displayCurrent = function ()
// Display 5 day forcast underneath, in card format (must get midday temp, not midnight temp) once at a certain screen size, get it to stack

// Add button event listener to call API search of city weather
userInputEl.addEventListener('submit', formSubmitHandler);

// Display list of recent searches underneath search form
// List of recent searches should be grayed out buttons 
// that are clickable and show results of weather for that specific past searched city when clicked

/* when you search a city, it blanks out the search field but the city name is saved and displayed as a button beneath Recent Searches: 
grab value of input (cityName)
set input.textContent to empty string
use localStorage.getItem() to grab previous searches, or set empty array so we can push cityName need to be converted back into object (json parse)
check if recent is already in recent list: method(same) happens before we check the length
if we want only 5 most recent, we must shift first item out of the array, only if longer than 5
use localStorage.setItem() to capture recent searches, {name: cityName} need to be converted to a json string (stringify)


localStorage.getItem(name)
for loop for each previously searched item
create element button with previous search name set equal to a variable for both parent and child
add text content to button where text content is cityName
act of clicking button (addEventListener) should call getCurrentWeather and getForecastInfo functions using textcontent(value) as city search
append to recent-search(parent) parent.append(child)

this second section function needs to be called once page is opened
*/
