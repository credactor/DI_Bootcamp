# The Hangman game. Instructions

# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
#     If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
#     If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
#     The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
#     The player can’t guess the same letter twice.

import random

show = ['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']

def making_a_guess(guess):
    global body_part, blank
    if guess in letters:
        for i in range(len(blank)):
            if guess == letters[i]:
                blank[i] = guess
    else:
        print(f"There is no \'{guess}\', sorry.")
        body_part += 1

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
letters = list (word)
blank = list("*" * len (word))
body_part = 0
print(show[body_part])
print(f"The Hangman game.\nThe word is {''.join(blank)}.")
while body_part < 6:
    if blank == letters:
        print("YOU WIN!")
        break
    guess = input("Guess a letter: ")
    if guess:
        making_a_guess(guess[0].lower())
    print(show[body_part])
    print(''.join(blank))
if body_part == 6:
    print("YOU LOSE.")
