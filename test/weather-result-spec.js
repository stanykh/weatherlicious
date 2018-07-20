var weatherResult = require('../helpers/weather-result');
var expect = require('chai').expect;

describe('Common weather result test', function() {
  describe('Convert OpenWeatherMap to common result format', function() {
    it('should format result in a generic/common format', function() {
      const owmResult = {
        coord: {
          lon: 101.71,
          lat: 3.15
        },
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }],
        base: 'stations',
        main: {
          temp: 27,
          pressure: 1010,
          humidity: 78,
          temp_min: 27,
          temp_max: 27
        },
        visibility: 10000,
        wind: {
          speed: 4.1,
          deg: 160
        },
        clouds: {
          all: 75
        },
        dt: 1532012400,
        sys: {
          type: 1,
          id: 8138,
          message: 0.0072,
          country: 'MY',
          sunrise: 1531955467,
          sunset: 1531999670
        },
        id: 1733046,
        name: 'Kuala Lumpur',
        cod: 200
      }
      let result = weatherResult.formatResult(owmResult.weather[0].main, owmResult.main.temp, owmResult.main.humidity);
      expect(result).to.deep.equal({
        "weather": 'Clouds', "temperature": 27, "humidity": 78
      })

    });
  });  
});      