// *
// *  the only endpoint for making free API calls is api.openweathermap.org.

// * A user should be able to enter a city into the url, click "Search" and get weather data on the city they entered.

// * fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}").then(function () {
// *   //do stuff })    this is how fetch prefix
// *   // *
// * });

// * Example of API response
// * {
// * "zip": "90210",
// * "name": "Beverly Hills",
// * "lat": 34.0901,
// * "lon": -118.4065,
// * "country": "US"
// * }

const searchBar = document.querySelector(".search-bar");

// * const searchBarValue = searchBar.value;

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  // * we need to insert lan lon and api key I think

  let API_KEY = "{6275bae3ce774562cbf599a7bd2d7ad9}";
  // * need to make a LAT / LON / API KEY variable to make things cleaner
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((response) => {
      console.log(response);
      console.log(fetch);
      let lat = response.lat;
      let lon = response.lon;

      return response.json();
    })
    .then((data) => {});
});
console.log("searchBarValue");
