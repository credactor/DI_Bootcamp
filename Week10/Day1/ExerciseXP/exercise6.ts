// 1. Define the Object Structure: 
// 2. Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).
// 3. Create the Function:
// 4. Write a function named createPerson that takes two parameters: name (string) and age (number). 
// 5. The function should return an object that matches the Person structure.
// 6. Test the Function:
// 7. Test the createPerson function by creating a person and logging the result to the console. 

const createPerson = ( name1: string, age: number ) => {
    return {name: name1, age: age}
}

let Person: {
    name: string;
    age: number;
};

Person = createPerson("Alice", 25);
console.log(Person);

export {};