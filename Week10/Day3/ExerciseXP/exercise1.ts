// Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city

interface Person {
    name: string;
    age: number;
}
  
interface Address {
    city: string;
    street: string;
}

type PersonWithAddress = Person & Address;

let someone: PersonWithAddress = {
    age: 31,
    name: "John Doe",
    city: "London",
    street: "Baker street",
};

console.log(someone);
