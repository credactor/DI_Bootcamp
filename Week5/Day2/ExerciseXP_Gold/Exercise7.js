// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
const clean = arr.filter(elem => [null, 0, "", false, undefined, NaN].includes(elem) === false);
console.log(clean);