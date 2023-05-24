const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.OPEN_WEATHER_API_KEY

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

const Weather = require('./weather')
const WeatherClient = require('./weatherClient')

describe('Weather' , () => {
  beforeEach(() => {
    fetch.resetMocks();
  })

  it('calls OpenWeather API and returns data', done => {
    fetch.mockResponseOnce(JSON.stringify({ website: "OpenWeather" }));

    const weatherClient = new WeatherClient();
    weatherClient.fetchWeatherData('London').then((data) => {
      expect(data.website).toEqual("OpenWeather");
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toContain('http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid');
      done();
    })
  })

  it("gets weather data from client", async () => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      main: { temp: 19.97 },
      weather: [{ id: 801 }]
    });

    const weather = new Weather(mockClient);
    await weather.load('London')
    const weatherData = weather.getWeather();
    
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('London');
    expect(weatherData.main.temp).toEqual(19.97);
    expect(weatherData.weather[0].id).toEqual(801);
  });
});