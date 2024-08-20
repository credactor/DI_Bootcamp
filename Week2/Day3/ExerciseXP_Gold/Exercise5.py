# Create a Python program that will generate a good password for you.
# Program flow:
#     Ask the user to type in the number of characters that the password should have (password length) – between 6 and 30 characters.
#         Validate the input. Make sure the user is inputing a number between 6 to 30. Create a loop which will continue to ask the user for an input until they enter a valid one.
#     Generate a password with the required length.
#     Print the password with a user-friendly message which reminds the user to keep the password in a safe place!
# Rules for the validity of the password
#     Each password should contain:
#         At least 1 digit (0-9)
#         At least 1 lower-case character (a-z)
#         At least 1 upper-case character (A-Z)
#         At least 1 special character (eg. !, @, #, $, %, ^, _, …)
#         Once there is at least 1 of each, the rest of the password should be composed of more characters from the options presented above.
#     Create a test function first!
#     Do the following steps 100 times, with different password lengths:
#         Generate a password.
#         Test the password to ensure that:
#             it fulfills all the requirements above (eg. it has at least one digit, etc.)
#             it has the specified length.

from random import choice, choices, shuffle
import re

def generate(lenght):
    password = []
    for i in range (4):
        password.append(choice(sample[i]))
    for i in range (lenght - 4):
        priority = choices([0, 1, 2, 3], weights=[0.2, 0.4, 0.3, 0.1])
        password.append(choice(sample[priority[0]]))
    shuffle(password)
    password = ''.join(password)
    print (len(password),":", password)
    return password

def test_password(password, lenght):
    if re.fullmatch(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_^])[A-Za-z\d@$!%*?&_^]{6,}$', password):
        return True
    else:
        return False

digits = [str(x) for x in range (0, 10)]
lower = [chr(i) for i in range(97, 123)]
upper = [chr(i).upper() for i in range(97, 123)]
symbols = '@$!%*?&_^'
special = list (symbols)
sample = [digits, lower, upper, special]

while True:
    try:
        lenght = int(input("Enter the length of the password (from 6 and 30): "))
    except ValueError:
        print('Invalid input!')
    else:
        if 5 < lenght < 31:            
            for i in range (100):
                print (test_password(generate(lenght), lenght))
            exit()
        else:
            print ("Lenght must be a number from 6 to 30.")
