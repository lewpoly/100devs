// *Variables*
// Create a variable and console log the value
let userName = 'Lewis';
console.log(userName);

// Create a variable, add 10 to it, and alert the value
let exNum = 94;
alert(exNum + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function diff(a, b, c, d) {
  return a - b - c - d;
}
let result = diff(94, 16, 15, 8);
alert(result);

// or
function x() {
  let e = 50 - 12 - 8 - 9;
  alert(e);
}
x();

// Create a function that divides one number by another and returns the remainder
function quotient(a, b) {
  return a / b;
}
let quotResult = quotient(90, 10);
console.log(quotResult);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function letKnow(above) {
  if (above > 50) {
    alert('Jumanji');
  }
}
letKnow(90 + 48);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divThree(modu) {
  if (modu % 3 === 0) {
    alert('zebra');
  }
}
divThree(99);
