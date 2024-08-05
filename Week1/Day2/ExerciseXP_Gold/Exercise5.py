# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = "aeiouy"
for i in alphabet:
    if i in vowels:
        print (i, '- vowel')
    else:
        print (i, '- consonant')