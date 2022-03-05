//---Easy
//create a function that subtracts two numbers and alerts the difference
function diff(a, b) {
  alert(a - b);
}
diff(9, 4);

//create a function that divides three numbers and console logs the quotient
function quot(a, b, c) {
  alert(a / b / c);
}
quot(98, 9, 4);

//create a function that multiplys three numbers and returns the product
function pro(a, b, c) {
  return a * b * c;
}
function turnIntoMoney() {
  let product = pro(53, 49, 44);
  alert('$' + product);
}
turnIntoMoney();

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(a, b, c) {
  return (a + b) % c;
}
let arise = addTwoAndDivide(78, 33, 2);
console.log(arise)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
