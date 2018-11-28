function Thermostat() {
  this.temperature = 20
  this.powerSaving = true
}

Thermostat.prototype.up = function(number) {
  if (this.powerSaving === true && this.temperature >= 25) {
    throw new Error('Power saving on: Exceeds maximum temperature');
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
