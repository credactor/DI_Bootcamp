const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const fileJson = path.resolve(__dirname, '../tasks.json');

router.get('/', async (req, res) =>{
    try {
        await fs.readFile(fileJson, 'utf8', (err,data) => {
            if (err) res.status(404).json({message:'Unable to read file'})
            else res.json(JSON.parse(data))});
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/:id', async (req, res) => {
    const taskNumber = req.params.id;
    try {
        await fs.readFile(fileJson, 'utf8', (err, data) => {
            if (err) res.status(404).json({ message: 'Unable to read file' });
            else {
                const tasks = JSON.parse(data);
                const task = tasks.find((item) => item.id == taskNumber);
                if (task) {
                    res.json(task);
                } else {
                    res.status(404).json({ error: 'Task not found' });
                }}});
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

router.post("/", async (req, res) => {
    try {
        await fs.readFile(fileJson, 'utf8', (err, data) => {
            if (err) res.status(404).json({ message: 'Unable to read file' });
            else {
                tasks = JSON.parse(data);
                const newTask = {id: tasks.length + 1, task: req.body.task};
                tasks.push(newTask);
                fs.writeFile(fileJson, JSON.stringify(tasks), 'utf8', (err) =>
                    {if (err) res.status(404).json({message:'Unable to write file'});});
                res.status(201).json(tasks);}});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.put("/:id", async (req, res) => {
    try {        
        const {id} = req.params;
        console.log(id);
        await fs.readFile(fileJson, 'utf8', (err, data) => {
            if (err) res.status(404).json({ message: 'Unable to read file' });
            else {
                tasks = JSON.parse(data);
                const index = tasks.findIndex((item) => item.id == id);
                if (index !== -1) {
                    tasks[index] = { ...tasks[index], task: req.body.task};
                    fs.writeFile(fileJson, JSON.stringify(tasks), 'utf8', (err) =>
                        {if (err) res.status(404).json({message:'Unable to write file'});});
                    res.json(tasks[index]);
                } else {
                    res.status(404).json({ message: 'Task not found' });}}});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {        
        const {id} = req.params;
        await fs.readFile(fileJson, 'utf8', (err, data) => {
            if (err) res.status(404).json({ message: 'Unable to read file' });
            else {
                tasks = JSON.parse(data);
                const index = tasks.findIndex((item) => item.id == id);
                if (index !== -1) {
                    tasks.splice(index, 1);
                    fs.writeFile(fileJson, JSON.stringify(tasks), 'utf8', (err) =>
                        {if (err) res.status(404).json({message:'Unable to write file'});});
                    res.json(tasks);
                } else {
                    res.status(404).json({ message: 'Task not found' });}}});
                
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;