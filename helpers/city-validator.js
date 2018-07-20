'use strict';
const _ = require('lodash');
const cities = require('./countries.min.json');

exports.isCityValid = function (city) {
  let result = false;
  _.find(cities, function (iter) {
    if (_.includes(iter, city) === true) {
      result = true;
    }
  });

  return result;
}
