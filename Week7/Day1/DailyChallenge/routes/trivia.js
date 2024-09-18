const express = require('express');
const router = express.Router();

const triviaQuestions = [
    {question: "What is the capital of France?", answer: "Paris"},
    {question: "Which planet is known as the Red Planet?", answer: "Mars"},
    {question: "What is the largest mammal in the world?", answer: "Blue whale"},
    {question: "Which direction does the Sun rise from?", answer: "East"},
    {question: "What is the largest planet in our Solar System?", answer: "Jupiter"}];

let index = 0;
let score = 0;
let total = triviaQuestions.length;

router.get('/', (req, res) => {
    if (index < total) {
        const newQuestion = triviaQuestions[index].question;
        res.json({ question: newQuestion });
    } else {
        res.json({ message: 'Trivia quiz completed!'});        
    }
});

router.post('/', (req, res) => {
    const myAnswer = req.body.answer; // example: {"answer":"Paris"}
    console.log(myAnswer);
    if (myAnswer.toLowerCase() === triviaQuestions[index].answer.toLowerCase()) {
        score++;
        res.json({ message: 'Correct answer.' });
    } else {
        res.json({ message: `Wrong answer! The correct answer is ${triviaQuestions[index].answer}.` });
    }
    index++;
});

router.get('/score', (req, res) => {
    res.json({ message: `You score is ${score} of ${total} questions.` });
});

module.exports = router;