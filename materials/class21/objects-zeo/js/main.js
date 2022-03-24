//Create a stopwatch object that has four properties and three methods
let stopwatch = {};
stopwatch.brand = 'Nike';
stopwatch.color = 'black';
stopwatch.shape = 'round';
stopwatch.size = 'medium';

stopwatch.start = function () {
  console.log('Starting!');
};
stopwatch.stop = function () {
  console.log('Stopping!');
};
stopwatch.sayBrand = function () {
  console.log(stopwatch.brand);
};
console.log(stopwatch)
