function Accumulator(startingValue) {
      
    this.read = function() {
      this.value = startingValue;
    };

  this.value = function() {
    let UserValue = +prompt("x?", '');
    return this.value + this.UserValue;
  };
}

let accumulator = new Accumulator(2);

accumulator.read();
accumulator.read();

alert(accumulator.value);

