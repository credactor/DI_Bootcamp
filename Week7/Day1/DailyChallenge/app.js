// Create a Trivia Quiz Game with Express.js and express.Router
// 1. Set up a new Express.js application.
// 2. Create a trivia quiz model with a set of hard-coded questions and answers.
// 3. Implement the following routes using express.Router:
//   GET /quiz: Start the quiz and display the first question. 
//   POST /quiz: Submit an answer to the current question and move to the next question. 
//   GET /quiz/score: Display the user’s final score at the end of the quiz. 
// 4. Keep track of the user’s score as they progress through the quiz.
// 5. Provide appropriate feedback on correct and incorrect answers.
// 6. Implement simple game logic such as displaying the next question after answering one.

const express = require("express");
const router = require('./routes/trivia.js');
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use(express.json());
app.use('/quiz', router);