const express = require('express');
const router = express.Router();

const todos = [
    {id:1, task:'Complete the task'},
    {id:2, task:'Read a book'},
    {id:3, task:'Cook a dinner'},
    {id:4, task:'Do the homework'},
];

router.get('/todos', (req, res) =>{
    res.json(todos);
});

router.post("/todos", (req, res) => {
    console.log(req.body);
    const newTask = {id: todos.length + 1, task: req.body.task};
    todos.push(newTask);
    res.json(todos);
});

router.put("/todos/:id", (req, res) => {
    const {id} = req.params;
    const index = todos.findIndex((item) => item.id == id);
    if (index !== -1) {
        todos[index] = { ...todos[index], task: req.body.task};
        res.json(todos);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

router.delete("/todos/:id", (req, res) => {
    const {id} = req.params;
    const index = todos.findIndex((item) => item.id == id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.json(todos);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

module.exports = router;