// Line up the Turtle and the Rabbit at the start line.

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);
// turtle = turtle.trim().padEnd(9, '=');

console.log(startLine);
console.log(turtle);
console.log(rabbit);