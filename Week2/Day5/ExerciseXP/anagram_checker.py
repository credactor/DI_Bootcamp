# Create a new file called anagram_checker.py which contains a class called AnagramChecker.
# The class should have the following methods:
#     __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
#     is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
#     get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
#     Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
#     Note: None of the methods in the class should print anything.

class AnagramChecker():
    def __init__(self):
        f = open('.\\Other\\sowpods.txt', 'r')
        self.content = [line.strip() for line in f]
        f.close()

    def is_valid_word(word):
        word = word.strip().upper()
        if len(word.split()) > 1:
            return 1 # more than one word
        elif not word.isalpha():
            return 2 # invalid characters
        elif len(word) == 0:
            return 3 # empty line
        else:
            return word
        
    def get_anagrams(self, word):
        len_word = len (word)
        word_sorted = sorted(word)
        anagrams = []
        for i in self.content:
            if len (i) == len_word:
                if sorted(i) == word_sorted and i != word:
                    anagrams.append(i)
        return anagrams

