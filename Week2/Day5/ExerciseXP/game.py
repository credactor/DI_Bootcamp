# game.py – this file/module should contain a class called Game. It should have 4 methods:
# get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.

# get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function (read about it online).

# get_game_result(self, user_item, computer_item) – Determine the result of the game.
#     Parameters:
#         user_item – the user’s chosen item (rock/paper/scissors)
#         computer_item – the computer’s chosen (random) item (rock/paper/scissors)
#         Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

# play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
#     Get the user’s item (rock/paper/scissors) and remember it
#     Get a random item for the computer (rock/paper/scissors) and remember it
#     Determine the results of the game by comparing the user’s item and the computer’s item
#         Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”
#         Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.
import random

class Game():
    def __init__(self):
        self.won = 0
        self.lost = 0
        self.draw = 0
        pass

    def get_user_item():
        while True:
            choice = input("Enter (r)ock, (p)aper or (s)cissors: ")
            if choice in ['r', 'p', 's']:
                return choice

    def get_computer_item():
        return random.choice(['r', 'p', 's'])

    def play(self):
        h = Game.get_user_item()
        c = Game.get_computer_item()
        print (f"You selected {'rock'*(h == 'r')}{'paper'*(h == 'p')}{'scissors'*(h == 's')}.")
        print (f"The computer selected {'rock'*(c == 'r')}{'paper'*(c == 'p')}{'scissors'*(c == 's')}.")
        if h == c:            
            self.draw += 1
            print ("You drew!")
        elif (h == 'r' and c == 's') or (h == 's' and c == 'p') or (h == 'p' and c == 'r'):
            self.won += 1
            print ("You won!")
        else:
            self.lost += 1
            print ("You lose!")

