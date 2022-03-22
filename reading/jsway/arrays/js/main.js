// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ['Athos', 'Porthos', 'Aramis'];

// shows each array element using a for loop
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

// add an element to the end of the list
musketeers.push("D'Artagnan");

// using forEach
musketeers.forEach((musketeers) => {
  console.log(musketeers);
});

// remove an element
musketeers.splice(2, 1);

// show each array using for-of loop
console.log('So long Aramis!')
for (const musk of musketeers) {
  console.log(musk);
}

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
values.forEach((value) => {
  sum += value;
});

// using reduce
const val1 = [3, 11, 7, 2, 9, 10];
const initialValue = 0;
const sumWithInitial = val1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);

// same thing but with an arrow function
const val2 = [3, 11, 7, 2, 9, 10].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
console.log(val2);

// Write a program that creates the following array, then calculates and shows the array's maximum value.
const val3 = [3, 11, 7, 2, 9, 10];
let maxVal = Math.max(...val3);
console.log(maxVal);

// using reduce instead of spread array using arrow function
const val4 = [3, 11, 7, 2, 9, 10].reduce((a, b) => Math.max(a, b));
console.log(val4);

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
const words = [];
let word = '';
while (word.toLowerCase() !== 'stop') {
  word = prompt('Enter a word, or type stop to quit.');
  if (word.toLowerCase() !== 'stop') {
    words.push(word);
  }
}
console.log('You have entered the following words:')
words.forEach(w => {
  console.log(w)
})
