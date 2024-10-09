// Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:
//     If the input is a number, return its square.
//     If the input is a string, return the uppercase version of the string.
//     If the input is a boolean, return the negated value.

type Data = number | string | boolean;

function processInput(data: Data) {
  switch (typeof data) {
    case "number":
        return data * data;
    case "string":
        return data.toUpperCase();
    case "boolean":
        return !data;
    default:
        return "Invalid type";
  }
}

console.log(processInput(5));
console.log(processInput("admin"));
console.log(processInput(true));
console.log(processInput(["text"]));

export {};