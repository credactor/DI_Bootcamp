// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7];

for (i in numbers) {
    console.log(i % 3 === 0);
}