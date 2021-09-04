let weather = {
  API_KEY: '5c93eba9f804f5ffb417bc2709379aab',
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?q="
      + city
      + "&cnt=7&units=metric&APPID="
      + API_KEY
    )
    .then((response => response.json())
    .then((data) => console.log(data)))
  },
  displayWeather: function(data) {
const { name } = data;
const { icon, description } = data.weather[0];
const { temp, humidity}
const { speed } = data.wind;
document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src = "https://openweathermap.org/img/w/"+ icon + "@2x.png";
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click", function (){
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
})