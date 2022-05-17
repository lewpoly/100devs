//Create an espresso machine class that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(filter, drinks, tank, hopper) {
    this.filter = filter;
    this.drinks = drinks;
    this.tank = tank;
    this.hopper = hopper;
    this.maintenance = function () {
      if (this.tank === 'full') {
        console.log('Time for a refill!');
      } else if (this.filter === 'Dirty') {
        console.log('Time to clean your filter!');
      }
    };
  }
}
const philipsCarina = new EspressoMachine(
  'deluxe',
  'multi',
  'x-large',
  'supreme'
);
const solisBarista = new EspressoMachine('deluxe', 'dual', 'full', "bobbin'");
console.log(philipsCarina);
console.log(solisBarista.maintenance());

class LeonsMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn() {
    console.log('Good day! I am now on!');
  }
  steam() {
    console.log("It's summer sale!");
  }
  brew() {
    console.log('Good stuff coming your way.');
  }
}

let gaggia = new LeonsMachine('red', 'Gaggia', 'Classic Pro', 400);
console.log(gaggia.turnOn());
