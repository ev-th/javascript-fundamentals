class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData = null;
  }

  load(city) {
     return this.client.fetchWeatherData(city)
       .then(data => this.weatherData = data)
  }

  getWeather() {
    return this.weatherData
  } 
}

module.exports = Weather;