// *  search  bar where city should go
const searchBar = document.querySelector(".search-bar");

// * search button
const searchButton = document.querySelector(".search-button");

// *  degree div. where degree info should go
const degree = document.querySelector(".degree");

// * city weather info should go here
const cityWeatherInfoContainer = document.querySelector(".scity-weather-info-container");

// * keydown listener listens for keys being pressed.
searchBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

searchButton.addEventListener("click", function () {
  // * we need to insert lan lon and api key I think

  let city = searchBar.value;

  let API_KEY = "6275bae3ce774562cbf599a7bd2d7ad9";

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
    .then((response) => response.json())

    .then((data) => {
      console.log(data[0]);

      let lat = data[0].lat;

      let lon = data[0].lon;

      let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then((response) => response.json())

        .then((data) => {
          console.log(data);
          let weatherDesc = data.list[0].main.temp;
          degree.textContent = weatherDesc;
        })

        .catch((error) => {
          console.log(error);
        });
    });
});
