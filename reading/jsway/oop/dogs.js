// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

class Dog {
  constructor(name, species, size, str) {
    this.name = name;
    this.species = species;
    this.size = size;
    this.bark = str;
  }

  // Dog bark function
  bark() {
    let response = 'Woof! Woof!';
    if (this.size > 60) {
      response = 'Grrr! Grrr!';
    }
    return response;
  }
}

const fang = new Dog('Fang', 'boarhound', 75, 'Grrr! Grrr!');
console.log(`${fang.name} is ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark}`);

const snowy = new Dog('Snowy', 'terrier', 22, 'Woof! Woof!');
console.log(`${snowy.name} is ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark}`);
