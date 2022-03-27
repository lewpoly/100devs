// Object Literals
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log('draw');
//   },
// };
// circle.draw();

// If an object has one or more methods, that object has 'behavior'.

// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }
// const circle2 = createCircle(1);
// circle2.draw();

// Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3, 4]);

// const Circle1 = new Function(
//   'radius',
//   `
// this.radius = radius;
// this.draw = function(){
//   console.log('draw')
// }
// `
// );
// const circle = new Circle1(1);
// const another = new Circle(1);
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// const circle = new Circle(10);
//
// for (let key in circle) {
//   if (typeof circle[key] !== 'function') console.log(key, circle[key]);
// }
// const keys = Object.keys(circle);
// console.log(keys);
//
// if ('radius' in circle) console.log('Circle has a radius.');
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    //...
  };
  this.draw = function () {
    this.computeOptimumLocation();
    console.log('draw');
  };
}
const circle = new Circle(10);
