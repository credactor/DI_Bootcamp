const { plus, multi } = require("./math.js");
const _ = require("lodash");

console.log(plus(2 ,3));
console.log(multi(2, 3));
console.log(_.round(4.006, 2));
console.log(_.floor(0.046, 2));
console.log(_.capitalize('FRED'));
console.log(_.upperCase('fooBar'));