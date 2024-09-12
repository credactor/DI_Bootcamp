// Exercise 2: Advanced Module Usage using ES6 module syntax
// 1. Create a file named data.js.
// 2. Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.
// 3. Export the array using the ES6 module syntax.
// 4. Create another file named app.js.
// 5. In app.js, import the array of person objects from the data.js module.
// 6. Write a function that calculates and prints the average age of all the persons in the array.
// 7. Use the imported array and the average age function in app.js.
// 8. Run app.js and confirm that the average age is correctly calculated and displayed. 

const persons = [{name: "Ervin Howell", age: 50, location: "New York"},
{name: "Clementine Bauch", age: 31, location: "Tel Aviv"},
{name: "Patricia Lebsack", age: 42, location: "Paris"},
{name: "Chelsey Dietrich", age: 15, location: "Boston"},
{name: "Kurtis Weissnat", age: 30, location: "London"},
{name: "Nicholas Runolfsdottir", age: 25, location: "Oslo"},
{name: "Glenna Reichert", age: 40, location: "Haifa"},
{name: "Clementina DuBuque", age: 60, location: "Rome"},
{name: "Leanne Graham", age: 27, location: "Toronto"}
];

module.exports = persons;