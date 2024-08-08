# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

import random
numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

# extension:
count = 0
count = sum(True for i in range(len(numbers)) for j in range(i+1, len(numbers)) if numbers[i] + numbers[j] == target_number)
print (count)