// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

class Dog {
  constructor(name, species, size, str) {
    this.name = name;
    this.species = species;
    this.size = size;
    this.bark = str;
  }
  describe() {
    return `${this.name} is ${this.species} dog measuring ${this.size}`;
  }
  attack() {
    return `Look, a cat! ${this.name} barks: ${this.bark}`;
  }
}

const fang = new Dog('Fang', 'boarhound', 75, 'Grrr! Grrr!');
const snowy = new Dog('Snowy', 'terrier', 22, 'Woof! Woof!');
console.log(fang.describe());
console.log(fang.attack());
console.log(snowy.describe());
console.log(snowy.attack());
