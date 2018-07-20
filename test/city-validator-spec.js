var city = require('../helpers/city-validator');
var expect = require('chai').expect;

describe('City validator test', function() {
  describe('Valid Cities', function() {
    it('should found the city Kuala Lumpur', function() {
      var result = city.isCityValid('Kuala Lumpur');
      expect(result).to.equal(true);
    });

    it('should found the city London', function() {
      var result = city.isCityValid('London');
      expect(result).to.equal(true);
    });    
  }); 
  
  describe('Invalid Cities', function() {
    it('should not identify Thailand as city', function() {
      var result = city.isCityValid('Thailand');
      expect(result).to.equal(false);
    });

    it('should not identify Switzerland as city', function() {
      var result = city.isCityValid('Switzerland');
      expect(result).to.equal(false);
    });   
    
    it('should not identify Taiwan as city', function() {
      var result = city.isCityValid('Taiwan');
      expect(result).to.equal(false);
    });       
  });   
});      