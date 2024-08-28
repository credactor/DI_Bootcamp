// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(list, argument) {
    for (subarray in list) {
        if (list[subarray].includes(argument) === false) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));