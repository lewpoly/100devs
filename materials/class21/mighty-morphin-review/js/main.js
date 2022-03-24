// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'halloween';
console.log(favHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let charString = 'bizmarkee';
console.log(charString.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subNums(n1, n2, n3, n4, n5) {
  let diff = 100 - n1 - n2 - n3 - n4 - n5;
  console.log(Math.abs(diff));
}
subNums(23, 5, 4, 99, 14);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function logHighLow(n1, n2, n3) {
  let min = Math.min(n1, n2, n3);
  let max = Math.max(n1, n2, n3);
  console.log(`The lowest number is ${min} and the highest number is ${max}`);
}
logHighLow(43, -2, 99);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function randomChance() {
//   let result = Math.random();
//   if (result < 0.5) {
//     return 'heads';
//   } else {
//     return 'tails';
//   }
// }

// A an arrow function 
const randomChance = _ => Math.random() < .5 ? 'heads' : 'tails'
  

// console.log(randomChance());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlam(n) {
  for (let i = 1; i <= n; i++) {
    let result = randomChance();
    console.log(result);
  }
}
flipFlam(1);
