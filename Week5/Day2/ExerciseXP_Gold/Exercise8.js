// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:

const rep = (x, n) => {
    text = "";
    for (i = 0; i < n; i++) {
        text += x;
    }
    return text;
}
console.log(rep("Ha!", 3));