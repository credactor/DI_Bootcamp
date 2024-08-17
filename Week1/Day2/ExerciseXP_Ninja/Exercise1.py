# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
#     C is 50.
#     H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results

# For example, if the user inputs: 100,150,180
# The output should be: 18,22,24

c = 50
h = 30
num = input ("Enter a comma-separated string of numbers: ")
numbers = num.split(',')
result = []
for d in numbers:
    result.append (str(((2 * c * int(d)) / h) ** 0.5))
print (', '.join(result))