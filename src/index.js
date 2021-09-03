//⏰Feature #1: In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let minutes = ("0" + now.getMinutes()).slice(-2);
let time = `${now.getHours()}:${minutes}`;
function showTime() {
  let todaysWeather = document.querySelector("#card-title");
  todaysWeather.innerHTML = `Today's Weather <br /> ${day} at ${time}`;
}
showTime();
// 🕵️‍♀️Feature #2: Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
let searchbar = document.querySelector("#search-bar");
function updateCard(response) {
  let todayTemp = document.querySelector("#today-temp");
  let todayPrecipitation = document.querySelector("#today-precipitation");
  let todayWindSpeed = document.querySelector("#today-wind-speed");
  let todayHumidity = document.querySelector("#today-humidity");
  todayTemp.innerHTML = `${Math.round(
    response.data.main.temp_max
  )}°F/${Math.round(response.data.main.temp_min)}°F`;
  todayPrecipitation.innerHTML = `${response.data.clouds.all}% Precipitation`;
  todayHumidity.innerHTML = `Humidity ${response.data.main.humidity}%`;
  todayWindSpeed.innerHTML = `${response.data.wind.speed} mph`;
}
function updateCardMetric(response) {
  let todayTemp = document.querySelector("#today-temp");
  let todayPrecipitation = document.querySelector("#today-precipitation");
  let todayWindSpeed = document.querySelector("#today-wind-speed");
  let todayHumidity = document.querySelector("#today-humidity");
  todayTemp.innerHTML = `${Math.round(
    response.data.main.temp_max
  )}°C/${Math.round(response.data.main.temp_min)}°C`;
  todayPrecipitation.innerHTML = `${response.data.clouds.all}% Precipitation`;
  todayHumidity.innerHTML = `Humidity ${response.data.main.humidity}%`;
  todayWindSpeed.innerHTML = `${response.data.wind.speed} kmph`;
}
function updateHeader(event) {
  event.preventDefault();
  let header = document.querySelector("h1");
  let searchedCity = document.querySelector("#search-bar-input");
  let cityName = searchedCity.value;
  let apiKey = "9e48293c8b29f351e97643479f6049a5";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let unit = "imperial";
  if (searchedCity.value) {
    header.innerHTML = `Now Searching ${cityName}...`;
    let apiUrl = `${apiEndpoint}q=${cityName}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(updateCard);
  } else {
    header.innerHTML = "Please Try Again";
  }
}
searchbar.addEventListener("submit", updateHeader);
function changeTempC(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-bar-input");
  let cityName = searchedCity.value;
  let apiKey = "9e48293c8b29f351e97643479f6049a5";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let unit = "metric";
  let apiUrl = `${apiEndpoint}q=${cityName}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(updateCardMetric);
}
function changeTempF(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-bar-input");
  let cityName = searchedCity.value;
  let apiKey = "9e48293c8b29f351e97643479f6049a5";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}q=${cityName}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(updateCard);
}
let todayTempC = document.querySelector("#today-temp-C");
todayTempC.addEventListener("click", changeTempC);
let todayTempF = document.querySelector("#today-temp-F");
todayTempF.addEventListener("click", changeTempF);
//👨‍🏫Your task: On your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.

//🙀 Bonus point: Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.
