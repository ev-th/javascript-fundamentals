const dotenv = require('dotenv')
const anything = require('./weatherClient')

// dotenv.config()
// const apiKey = process.env.OPEN_WEATHER_API_KEY

// // file: index.js

// const city = 'London';
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// let weatherData = null;

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((weatherData) => {
//     console.log(weatherData.main)
//     console.log(weatherData.weather[0].main)
//   });

// console.log('Requesting weather data');


const a = new anything.weather()
const b = new anything.weatherClient()

console.log(a)
console.log(b)
console.log(a.test())