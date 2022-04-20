// Object Literal
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver',
};

// Accessing Properties
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn'],
};

const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

// Bracket Notation
let spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5,
};

let propName = 'Active Mission';
let isActive = spaceship2['Active Mission'];
console.log(spaceship2['Active Mission']);

let spaceship3 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.',
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 3;
delete spaceship3['Secret Mission'];
console.log(spaceship3['Secret Mission']);

// Methods
let retreatMessage =
  'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
};
console.log(alienShip.retreat());
console.log(alienShip.takeOff());

// Nested Objects
let spaceship5 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() {
        console.log('We got this!');
      },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
    },
  },
  engine: {
    model: 'Nimbus2000',
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD',
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50,
    },
  },
};
const capFave = spaceship5.crew.captain['favorite foods'][0];
spaceship5.passengers = [
  {
    crewMember: 'Alice',
  },
];
const firstPassenger = spaceship5.passengers[0];
console.log(firstPassenger.crewMember);

// Pass By Reference
let spaceship6 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

let greenEnergy = (spaceship6) => {
  spaceship6['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};
greenEnergy(spaceship6);
remotelyDisable(spaceship6);
console.log(
  ` This spaceship uses ${spaceship6['Fuel Type']} to traverse the solar system, leaving ${spaceship6.homePlanet} in its shell to rot`
);

// Looping through objects
let spaceship7 = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      },
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      },
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      },
    },
  },
};

for (let crewMember in spaceship7.crew) {
  console.log(`${crewMember}: ${spaceship7.crew[crewMember].name}`);
}

for (let crewMember in spaceship7.crew) {
  console.log(
    `${spaceship7.crew[crewMember].name}: ${spaceship7.crew[crewMember].degree}`
  );
}
