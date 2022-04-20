// The this keyword
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());

// Arrow functions and this (don't use)
const robot1 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};
console.log(typeof robot1.energyLevel);

robot1.checkEnergy();

// Privacy
const robot3 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(
      `Recharged! Energy level is currently at ${this._energyLevel}%.`
    );
  },
};
robot3._energyLevel = 'high';

// Getters
const robot4 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      ('System malfunction: cannot retrieve energy level');
    }
  },
};
console.log(robot4.energyLevel);

// Setters
const robot5 = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};
robot5.numOfSensors = 100;
console.log(robot5._numOfSensors);

// Factory Functions
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();

// Destructured Assignment
const robot8 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  },
};
const { functionality } = robot8;
functionality.beep();

// Built-in Object Methods
const robot9 = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot9);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot9);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({
  laserBlaster: true,
  voiceRecognition: true,
});

console.log(newRobot);
