const search = document.querySelector(".weather-header input");
const city = document.querySelector(".weather-content-location-city");
const country = document.querySelector(".weather-content-location-country");
const time = document.querySelector(".weather-content-location-time");
const value = document.querySelector(".weather-content-temperature h3");
const clouds = document.querySelector(".weather-content-temperature-clouds");
const visibility = document.querySelector(
  ".weather-content-infor-visibility p"
);
const wind = document.querySelector(".weather-content-infor-wind p");
const weather = document.querySelector(".weather-content-infor-weather p");
const content = document.querySelector(".weather-content");

async function changeWeatherUi() {
  let capitalSearch = search.value.trim();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=7f1fe7f6b95a88ff35012b5c7c8ca565`;
  let data = await fetch(apiUrl).then((res) => res.json());
  console.log(data);
  if (data.cod == 200) {
    content.classList.remove("hidden");
    city.innerText = data.name + ", ";
    country.innerText = data.sys.country;
    clouds.innerText = data.weather[0].description;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m";
    weather.innerText = data.main.humidity + "%";
    value.innerText = Math.round(data.main.temp - 273.15);
    time.innerText = new Date().toLocaleDateString("vi");
  } else {
    content.classList.add("hidden");
  }
}
search.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    changeWeatherUi();
  }
});
