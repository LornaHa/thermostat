function Thermostat() {
  this.temperature = 20
  this.defaultTemperature = 20
  this.powerSavingStatus = true
  this.lowUsage = 18
  this.mediumUsage = 25
  this.powerSavingOnMax = 25
  this.powerSavingOffMax = 32

}

Thermostat.prototype.up = function(number) {
  if (this.powerSavingStatus === true && (this.temperature + number) >= this.powerSavingOnMax) {
    throw new Error('Power saving on: Exceeds maximum temperature');
    return;
  } else if (this.powerSavingStatus === false && (this.temperature + number) >= this.powerSavingOffMax) {
    throw new Error('Power saving off: Exceeds maximum temperature');
    return;
  } else {
    return this.temperature += number
  }
};

Thermostat.prototype.down = function(number) {
  if ((this.temperature - number) <= 10) {
    throw new Error('Exceeds minimum temperature');
    return;
  } else {
    return this.temperature -= number
  }
};

Thermostat.prototype.powerSaving = function() {
  this.powerSavingStatus = true ? false : true
};


Thermostat.prototype.reset = function() {
  this.temperature = this.defaultTemperature
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.lowUsage) {
    return 'Low-usage';
  } else if (this.temperature < this.mediumUsage) {
    return 'Medium-usage';
  } else {
    return 'High-usage';
  }
};
