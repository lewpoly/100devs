//Arrays
let nums = [2, 3, 4];
nums[0];
nums[0] = 15;
console.log(nums);

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// acc = accumulation c = current value -- can be anything
let arrNums = [2, 5, 22, 65];
let sum = arrNums.reduce((acc, c) => acc + c, 0);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let arrNums2 = [2, 5, 22, 65];
let numsSquared = arrNums2.map((n) => n * n);
console.log(numsSquared);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str) {
  let reverseStr = str.split(' ').reverse().join(' ');
  console.log(reverseStr);
}
reverseStr("Bonita applebum you got it goin' on");

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPali = (s) =>
  s === s.split('').reverse().join('') ? console.log('yes') : console.log('no');
console.log(isPali('racecar'));

// More traditional
function isPalindrome(str) {
  let reverseString = str.split('').reverse().join('');
  if (str === reverseString) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
console.log(isPalindrome('leonnoel'));

// Sort - ? from class.
Array.sort((a, b) => a - b);
