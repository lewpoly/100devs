// 3,2,1... Code!
console.log('Hello from JavaScript!');
console.log('this is\na multiline string');
console.log('Hel' + 'lo');
console.log(4 + 5);
console.log('4 + 5');
console.log('4' + '5');

// Play with variables
let a = 'twisted';
console.log(a);

a = 'frostyGlam';
console.log(a);

const b = 3.14; //const can not be redefined
console.log(b);

let c = 0;
c += 1;
c++;
console.log(c);

let num1 = 0;
{
  num1 = 1; // OK : num1 is declared in the parent block
  // const num2 = 0;
}
console.log(num1);
// console.log(num2); //not visible outside parent block

const country = 'Ireland';
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Template Literals(expressions inside a string)

// Explicit conversions
const h = '5';
console.log(h + 1);
const i = Number('5');
console.log(i + 1);

let j = 5;
console.log(++j);

// User Interactions
// const name = prompt('Enter your first name.');
// alert(`Hello, ${name}. Welcome to this alert!`);
// 
// const radius = 5.5;
// const pi = 3.14;
// const perimeter = 2 * pi * radius;
// console.log(perimeter);
// 
// const firstName = prompt('What is your first name?');
// const lastName = prompt('What is your last name?');
// alert(`Good evening ${firstName} ${lastName}, what are you doing here?`);

// VAT calculation attempt
const vatPromptNum = Number(prompt('how much are you willing to spend?'));
const vatRate = 20.6 / 100;
const finalPrice = vatPromptNum * (1 + vatRate);
alert(`your cost after VAT is ${finalPrice}`);
