// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

let someValue: any;
someValue = 5;
console.log(typeof someValue);
let a = (someValue as string) + "1";
console.log(a);
