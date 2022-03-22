const num = Number(prompt('Enter a number:'));
if (num > 0) {
  alert(`${num} is positive.`);
}

const number = Number(prompt('Enter a number:'));
if (number >= 0) {
  console.log(`${number} is positive or zero`);
}

// Alternative Conditions
const num3 = Number(prompt('Enter a number:'));
if (num3 > 0) {
  console.log(`${num3} is positive`);
} else {
  console.log(`${num3} is negative or zero`);
}

// Nesting Conditions
const num4 = Number(prompt('Enter a number:'));
if (num4 > 0) {
  console.log(`${num4} is positive`);
} else {
  if (num4 < 0) {
    console.log(`${num4} is negative`);
  } else {
    console.log(`${num4} is zero`);
  }
}

// Better way to write the same conditional
const num5 = Number(prompt('Enter a number:'));
if (num5 > 0) {
  console.log(`${num5} is positive`);
} else if (num5 < 0) {
  console.log(`${num5} is negative`);
} else {
  console.log(`${num5} is zero`);
}

// "And" operator
if ((number >= 0) && (number <= 100)) {
  console.log(`${number} is between 0 and 100, both included`);
}

/* Number of days in a month problem
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account. */
const month = Number(prompt("Enter a month number:"));

// Solution using if
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  alert("This month has 31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  alert("This month has 30 days");
} else if (month === 2) {
  alert("This month has 28 days");
} else {
  alert("Unknown month!");
}

/* Following second problem
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account. */
let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

// We start by testing errors cases
if (
  hours >= 0 &&
  hours <= 23 &&
  minutes >= 0 &&
  minutes <= 59 &&
  seconds >= 0 &&
  seconds <= 59
) {
  seconds++; // Incrementing the seconds
  if (seconds === 60) {
    // Next minute: seconds are reset to 0
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      // Next hour: minutes are reset to 0
      minutes = 0;
      hours++;
      if (hours === 24) {
        // Next second is midnight
        hours = 0;
      }
    }
  }
  console.log(
    `In a second, time will be ${hours} hours, ${minutes} minutes et ${seconds} seconds`
  );
} else {
  console.log("Incorrect hour!");
}
