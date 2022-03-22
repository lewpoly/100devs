//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function arrayFromFunction() {
  return Array.from(arguments);
}

// let arrayFromFunction = a => Array.from(a);

console.log(arrayFromFunction(1, 2, 3, 4, 5));

// kinda, but doesn't include num
function arrFromNum(num) {
  return Array.from(Array(num).keys());
}
console.log(arrFromNum(8));

