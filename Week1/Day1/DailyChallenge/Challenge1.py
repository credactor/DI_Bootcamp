
# Using the input function, ask the user for a string. The string must be 10 characters long.
#     If it’s less than 10 characters, print a message which states “string not long enough”.
#     If it’s more than 10 characters, print a message which states “string too long”.
#     If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld

# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod
#
import random
string = input('Please enter a string exactly 10 characters long: ')
string_lenght = len(string)
if string_lenght < 10:
    print ("Your string is not long enough.")
elif string_lenght > 10:
    print ("Your string is too long.")
else:
    print ("Perfect string!")
    print ("The first character of string: ", string[0])
    print ("The last character of string: ", string[string_lenght-1])
    growing_string = ""
    for chr in string:
        growing_string += chr
        print(growing_string)
    string_characters = list(string)
    random.shuffle(string_characters)
    print("The string after random permutation of characters: ", ''.join(string_characters))


