// Using this array const letters = ['x', 'y', 'z', 'z'];
//     Use a for loop to get this output { x: 1, y: 1, z: 2 };
//     Use the reduce() method to get this output { x: 1, y: 1, z: 2 }; ----> HOW ?????

const letters = ['x', 'y', 'z', 'z'];

chr = {};
for (i of letters) {i in chr ? chr[i]++ : chr[i] = 1}
console.log (chr);

const count = letters.reduce ((total, item) => {
    return total[item] ? ++total[item] : total[item] = 1, total;}, {});
console.log (count);