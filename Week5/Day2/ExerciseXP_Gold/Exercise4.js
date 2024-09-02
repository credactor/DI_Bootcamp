// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const array2 = array.map(elem => (typeof(elem[0]) === "number" ? elem[0] : elem[0][0]));
console.log(array2);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let text = greeting.map(elem => elem.join(' '));
console.log (text);

let text2 = text.join(' ');
console.log (text2);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const unTrap = trapped => Array.isArray(trapped) ? unTrap(trapped[0]) : [trapped];
console.log (unTrap(trapped));