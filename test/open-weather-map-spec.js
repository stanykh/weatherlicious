var owm = require('../controllers/open-weather-map');
var expect = require('chai').expect;

describe('OpenWeatherMap controller test', function() {
  describe('Current weather with valid city names', function() {
    it('should get weather of San Francisco', function() {
      var callback = function (result) {
        expect(result).should.be.a('object');
        expect(result).to.have.keys(['weather', 'temperature', 'humidity']);
      }
      owm.currentWeatherByCity(callback, 'San Francisco');
    });        
  });  

  describe('Current weather with invalid city names', function() {
    it('should get error with city = San Franciscool', function() {
      var callback = function (result) {
        expect(result).should.be.a('object');
        expect(result).to.have.keys(['error_code', 'reason']);
      }
      owm.currentWeatherByCity(callback, 'San Franciscool');
    });  
    
    it('should get error with city = Taiwan', function() {
      var callback = function (result) {
        expect(result).should.be.a('object');
        expect(result).to.have.keys(['error_code', 'reason']);
      }
      owm.currentWeatherByCity(callback, 'Taiwan');
    });      
  });    
});      