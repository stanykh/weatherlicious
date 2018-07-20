'use strict';
const cityValidator = require('../helpers/city-validator');
const weatherResult = require('../helpers/weather-result');
const owmWrapper = require('openweathermap-node');

'use strict';
const nconf = require('nconf');
nconf.argv().env();
const owmAppId = nconf.get('OWM_APPID');

if (owmAppId === undefined) {
  console.error("OWM_APPID not set. \'export OWM_APPID=<your app id>\'");
}

const owm = new owmWrapper({
  APPID: owmAppId,
  units: 'metric'
});

exports.currentWeatherByCity = function (callback, city) {
  if (cityValidator.isCityValid(city) === true) {
    owm.getCurrentWeatherByCityName(city, (err, result) => {
      if (err) {
        // error, get previous result
        console.error('OpenWeatherMap error:' + err);
        let json = weatherResult.lastResult(city);
        // there is no last result
        if (json === undefined) {
          // TODO: implement enum for error code
          json = weatherResult.invalidResult(101, "API error");
        }
        callback(json);
      } else {        
        let json = weatherResult.formatResult(result.weather[0].main, result.main.temp, result.main.humidity);
        weatherResult.map(city, json);
        callback(json);
      }
    });
  } else {
    // error, invalid city
    // TODO: implement enum for error code
    let json = weatherResult.invalidResult(100, "invalid city name");
    callback(json);
  }
}
