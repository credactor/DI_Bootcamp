// Exercise 3: Basic API for managing a list of books using Express.js and express.Router.
// In this exercise, you’ll implement CRUD operations (Create, Read, Update, Delete) for books.
// Step 1: Setup
//     1. Create a new directory for your project. 
//     2. Navigate to the project directory using your command line. 
//     3. Initialize a new Node.js project by running npm init -y. 
// Step 2: Install Dependencies
// Install Express.js
// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application
// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., books.js) where you will define routes for managing books using express.Router():
//     // Sample in-memory database for storing books
// const books = [];
//     // Get all books
//     // Add a new book
//     // Update a book by ID
//     // Delete a book by ID
// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application
// Step 6: Start Your Server
// Now, you can start your Express server by running: node app.js
// Step 7: Test Your API
// You can use tools like Postman or curl to test your API endpoints for managing books:
//     GET http://localhost:3000/books (Get all books) 
//     POST http://localhost:3000/books (Create a new book with a JSON request body) 
//     PUT http://localhost:3000/books/:id (Update a book by ID with a JSON request body) 
//     DELETE http://localhost:3000/books/:id (Delete a book by ID)

const express = require("express");
const router = require('./routes/books.js');
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use(express.json());
app.use('/books', router);