# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

data = [{"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}]

def ask(data):
    right = 0
    wrong = 0
    wrong_answers = []
    for block in data:
        print('Question:', block.get("question"))
        answer = input ('Your answer: ')
        if answer == block.get("answer"):
            right += 1
        else:
            wrong += 1
            wrong_answers.append(answer)
    # print (wrong_answers)
    inform(right, wrong)

def inform (right, wrong):
    print(f'You have {right} correct and {wrong} incorrect answers.')

ask(data)
