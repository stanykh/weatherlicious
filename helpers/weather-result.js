'use strict';
var HashTable = require('hashtable');
var hashtable = new HashTable();

function lastResult(city) {
  return hashtable.get(city);
}

// store last result
function map(city, result) {
  hashtable.put(city, result);  
}

// standard weather format for any weather API
function formatResult(weatherDesc, temperature, humidity) {
  let json = {
    "weather": weatherDesc, 
    "temperature": temperature, 
    "humidity": humidity
  };
  return json;
}

function invalidResult(errorCode, reason) {
  let json = {
    "error_code": errorCode,
    "reason": reason
  }
  return json;
}

// Public
var self = module.exports = {
  weatherResult: this.weatherResult,
  map: map,
  lastResult: lastResult,
  formatResult: formatResult,
  invalidResult: invalidResult
}

