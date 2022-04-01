//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods
function skatingGame() {
  this.name = charName;
  this.trickType = trick;
  this.stance = charStance;
  this.sponsor = charSponsor;
  this.specialMove = charMove;
  this.flip = function () {
    console.log('Kickflip!');
  };
  this.taunt = function () {
    console.log(`Don't make me use my ${this.specialMove}`);
  };
  this.grab = function () {
    console.log('Melon Grab!!!');
  };
}

let kareemCampbell = new skatingGame(
  'Kareem',
  'bluntslide',
  'goofy',
  'Element',
  'Ghetto Bird'
);
