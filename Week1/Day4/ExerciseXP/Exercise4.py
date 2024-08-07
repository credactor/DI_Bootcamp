# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random
def compare_with_random(num):
    if 1 <= num <= 100:
        random_number = random.randrange(1, 101)
        if random_number == num:
            print ('Success!')
        else:
            print(f"Fail: {random_number} not equal {num}.")

compare_with_random(50)