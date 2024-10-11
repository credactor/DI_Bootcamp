// Create a class Product with the following properties:
//     A readonly property id of type number.
//     A public property name of type string.
//     A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
    readonly id: number;
    public name: string;
    public price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
    public getProductInfo(): string {
        return `${this.id} ${this.name} ${this.price}`;
        }
}
    
let thing = new Product(1, "Gadget", 99);
console.log(thing.getProductInfo());
thing.price = 77;
thing.id = 5;
console.log(thing.getProductInfo());