//Create a dog object that has four properties and three methods
function dog(breed, color, legs, name) {
  this.breed = 'blue heeler';
  this.color = 'spotted';
  this.legs = 4;
  this.name = 'Lloyd Christmas';
  this.bark = function () {
    console.log('HEY HEY HEY!');
  };
  this.jump = function () {
    console.log('Boiiinnnnng');
  };
  this.fetch = function () {
    console.log("I'm not giving it back.");
  };
}

