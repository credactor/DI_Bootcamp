// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:
//     "This is a number" for numbers.
//     "This is a string" for strings.

type alphanumeric = string | number;

function describeValue(a: alphanumeric): string {
  if (typeof a === "number") {
    return "This is a number";
  }
  if (typeof a === "string") {
    return "This is a string";
  }
  throw new Error(
    "Invalid type!"
  );
}

console.log(describeValue(5));
console.log(describeValue("yes"));
console.log(describeValue(true));
