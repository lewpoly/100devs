class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let simba = new Dog('Simba', 'Sheperd');
console.log(simba.breed);
console.log(simba.name);
console.log(simba.speak());
