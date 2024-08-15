# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
# It should do the following:
#     Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
#     If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
#         Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
#         Only alphabetic characters are allowed. No numbers or special characters.
#         Whitespace should be removed from the start and end of the user’s input.
#     Once your code has decided that the user’s input is valid, it should find out the following:
#         All possible anagrams to the user’s word.
#         Create an AnagramChecker instance and apply it to the steps created above.
#         Display the information about the word in a user-friendly, nicely-formatted message such as:

#         YOUR WORD :”MEAT”
#         this is a valid English word.
#         Anagrams for your word: mate, tame, team.

import anagram_checker
test = anagram_checker.AnagramChecker()

while True:
    word = input("Enter an English word or print '1' for exit: ")
    if word == "1":
        break
    else:
        result = anagram_checker.AnagramChecker.is_valid_word(word)
        if result == 1:
            print ("Only a single word is allowed!")
        elif result == 2:
            print ("Only alphabetic characters are allowed!")
        elif result == 3:
            print ("You should enter a word!")
        else:
            anagrams = anagram_checker.AnagramChecker.get_anagrams(test, result)
            print (f"YOUR WORD: '{result}' is a valid English word.")
            if len (anagrams) == 0:
                print ("It has no anagrams.")
            else:        
                print ("Anagrams for your word:", ', '.join(anagrams))