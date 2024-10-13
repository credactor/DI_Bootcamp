// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array). The function should log the length.

function logLength(arg: any[] | string): void {
    console.log(arg.length);
  }
  
logLength("hello");
logLength([31, "hello", 42]);