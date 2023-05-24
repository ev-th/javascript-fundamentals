const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.OPEN_WEATHER_API_KEY

class WeatherClient {
  fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    return fetch(apiUrl)
      .then(response => response.json())
  }
}

module.exports = WeatherClient;