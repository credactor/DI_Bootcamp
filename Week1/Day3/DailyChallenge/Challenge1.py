# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#     Make sure the letters are the keys.
#     Make sure the letters are strings.
#     Make sure the indexes are stored in a list and those lists are values.
word = input('Enter a word: ')
letters = {}
for i, chr in enumerate(word):
    if chr in letters:
        letters[chr].append(i)
    else:
        letters[chr]=[i]
print (letters)