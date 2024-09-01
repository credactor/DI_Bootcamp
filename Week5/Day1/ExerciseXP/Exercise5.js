// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//     First, use function declaration and invoke it.
//     Then, use function expression and invoke it.
//     Write in a one line comment, the difference between function declaration and function expression.
//     Finally, use a one line arrow function and invoke it.

function declaration (x) {
    return x * 1000;
}
console.log(declaration(2));

const expression = function (x) {
    return x * 1000;
}
console.log(expression(3));
// Function declarations load before any code is executed. Function expressions load only when the interpreter reaches that line of code.

const arrow = x => x * 1000;
console.log(arrow(4));