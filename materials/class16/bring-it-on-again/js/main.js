// *Variables*
// Declare a variable, assign it a value, and alert the value
const userName = 'Lew';
alert(userName);

// Create a variable, divide it by 10, and console log the value
const num = 100;
console.log(num / 10);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThreeNums(a, b, c) {
  let fringe = a * b * c;
  alert(fringe);
}
multThreeNums(20, 20, 20);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNums(n1, n2, n3, n4) {
  const result = n1 + n2 - n3 - n4;
  console.log(result);
}
fourNums(83, 22, 8, 2);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function determineWinna(n1, n2, n3) {
  const result = (100 + n1 - n2) / n3;
  if (result > 25) {
    console.log('WE HAVE A WINNA');
  }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day) {
  const dayOfWeekLower = day.toLowerCase();
  if (dayOfWeekLower === 'saturday' || dayOfWeekLower === 'sunday') {
    alert('weekend');
  } else if (
    dayOfWeekLower === 'monday' ||
    dayOfWeekLower === 'tuesday' ||
    dayOfWeekLower === 'wednesday' ||
    dayOfWeekLower === 'thursday' ||
    dayOfWeekLower === 'friday'
  ) {
    alert('weekday');
  } else {
    alert('Try Again!!');
  }
}
dayOfWeek('lemmings');
dayOfWeek('FRIDAY');
dayOfWeek('Saturday');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but count by 3
function logToNumByThree(num) {
  for (let i = 1; i <= num; i += 3) {
    console.log(i);
  }
}
logToNumByThree(9);
