// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

const getDetails = ( name1: string, age: number ) => {
    let details1: [string, number];
    details1 = [name1, age];
    return `Hello, ${details1}!`
}

const details = getDetails("Alice", 25);
console.log(details);

export {};