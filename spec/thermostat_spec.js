// As a manufacturer
// So I can write instructions to help the User
// I want the thermostat to start at 20 degrees

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('default status', function() {
    it('initializes the Thermostat with 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20)

    });
  });




















});
