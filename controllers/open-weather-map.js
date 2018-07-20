'use strict';
const cityValidator = require('../helpers/city-validator');
const weatherResult = require('../helpers/weather-result');
const owmWrapper = require('openweathermap-node');

const owm = new owmWrapper({
  APPID: '252ab6639c682e688dde02335642286b',
  units: 'metric'
});

exports.currentWeatherByCity = function (callback, city) {
  if (cityValidator.isCityValid(city) === true) {
    owm.getCurrentWeatherByCityName(city, (err, result) => {
      if (err) {
        // error, get previous result
        console.error('OpenWeatherMap error:' + err);
        let json = weatherResult.lastResult(city);
        callback(json);
      } else {        
        let json = weatherResult.formatResult(result.weather[0].main, result.main.temp, result.main.humidity);
        weatherResult.map(city, json);
        callback(json);
      }
    });
  } else {
    // error, invalid city
    // TODO: implement enum
    var json = weatherResult.invalidResult(100, "invalid city name");
    callback(json);
  }
}
