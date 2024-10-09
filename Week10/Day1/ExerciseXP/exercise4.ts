// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

const sign = (num: number) => {
    if ( num > 0 ) return "positive"
    else if ( num < 0) return "negative"
    else return "zero"
}

console.log(sign(5));
console.log(sign(-5));
console.log(sign(0));