# Write a program that prints the quantity of the words from the input.

text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
words = text.strip().split(' ')
unique = set (words)
for word in unique:
    print (word,":",words.count(word))
