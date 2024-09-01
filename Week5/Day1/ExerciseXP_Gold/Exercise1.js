// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
// Change the code below to nested arrow functions.

let landscape = function() {

    let result = "";
   
    let flat = function(x) {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = function(x) {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
}

let landscape2 = function() {
    let result = "";
    const flat = x => result += "_".repeat(x);
    const mountain = x => result += "/" + "'".repeat(x) + "\\";
   
    flat(4);
    mountain(4);
    flat(4)
    return result;
}

console.log(landscape());
console.log(landscape2());