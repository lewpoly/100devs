//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const array1 = [2, 8, 11, 13];

const map1 = array1.map((x) => x % 2 === 0);
console.log(map1);

// Leons' Solution:
function onlyEvens(nums) {
  let evens = [];
  nums.forEach((x) => {
    if (x % 2 === 0) {
      evens.push(x);
    }
  });

  return evens;
}
console.log(onlyEvens([1, 2, 3, 4, 5, 6]));
