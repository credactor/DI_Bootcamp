//1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// -> I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//2
function displayStudentInfo(objUser){
    console.log(`Your full name is ${objUser.first} ${objUser.last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//3
const users = { user1: 18273, user2: 92833, user3: 90315 }
arr = Object.entries(users);
console.log(arr);

for (i in arr) {arr[i][1] = arr[i][1] * 2;}
console.log(arr);

//4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // -> "object"

//5
class Dog {
    constructor(name) {
      this.name = name;
    }
}; // -> 2

class Labrador extends Dog {
constructor(name, size) {
    super(name);
    this.size = size;
}
};

//6
// Evaluate these (ie True or False)

[2] === [2]; // false, two different objects.
{} === {}; // false too, but i got a SyntaxError.

// What is, for each object below, the value of the property 'number' and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};
object1.number = 4; // -> 4
console.log(object2.number) // -> 4, object2 is object1
console.log(object3.number) // -> 4, object3 is object1
console.log(object4.number) // -> 5, object4 is not object1

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

const myDog = new Animal("Shadow", "Dog", "gray");
console.log(myDog);

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(noise) {
        console.log(`${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
}

// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal("Lily", "cow", "brown and white");
farmerCow.sound("Moooo");
