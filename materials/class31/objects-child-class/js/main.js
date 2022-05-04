//Create a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound...`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(
      `${this.name} visciously barks at ${beau.name}. For ${beau.name} is a ${beau.species}.`
    );
  }
}
class Bird extends Animal {
  constructor(name, species) {
    super(name);
    this._species = species;
  }
  get species() {
    return this._species;
  }
  speak() {
    super.speak();
    console.log(`${this.name} squawks!`);
  }
}
let beau = new Bird('Beau', 'cockatiel');
let daisy = new Dog('Daisy', 'pit, shepherd');
console.log(beau);
console.log(daisy);
console.log(beau.speak());
console.log(daisy.speak());
