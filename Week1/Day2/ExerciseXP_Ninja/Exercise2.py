# Given a list of 10 integers to analyze:
# 1. Store the list of numbers in a variable.
# 2. Print the following information:
#   a. The list of numbers – printed in a single line
#   b. The list of numbers – sorted in descending order (largest to smallest)
#   c. The sum of all the numbers
# 3. A list containing the first and the last numbers.
# 4. A list of all the numbers greater than 50.
# 5. A list of all the numbers smaller than 10.
# 6. A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
# 7. The numbers without any duplicates – also print how many numbers are in the new list.
# 8. The average of all the numbers.
# 9. The largest number.
# 10.The smallest number.

a = [3, 7, 99, -80, 22, 97, 54, -23, 5, 7]
print (a)
print (sorted(a, reverse=True))
total = sum (a)
print ("The sum:", total)
print (a[0], a[-1])
print ([x for x in a if x > 50])
print ([x for x in a if x < 10])
print ([x*x for x in a])
print (list(set(a)),"\nTotal items: ", len(set(a)))
print (total/len(a))
print (max(a))
print (min(a))