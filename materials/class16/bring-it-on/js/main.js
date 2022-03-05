// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let num2 = 11;
num2 = num2 + 10;
alert(num2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums(a, b, c, d) {
  alert(a - b - c - d);
}
subFourNums(35, 2, 3, 1);

// Create a function that divides one number by another and returns the remainder
function divTwoNums(a, b) {
  return a % b;
}
console.log(divTwoNums(25, 5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumsAndDiv(a, b) {
  if (a + b > 50) {
    alert('JUMANJI');
  }
}
addTwoNumsAndDiv(33, 39);
//or
function otherWay(thisWorksToo) {
  if (thisWorksToo > 50) {
    alert('JUMANJI');
  }
}
otherWay(50 + 20);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThreeNums(a, b, c) {
  if ((a * b * c) % 3 === 0) {
    alert('ZEBRA');
  }
}
multThreeNums(33, 3, 1);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function alotToLearn(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
alotToLearn('savage', 21);
