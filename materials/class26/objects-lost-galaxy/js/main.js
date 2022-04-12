//Create a pizza object that has four properties and three methods

// using is literal notation
const pizza = {};
pizza.toppings = ['pepperoni', 'olives'];
pizza.crust = 'thin';
pizza.size = 'large';
pizza.sauce = 'classic';
pizza.delivery = function () {
  console.log('Do you want pick up or delivery?');
};
pizza.burnMouth = function () {
  console.log('hafuhfuhfuhfuhfuhfuh!');
};
pizza.frisbee = function () {
  console.log('Yeeeeeeeet!');
};

// Using constructor
function Pizza(pizzaToppings, pizzaCrust, pizzaSize, pizzaSauce) {
  this.toppings = pizzaToppings;
  this.crust = pizzaCrust;
  this.size = pizzaSize;
  this.sauce = pizzaSauce;
  this.delivery = function () {
    console.log('Do you want pick up or delivery?');
  };
  this.burnMouth = function () {
    console.log('hafuhfuhfuhfuhfuhfuh');
  };
  this.frisbee = function () {
    console.log('Yeeeeeeeet');
  };
}
let cust1Pizza = new Pizza(
  ['pepperoni', 'olives', 'green pepper'],
  'thin',
  'large',
  'traditional'
);
console.log(cust1Pizza);
console.log(cust1Pizza.toppings.length);
console.log(cust1Pizza.toppings.slice(-1));
