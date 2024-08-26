// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
//     Use a temporary variable to swap values in the array.
//     Use 2 “nested” for loops (Nested means one inside the other).
//     Add comments and console.log the result for each step, this will help you understand.
//     Requirement: Don’t copy paste solutions from Google

const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers.toString());
console.log(numbers.join());
console.log(numbers.join('+'));
console.log(numbers.join(" "));
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] > numbers[i]) {
            numbers[j] = [numbers[i], numbers[i] = numbers[j]][0];
        }
    }
}
console.log(numbers);
