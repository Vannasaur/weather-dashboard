// Global Variables
let userInputEl = document.getElementById('user-input');
let cityNameEl = document.getElementById('city-name');
let currentWeatherEl = document.querySelector('.current-weather');


// Display city search on left side of page

// Create function for what happens when you press submit
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
            alert('City not found')
            return;
        }
        
        console.log(data);
        //displayCurrent(data)
        // var=name, =temp, =humidity
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
