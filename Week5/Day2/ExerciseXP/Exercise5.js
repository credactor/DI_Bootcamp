// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let text = epic.reduce ((acc, val) => acc + " " + val);
console.log (text);