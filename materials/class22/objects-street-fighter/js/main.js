//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSFCharacter(punch, kick, catchPhrase, specialMove) {
  this.punch = punch;
  this.kick = kick;
  this.catchPhrase = catchPhrase;
  this.specialMove = specialMove;
  this.taunt = function () {
    console.log(`You can\'t handle my ${this.specialMove}`);
  };
  this.winning = function () {
    console.log(`hah! ${this.catchPhrase}`);
  };
  this.dash = function () {
    console.log('Whooop, missed me!');
  };
}
let ryu = new MakeSFCharacter(
  'high',
  'high',
  'Get OVER HERE',
  'HADOOOOOUUUKEN!'
);

let drink = {
  brand: 'Sprite',
  size: '12 oz',
  pour: function () {
    console.log('I love me some Sprite.');
  },
};
console.log(drink);

drink.brand = 'Gatorade';
drink.size = '20 fl oz';
drink.color = 'Yellow';
drink.hasAlcohol = false;
drink.pour = function () {
  console.log('Now it is all over the floor.');
};
