//--- Easy
//create a variable and assign it a number
let x = 100;

//minus 10 from that number
x -= 10;

//print that number to the console
console.log(x);

//--- Medium
//create a variable that holds a value from the input
// let val = Number(document.querySelector('#danceDanceRevolution').value);

//add 25 to that number
// val += 25;

//alert that number
// alert(val);

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1');

h1.addEventListener('click', addTwo);
//add an event listener to that element that console logs the sum of the two previous variables
function addTwo() {
  let val = Number(document.querySelector('#danceDanceRevolution').value);
  val += 25;
  console.log(val + x);
}
