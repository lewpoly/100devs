//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class SFcharacter {
  constructor(name, origin, height, weight) {
    this.name = name;
    this.origin = origin;
    this.height = height;
    this.weight = weight;
  }
  intro() {
    console.log(`My name is ${this.name} and I come from ${this.origin}.`);
  }
}
let ryu = new SFcharacter('Ryu', 'Japan', `6' 2"`, '240');
console.log(ryu)
console.log(ryu.intro())
