
function SpecHelper(){

}

SpecHelper.prototype.down = function(argument, number) {
  for (count = 0; count < number; count++) {
    argument.down();
  }
}
SpecHelper.prototype.up = function(argument, number) {
  for (count = 0; count < number; count++) {
    argument.up();
  }
}
