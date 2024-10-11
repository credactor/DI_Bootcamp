// Create a base class Animal with a public property name and a method makeSound that returns a string.
// Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”).
// Create an instance of the Dog class and call the makeSound method.

class Animal {
    public name: string;
  
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): string {
        return `${this.name}'s sound`;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): string {
        return `${this.name} barks`;
    }
  }

let coop = new Dog("Cooper");
console.log(coop.makeSound());