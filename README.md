# Weather Dashboard - Module 6 Challenge

## Description

This Weather Dashboard allows you to search for a city, then displays the current temperature, wind and humidity along with the 5-day forecast. This application retrieves data from Open Weather API and dynamically updates HTML and CSS according to the weather data. This Weather Dashboard uses local storage to store any recent searches. Please see User Story and Acceptance Criteria below: 

User Story: 

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

Acceptance Criteria:

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Installation

N/A

## Usage

To view weather information, enter a city name in the search bar and click the search button. The current temperature, wind and humidity for the searched city will appear on the page, along with the 5-day forecast for that city. 

Once a city is searched, it becomes a button in the Recent Searches section underneath the search bar. If you have seven unique recent searches, the next unique search will be added to the list and the oldest search in the list will be removed. Each item in the recent searches section is a button, that when clicked, will bring up the weather details for that city. 

The list of cities in recent searches are saved in local storage and will persist upon page reload until manually removed from local storage. 

If nothing is entered in the search bar and the search button is clicked, you will see an alert saying 'Please enter a city'. If you enter text that is not a city name, you will see an alert saying 'City not found'. 

 Link to deployed application: https://vannasaur.github.io/weather-dashboard/

## Credits

Included Bootstrap CSS via CDN (see link in HTML)

Included Google Fonts via links, font family: Montserrat Alternates  (see links in HTML)

## License

MIT License, please refer to the LICENSE in the repo.


![_Users_giovannaluciano_bootcamp_challenges_module-6_index html_](https://github.com/Vannasaur/weather-dashboard/assets/141793843/cd58cb74-ec43-4a12-b08c-4e7f58cac7d1)