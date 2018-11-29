function Thermostat() {
  this.temperature = 20
  this.defaultTemperature = 20
  this.powerSavingStatus = true
  this.minTemperature = 10
  this.lowUsage = 18
  this.mediumUsage = 25
  this.powerSavingOnMax = 25
  this.powerSavingOffMax = 32

}



Thermostat.prototype.up = function() {
  this._powerSavingOnExceedsMaxTemp();
  if (this.powerSavingStatus === false && (this.temperature + 1) >= this.powerSavingOffMax) {
    throw new Error('Power saving off: Exceeds maximum temperature');
    return;
  } else {
    return this.temperature += 1
  }
};

Thermostat.prototype.down = function() {
  if ((this.temperature - 1) <= this.minTemperature) {
    throw new Error('Exceeds minimum temperature');
    return;
  } else {
    return this.temperature -= 1
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

Thermostat.prototype._powerSavingOnExceedsMaxTemp = function() {
  if (this.powerSavingStatus === true && (this.temperature + 1) >= this.powerSavingOnMax) {
    throw new Error('Power saving on: Exceeds maximum temperature');
    return;
  }
};
