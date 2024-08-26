// Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.

let age = [20,5,12,43,98,55];
sum = 0;
for (i in age) {
    sum += age[i];
}
console.log(sum);
max = age[0];
for (i in age) {
    if (age[i] > max) {
        max = age[i];
    }
}
console.log(max);