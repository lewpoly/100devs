// while loop example
let num = 1;
while (num <= 5) {
  console.log(num);
  num++; // if you omit this line, console will log 1 forever...
}

/* Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.
When it's done, improve it so that the number of turns is given by the user. */
const turnCount = Number(prompt('How many turns?'));

// Solution using a for
for (let turn = 1; turn <= turnCount; turn++) {
  console.log(`This is turn number ${turn}`);
}

// Alternative solution using a while
/* let turn = 1;
while (turn <= turnCount) {
  console.log(`This is turn number ${turn}`);
  turn++;
} */

// Parity
// This program shows even numbers between 1 and 10
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

const userNum = Number(prompt('Enter the starting number:'));

for (let i = userNum; i < userNum + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${userNum} is even.`);
  } else {
    console.log(`${userNum} is odd.`);
  }
}

// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// Initial value set to enter the loop
let number = 0;
while (number < 50 || number > 100) {
  number = Number(prompt("Enter a number between 50 and 100:"));
}
