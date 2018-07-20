'use strict';
const express = require('express');
const router = express.Router();
const moment = require('moment');
const util = require('util');
const owm = require('../controllers/open-weather-map');

function response(res, status, jsonString) {
  res.writeHead(status, {'Content-Type': 'application/json','Content-Length' : Buffer.byteLength(jsonString, 'utf8')});  
  res.end(jsonString);
}

router.use(function timeLog (req, res, next) {
  //console.log('Timestamp: ' + moment().format('LLLL'));
  next();
});

router.get('/city/:id', function (req, res) {
  console.log('Query city:' + req.params.id);
  var callback = function(result) {
    // Got the result
    response(res, 200, JSON.stringify(result));
  }
  owm.currentWeatherByCity(callback, req.params.id);  
});

router.get('/coordinates', function (req, res) {
  res.send('Query by coordinates');
});

router.get('/zipcode', function (req, res) {
  res.send('Query by ZipCode');
});

module.exports = router;