# A perfect number is a positive integer that is equal to the sum of its divisors.
# However, the number itself is not included in the sum.

#     Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.

#import math
num = int(input ('Enter a number: '))
summa = 0
for i in range (1, int(num/2)+1):
    if num % i == 0:
        summa += i
if num == summa:
    print ('True')
else:
    print('False')
