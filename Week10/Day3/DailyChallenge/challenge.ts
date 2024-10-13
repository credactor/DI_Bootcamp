// Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:
//     For User objects, return a greeting message with the user’s name and age.
//     For Product objects, return a message with the product ID and its price.
//     For Order objects, return a summary of the order with its ID and amount.
// Ensure your function handles unexpected cases gracefully.

type User = {
    type: 'user';
    name: string;
    age: number;
};
   
type Product = {
    type: 'product';
    id: number;
    price: number;
};
   
type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};
   
function handleData(arg: (User | Product | Order)[]): string {
    let text: string = "";
    if (!Array.isArray(arg) || !arg.length) {
        return "Incorrect type!"};
    for (let item of arg) {
        if (item.type === 'user') {
            text += `Hello, ${item.name} ${item.age}\n`
        }
        if (item.type === 'product') {
            text += `Product ID=${item.id}, price ${item.price}\n`
        }
        if (item.type === 'order') {
            text += `Order ID=${item.orderId}, amount ${item.amount}\n`
        }
    }
    return text;
}
  
console.log(handleData([{type: 'user', name: 'John', age: 31}, {type: 'user', name: 'Jane', age: 30}]));
console.log(handleData([{type: 'product',  id: 1, price: 200}]));
console.log(handleData([{type: 'order', orderId: "22", amount: 5}, {type: 'product',  id: 3, price: 100}]));