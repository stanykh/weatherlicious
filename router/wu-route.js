'use strict';
const express = require('express');
const router = express.Router();
const moment = require('moment');
const util = require('util');

// No Free-tier available 
router.use(function timeLog (req, res, next) {
  console.log('Timestamp: ' + moment().format('LLLL'));
  next();
})

router.get('/city/:id', function (req, res) {
  //res.send('Query by City');
})

router.get('/coordinates', function (req, res) {
  //res.send('Query by coordinates');
})

router.get('/zipcode', function (req, res) {
  //res.send('Query by ZipCode');
})

module.exports = router