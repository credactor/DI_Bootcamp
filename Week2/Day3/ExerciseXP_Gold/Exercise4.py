# Hint: Use the RegEx (module)
# Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
#     The name should contain only letters.
#     The name should contain only one space.
#     The first letter of each name should be upper cased.

import re

def check_name(line):
    return re.fullmatch(r'^[A-Z][a-z]{1,}[ ]{1}[A-Z][a-z]{1,}$', line)
print (check_name('John Doe'))
