# Use the regular expression module to extract numbers from a string.
# Example: return_numbers('k5k3q2g5z6x9bn') 
# Excepted output : 532569

import re

def return_numbers(line):
    return re.sub('[^0-9]', '', line)
print (return_numbers('k5k3q2g5z6x9bn'))


