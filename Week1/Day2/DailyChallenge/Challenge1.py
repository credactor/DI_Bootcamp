# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
#
# Examples
# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
number = int(input ("Enter a number: "))
length = int(input ("Enter a length: "))
multiples = []
for i in range (length):
    multiples.append(number*(i+1))
print (multiples)
