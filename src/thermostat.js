function Thermostat() {
  this.temperature = 20
}

Thermostat.prototype.up = function(number) {
  return this.temperature+=number

};

Thermostat.prototype.down = function(number) {
  if (this.temperature <= 10) {
    throw new Error('Exceeds minimum temperature');
  } else {
    return this.temperature-=number
  }
};
