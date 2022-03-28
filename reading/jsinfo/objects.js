// Computed Properties
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5, // bag.appleComputers = 5
};
console.log(bag.appleComputers);

// A variable cannot have a name equal to one of language-reserved words like "for", "let", "retrurn". For object properties, there's no such restriction.
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

// alert(obj.for + obj.let + obj.return); // 6

// Property Existence Test. -- "in" operator.
// let user = { name: 'John', age: 30 };

// alert('age' in user); // true, user.age exists
// alert('blabla' in user); // false, user.blabla doesn't exist

// Make into non-integer.
let codes = {
  '+49': 'Germany',
  '+41': 'Switzerland',
  '+44': 'Great Britain',
  // ..,
  '+1': 'USA',
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}

// ****** TASKS *****
// Hello, object
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user.name);

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// Sum Object Properties
// Write the code to sum all salaries and store in the variable sum.
// If salaries is empty, the result must be 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Multiply numberic property values by 2.
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by2.
// function multiplyNumeric(obj) {
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
function multiplyNumeric(obj) {
  for (let keys in obj) {
    if (typeof obj[keys] == 'number') {
      obj[keys] *= 2;
    }
  }
}
