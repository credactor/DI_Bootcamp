// Exercise 1: Building a RESTful API
// You’re tasked with building a RESTful API for a blog platform. 
// Users should be able to create, read, update, and delete blog posts using different endpoints.
// 1. Create a directory named blog-api.
// 2. Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the express package by running npm install express in the terminal.
// 4. Create a file named server.js.
// 5. In server.js, require the express package and set up an Express app.
// 6. Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.
// 7. Implement the following routes using Express: 
// 8. GET /posts: Return a list of all blog posts. 
// 9. GET /posts/:id: Return a specific blog post based on its id. 
// 10. POST /posts: Create a new blog post. 
// 11. PUT /posts/:id: Update an existing blog post. 
// 12. DELETE /posts/:id: Delete a blog post.
// 13. Implement error handling for invalid routes and server errors.
// 14. Start the Express app and listen on a specified port (e.g., 3000). 

const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.listen(PORT, () => {console.log(`run on ${PORT}`);});
app.use(bodyParser.json());

app.get("/posts", (req, res) => {res.json(data);});

app.get("/posts/:id", (req, res) => {    
    const { id } = req.params;
    const myPost = data.find(item => item.id == id);
    if (!myPost) return res.status(404).json({msg: "Post not found"})
    res.json(myPost);});

app.post('/posts', (req, res) => {
    // {"quote": "The secret to getting ahead is getting started.", "author": "Mark Twain"}
    const {quote, author} = req.body;
    const myPost = {quote, author, id: data.length + 1};
    data.push(myPost);
    res.json(myPost);
});

app.put('/posts/:id', (req, res) => {
    // {"quote": "Be kind whenever possible. It is always possible.", "author": "Dalai Lama"}
    const {id} = req.params;
    const {quote, author} = req.body;
    const index = data.findIndex((item) => item.id == id);
    if(index === -1) {
        return res.status(404).json({message: 'Post not found'});
    }
    data[index] = {...data[index], quote, author};
    res.json(data);
});

app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    const index = data.findIndex((item) => item.id == id);
    if(index === -1) {
        return res.status(404).json({message: 'Post not found'});
    }
    data.splice(index, 1);
    res.json(data);
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

const data = [{
        id: 1,
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        id: 2,
        quote: "Intelligence without ambition is a bird without wings.",
        author: "Salvador Dali"
    },
    {
        id: 3,
        quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
        author: "Epictetus"
    },
    {
        id: 4,
        quote: "We may encounter many defeats but we must not be defeated.",
        author: "May Angelou"
    },
    {
        id: 5,
        quote: "Problems are not stop signs, they are guidelines.",
        author: "Robert H. Schuller"
    }];