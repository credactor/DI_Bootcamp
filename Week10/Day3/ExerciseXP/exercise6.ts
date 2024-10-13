// Define a type Employee that combines Person and Job using intersection types.
// Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.
//     Person type: name: string; age: number;
//     Job type: position: string; department: string;
//     Employee type should combine these.
//     describeEmployee should return a specific message for each type of job.

interface Person {
    name: string;
    age: number;
}
  
interface Job {
    position: string;
    department: string;
}

type Employee = Person & Job;

function describeEmployee(someone: Employee): string {
    if (someone.position === "Manager") return `${someone.name} sells software`
    else if (someone.position === "Developer") return `${someone.name} develops software`
    return "No description!"
}

let john: Employee = {
    age: 31,
    name: "John Doe",
    position: "Manager",
    department: "Sales",
};

let jane: Employee = {
    age: 31,
    name: "Jane Doe",
    position: "Developer",
    department: "Dev",
};

console.log(describeEmployee(john));
console.log(describeEmployee(jane));