// .forEach() method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach((fruitItem) => console.log(` - ${fruitItem}`));

// .map() method
const numbers = [1, 2, 3, 4, 5];

// const bigNumbers = numbers.map(function (number) {
//   return number * 10;
// });
const firstBigNums = numbers.map((number) => number * 10);
console.log(numbers);
console.log(firstBigNums);

const animals = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

// Create the secretMessage array below
const secretMessage = animals.map((letter) => letter[0]);
console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];
// const smallNumbers = bigNumbers.map((number) => number / 100);
// console.log(bigNumbers);
// console.log(smallNumbers);

// filter() method
const randomNumbers = [375, 200, 3.14, 7, 18, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => number < 250);
console.log(smallNumbers);

const favoriteWords = [
  'nostalgia',
  'hyperbole',
  'fervent',
  'esoteric',
  'serene',
];
// Call filter on favoriteWords
const longFavoriteWords = favoriteWords.filter((word) => word.length > 7);
console.log(longFavoriteWords);

// .findIndex() method
const animals2 = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant',
];
const foundAnimal = animals2.findIndex((ele) => ele === 'elephant');
console.log(foundAnimal);

const startsWithS = animals2.findIndex((s) => s[0] === 's');
console.log(startsWithS);

// .reduce() method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator: ${accumulator}`);
  console.log(`The value of currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

// filters and every
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);
