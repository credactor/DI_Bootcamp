# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import string
import random
text = ""
for i in range (5):
    text += random.choice(string.ascii_letters)
print (text)
