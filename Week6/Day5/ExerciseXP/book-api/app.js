// Exercise 2: Building a Basic CRUD API with Express.js
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.
// 1. Create a new directory named book-api.
// 2. Inside the book-api directory, initialize a new Node.js project and install the express package.
// 3. Create a new file named app.js in the book-api directory.
// 4. In app.js, import the express module and create an instance of an Express app.
// 5. Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.
// 6. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
// 7. Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
// 8. Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
// 9. Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

const books = [{id: 1, title: "The Lord of the Rings", year: 1954, author: "J.R.R. Tolkien"},
{id: 2, title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger"},
{id: 3, title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee"},
{id: 4, title: "Brave New World", year: 1932, author: "Aldous Huxley"},
{id: 5, title: "Jane Eyre", year: 1847, author: "Charlotte Bronte"},
{id: 6, title: "Crime and Punishment", year: 1866, author: "Fyodor Dostoevsky"},
{id: 7, title: "War and Peace", year: 1867, author: "Leo Tolstoy"},
{id: 8, title: "Ulysses", year: 1922, author: "James Joyce"},
{id: 9, title: "Les Miserables", year: 1862, author: "Victor Hugo"}];
// {"title": "Vanity Fair", "year": 1847, "author": "W.M. Thackeray"}

const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");

app.listen(PORT, () => {console.log(`run on ${PORT}`);});
app.use(bodyParser.json());

app.get("/api/books", (req, res) => {res.json(books);});

app.get("/api/books/:id", (req, res) => {    
    const { id } = req.params;
    const myBook = books.find(item => item.id == id);
    if (!myBook) return res.status(404).json({msg: "Book not found"});
    else return res.status(200).json(myBook);});

app.post('/api/books/', (req, res) => {
    const {title, year, author} = req.body;
    const myBook = {title, year, author, id: books.length + 1};
    books.push(myBook);
    res.status(201).json(myBook);
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});