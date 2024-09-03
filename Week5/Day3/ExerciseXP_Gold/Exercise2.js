// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(object) {
    const sorted = Object.fromEntries(Object.entries(object).sort());
    return [Object.keys(sorted), Object.values(sorted)];
}

console.log(keysAndValues({ a: 1, c: 3, b: 2 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key2: false, key1: true, key3: undefined }));
