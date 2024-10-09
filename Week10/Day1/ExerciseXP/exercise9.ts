// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function greet(name?: string): string {
    if (typeof name !== "string") {
      return "Hello!";
    }
    return "Hi, " + name;
  }

console.log(greet("Alice"));
console.log(greet());

export {};