// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] == false) {
            return false;
        }
    }
    return true;
}

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));