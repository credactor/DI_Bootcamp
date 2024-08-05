# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

import random
won = 0
lost = 0
while True:
    guess = input("Enter a number from 1 to 9 or print 'quit' for exit: ")
    number = random.randrange(1, 10)
    if guess == "quit":
        print("Total won: ",won)
        print("Total lost: ",lost)
        break
    elif number == int (guess):
        won += 1
        print ('Winner!')
    else:
        lost += 1
        print (f'The number is {number}. Better luck next time!')
