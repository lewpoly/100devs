// const higherOrderFunc = (param) => {
//   param();
//   return `I just invoked ${param.name} as a callback function!`;
// };
// const anotherFunc = () => {
//   return "I'm being invoked by the higher-order function!";
// };
//
// console.log(higherOrderFunc(anotherFunc));
const addTwo = (num) => num + 2;

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return checkA === checkB ? checkB : 'inconsistent results';
};
console.log(checkConsistentOutput(addTwo, 6));
