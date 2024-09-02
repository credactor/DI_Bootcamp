// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    index + 1 < 4 ? suffix = ordinal[index+1] : suffix = ordinal[0];
    console.log(`${index+1}${suffix} choise is ${color}.`); 
});
