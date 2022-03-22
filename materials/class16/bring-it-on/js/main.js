// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let num2 = 15;
num2 += 10;
alert(num2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumsAndAlert(a, b, c, d) {
  alert(a - b - c - d);
}
subFourNumsAndAlert(78, 23, 33, 2);

// Create a function that divides one number by another and returns the remainder
function divTwoNums(num1, num2) {
  return num1 % num2;
}
console.log(divTwoNums(75, 4));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
//or
function addTwoNumbersAndAlert(a, b) {
  let sum1 = a + b;
  if (sum1 > 50) {
    alert('Jumanji');
  }
}
addTwoNumbersAndAlert(25, 26);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThree(a, b, c) {
  if ((a * b * c) % 3 === 0) alert('zebra');
}
multThree(33, 3, 1);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNum(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
