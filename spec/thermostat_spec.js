// As a person
// So I can keep warm in the winter
// I want to be able to increase the temperature of the thermostat

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('default status', function() {
    it('initializes the Thermostat with 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);

    });
  });

  describe('to increase temperature', function() {
    it('increases temperature by 1 degree', function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    });
  });




















});
