// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

function displayNumbersDivisible(divisor) {
    sum = 0;
    outcome = "";
    for (let i = 0; i < 501; i++) {
        if (i % divisor === 0) {
            sum += i;
            outcome += i + " ";
        }
    }
    console.log("Outcome: ", outcome);
    console.log("Sum: ", sum);
}

displayNumbersDivisible(23);