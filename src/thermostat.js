function Thermostat() {
  this.temperature = 20
  this.powerSavingMode = true
}

Thermostat.prototype.up = function(number) {
  if (this.powerSavingMode === true && this.temperature >= 25) {
    throw new Error('Power saving on: Exceeds maximum temperature');
  } else if (this.powerSavingMode === false && this.temperature >= 32) {
    throw new Error('Power saving off: Exceeds maximum temperature');
  } else {
    return this.temperature+=number
  }
};

Thermostat.prototype.down = function(number) {
  if (this.temperature <= 10) {
    throw new Error('Exceeds minimum temperature');
  } else {
    return this.temperature-=number
  }
};

Thermostat.prototype.powerSaving = function() {
  if (this.powerSavingMode === true) {
    this.powerSavingMode = false;
  } else {
    this.powerSavingMode = true;
  }
};
