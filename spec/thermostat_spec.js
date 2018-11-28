

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

    it('doesnt go below the minimum temperature', function() {
      expect(function() {
        thermostat.down(10);
      }).toThrowError('Exceeds minimum temperature')

    });
  });

  describe('power saving mode', function() {
    it('sets the power saving mode on', function() {
      expect(thermostat.powerSavingStatus).toEqual(true);
    });

    it('sets the power saving mode off', function() {
      thermostat.powerSaving()
      expect(thermostat.powerSavingStatus).toEqual(false);
    });

    it('throws error if the power saving mode exceeds maximum 25 degrees', function() {
      expect(function() {
        thermostat.up(15);
      }).toThrowError('Power saving on: Exceeds maximum temperature')
    });

    it('changes power saving mode to off, and limits max temperature to 32', function() {
      thermostat.powerSaving()
      expect(function() {
        thermostat.up(12);
      }).toThrowError('Power saving off: Exceeds maximum temperature')
    });
  });

  describe('resets the temperature', function() {
    it('resets the temperature back to 20 degrees', function() {
      thermostat.up(4);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function() {
    it('returns low usage if temperature is < 18', function() {
      thermostat.down(5);
      expect(thermostat.energyUsage()).toEqual('Low-usage');
    });

    it('returns medium usage if temperature is higher than 19, less than 25', function() {
      expect(thermostat.energyUsage()).toEqual('Medium-usage');
    });

    it('returns high usage if temperature is higher than 25', function() {
      thermostat.powerSaving();
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual('High-usage');
    });
  });
});
