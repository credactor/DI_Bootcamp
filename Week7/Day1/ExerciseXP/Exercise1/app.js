// Exercise 1: Creating a Simple Express.js Application with Routes
// Step 1: Setup
//     1. Create a new directory for your project. 
//     2. Navigate to the project directory using your command line. 
//     3. Initialize a new Node.js project by running npm init -y. 
// Step 2: Install Dependencies
// Install Express.js by running the following command:
// npm install express
// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application:
// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., index.js) where you will define your routes using express.Router():
// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application:
// Step 6: Start Your Server
// Now, you can start your Express server by running:
// Step 7: Test Your Routes
// Open your web browser or use a tool like Postman to test the following routes:
//     http://localhost:3000/ (Homepage) 
//     http://localhost:3000/about (About Us page) 
// You should see the corresponding responses for each route.

const express = require("express");
const router = require("./routes/index.js");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use("/", router);
app.use("/about", router);