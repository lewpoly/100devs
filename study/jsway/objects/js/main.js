// TODO: create the character object here
const aurora = {
  health: 150,
  strength: 25,
  xp: 0,
  describe() {
    return `Aurora has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
  },
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// TODO: create the dog object here
const dog = {
  name: 'Tyrus',
  species: 'Catahoula',
  size: '80 pounds',
  bark() {
    return 'Stop hiding under that car!!! I can see you!!!';
  },
};

console.log(
  `${dog.name} is a ${dog.species} Leopard Dog measuring ${dog.size}`
);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Complete the following program to add the circle object definition. Its radius value is input by the user.
const r = Number(prompt('Enter the circle radius:'));

// TODO: create the circle object here
const circle = {
  radius: r,
  circumference() {
    return 2 * Math.PI * this.radius;
  },
  area() {
    return Math.PI * r ** 2;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

const account = {
  name: 'Alex',
  balance: 0,
  credit(amount) {
    this.balance += amount;
  },
  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  },
};
console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
