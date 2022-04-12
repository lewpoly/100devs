//Create a constructor with 4 properties and 3 methods

// guess we're doing another pizza constructor
function Pizza(pizzaToppings, pizzaSauce, pizzaSize, pizzaCrust) {
  this.toppings = pizzaToppings;
  this.sauce = pizzaSauce;
  this.size = pizzaSize;
  this.crust = pizzaCrust;
  this.delivery = function () {
    console.log('Delivery or takeout?');
  };
  this.burnMouth = function () {
    console.log('hafuhfuhfuhfuhfuhfuh');
  };
  this.pieFace = function () {
    console.log('fwappppp!');
  };
}
let customerPizza1 = new Pizza(
  ['anchive', 'pepperoni', 'mushroom', 'jalapeno'],
  'traditional',
  'small',
  'sicilian'
);

Pizza.prototype.cheese = false;
console.log(customerPizza1.cheese)
