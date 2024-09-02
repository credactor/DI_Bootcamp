// Write a JavaScript program to remove duplicate items in an array.

list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let unique = Array.from(new Set(list));
console.log(unique);