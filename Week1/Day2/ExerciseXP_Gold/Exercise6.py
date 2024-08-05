# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

print ('Please enter 7 words')
words = []
for i in range (1, 8):
    words.append(input(f'Word #{i}: '))
while True:
    letter = input ('Enter a single character: ')
    if len(letter) == 1:
        break
for word in words:
    if letter in word:
        print ('Index of the first occurence of ',letter, 'in ',word,':', word.index(letter))
    else:
        print ('There are no character',letter, 'in ',word)
