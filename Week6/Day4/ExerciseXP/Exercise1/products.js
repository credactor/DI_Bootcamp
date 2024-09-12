// Exercise 1: Multiple Exports and Import using CommonJS syntax
// 1. Create a file named products.js.
// 2. Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.
// 3. Export this array using the Common JS syntax.
// 4. Create another file named shop.js.
// 5. In shop.js, require the product objects from the products.js module.
// 6. Create a function that takes a product name as a parameter and searches for the corresponding product object.
// 7. Call this function with different product names and print the details of the products.
// 8. Run shop.js and verify that the correct product details are displayed.

const goods = [{name: "Notebook", price: 999, category: "computer"},
{name: "Hamlet", price: 10, category: "book"},
{name: "iPad mini", price: 500, category: "computer"},
{name: "Titanic", price: 15, category: "dvd"},
{name: "The Godfather", price: 10, category: "dvd"},
{name: "Taxi Driver", price: 15, category: "dvd"},
{name: "War and Peace", price: 25, category: "book"},
{name: "Ulysses", price: 20, category: "book"},
{name: "ThinkPad", price: 400, category: "computer"}
];

module.exports = goods;