// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.

function string_chop(string, number) {
    chop = [];
    while (string.length > 0) {
        chop.push(string.slice(0, number));
        string = string.slice(number);
    }
    return chop;
}

console.log(string_chop('developers', 2));
console.log(string_chop('The quick brown fox jumps over the lazy dog.', 5));