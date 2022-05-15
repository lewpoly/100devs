// *Variables*
// Create a variable and console log the value
let x = 3;
console.log(x);

// Create a variable, add 10 to it, and alert the value
let y = 3;
console.log((y += 10));

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumsAndAlert(a, b, c, d) {
  return a - b - c - d;
}
subFourNumsAndAlert(50, 32, 2, 5);

// Create a function that divides one number by another and returns the remainder
const divTwoNums = (nm1, nm2) => nm1 % nm2;
console.log(divTwoNums(55, 23));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(j, k) {
  let sum = j + k;
  if (sum > 50) {
    console.log('Jumanji');
  }
}
addTwoNums(33, 22);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumbers(n1, n2, n3) {
  let product = n1 * n2 * n3;
  if (product % 3 === 0) {
    console.log('ZEBRA');
  }
}
multiplyThreeNumbers(33, 3, 0);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordXTimes(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
loopWordXTimes('blasphemy', 5);
