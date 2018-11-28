

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
      thermostat.up(1)
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('to decrease temperature', function() {
    it('decreases temperature by 1 degree', function() {
      thermostat.down(1)
      expect(thermostat.temperature).toEqual(19);
    });
    it('has doesnt go below the minimum temperature', function() {
      thermostat.down(10)
      expect(function() {
        thermostat.down(10);
      }).toThrowError('Exceeds minimum temperature');
    });
  });

  describe('power saving mode', function() {
    it('sets the power saving mode on', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('sets the power saving mode off', function() {
      thermostat.powerSaving()
      expect(thermostat.powerSavingMode).toEqual(false);
    });

    it('throws error if the power saving mode exceeds maximum 25 degrees', function() {
      thermostat.up(15);
      expect(function() {
        thermostat.up(15);
      }).toThrowError('Power saving on: Exceeds maximum temperature')
    });



  });

});

// As a person
// So I have flexibility
// I would like to turn off the power saving mode, and increase the maximum temperature
