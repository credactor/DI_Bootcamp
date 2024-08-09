# Exercise 1
# Write a script that inserts an item at a defined index in a list.
lst = [1, 2, 3, 4, 5, 6, 7]
lst.insert(2, 8)
#print (lst)

# Exercise 2
# Write a script that counts the number of spaces in a string.
text = "dsf sf gf sgdf d G IUYIUYIUY"
spaces = text.count(" ")
#print (spaces)

# Exercise 3
# Write a script that calculates the number of upper case letters and lower case letters in a string.
text = "dsf sf gf sgdf d G IUYIUYIUY"
upper = sum(1 for chr in text if chr.isupper())
lower = sum(1 for chr in text if chr.islower())
#print (upper, lower)

# Exercise 4
# Write a function to find the sum of an array without using the built in function:
#     >>>my_sum([1,5,4,2])
#     >>>12
def my_sum(array):
    result = 0
    for i in array:
        result += i
    return result
#print (my_sum([1,5,4,2]))

# Exercise 5
# Write a function to find the max number in a list
#     >>>find_max([0,1,3,50])
#     >>>50
def find_max(array):
    return max(array)
#print (find_max([0,1,3,50]))

# Exercise 6
# Write a function that returns factorial of a number
#     >>>factorial(4)
#     >>>24
def factorial(num):
    result = 1
    for i in range (1, num + 1):
        result *= i
    return result
#print (factorial(4))

# Exercise 7
# Write a function that counts an element in a list (without using the count method):
#     >>>list_count(['a','a','t','o'],'a')
#     >>>2
def list_count(list, element):
    result = 0
    for i in list:
        if i == element:
            result += 1
    return result
#print (list_count(['a','a','t','o'],'a'))

# Exercise 8
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
#     >>>norm([1,2,2])
#     >>>3
import math
def norm(list):
    return math.sqrt(sum(i ** 2  for i in list))
#print (norm([1,2,2]))

# Exercise 9
# Write a function to find if an array is monotonic (sorted either ascending of descending)
#     >>>is_mono([7,6,5,5,2,0])
#     >>>True

#     >>>is_mono([2,3,3,3])
#     >>>True

#     >>>is_mono([1,2,0,4])
#     >>>False
def is_mono(array):
    types = set()
    for i in range(len(array)-1):
        if array[i] > array[i+1]:
            types.add('desc')
        elif array[i] < array[i+1]:
            types.add('asc')
    if len(types) < 2:
        result = True
    else:
        result = False
    return result
#print (is_mono([7,6,5,5,2,0]), is_mono([2,3,3,3]), is_mono([1,2,0,4]))

# Exercise 10
# Write a function that prints the longest word in a list.
def longest(list):
    print (max(list, key=len))
#longest(['correction', 'childish', 'beach', 'python', 'assertive', 'interference'])

# Exercise 11
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
array = [7, 'childish', 11, 'python', 'assertive', 2]
strings = []
integers = []
for i in array:
    if type(i) is int:
        integers.append(i)
    elif type(i) is str:
        strings.append(i)
#print (strings, integers)

# Exercise 12
# Write a function to check if a string is a palindrome:
#     >>>is_palindrome('radar')
#     >>>True

#     >>>is_palindrome('John')
#     >>>False
def is_palindrome(word):
    if word == word[::-1]:
        return True
    else:
        return False
#print (is_palindrome('radar'), is_palindrome('John'))

# Exercise 13
# Write a function that returns the amount of words in a sentence with length > k:
#     >>>sentence = 'Do or do not there is no try'
#     >>>k=2
#     >>>sum_over_k(sentence,k)
#     >>>3
def sum_over_k(sentence,k):
    return sum(True for i in sentence.split() if len(i) > k)
#print (sum_over_k('Do or do not there is no try', 2))

# Exercise 14
# Write a function that returns the average value in a dictionary (assume the values are numeric):
#     >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
#     >>>3
def dict_avg(dict):
    return sum (dict.values()) / len(dict)
#print (dict_avg({'a': 1,'b':2,'c':8,'d': 1}))

# Exercise 15
# Write a function that returns common divisors of 2 numbers:
#     >>>common_div(10,20)
#     >>>[2,5,10]
def common_div(a, b):
    divisors = [[], []]
    divisors[0] = [x for x in range (2, a + 1) if a % x == 0]
    divisors[1] = [x for x in range (2, b + 1) if b % x == 0]
    result = list(set(divisors[0]) & set(divisors[1]))
    result.sort()
    return result
#print (common_div(10,20))

# Exercise 16
# Write a function that test if a number is prime:
#     >>>is_prime(11)
#     >>>True
def is_prime(x):
    for i in range (2, int(x**0.5 + 1)):
        if x % i == 0:
            return False
    return True
#print(is_prime(12))

# Exercise 17
# Write a function that prints elements of a list if the index and the value are even:
#     >>>weird_print([1,2,2,3,4,5])
#     >>>[2,4]
def weird_print(list):
    return [i for i in range (len(list)) if i % 2 == 0 and list[i] % 2 == 0]
#print(weird_print([1,2,2,3,4,5]))

# Exercise 18
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
#     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
#     >>>int: 1, str:1 , float:1, bool:2
def type_count(**kwargs):
    result = {'int':0, 'str':0 , 'float':0, 'bool':0}
    for value in kwargs.values():
        if type(value) == int:
            result['int'] += 1
        elif type(value) == str:
            result['str'] += 1
        elif type(value) == float:
            result['float'] += 1
        elif type(value) == bool:
            result['bool'] += 1
    return result
#print(type_count(a=1,b='string',c=1.0,d=True,e=False))

# Exercise 19
#     Write a function that mimics the builtin .split() method for strings.
#     By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
def splitted(text, chr=' '):
    result = []
    word = ""
    for i in text:
        if i == chr and word == "":
            continue
        elif i == chr:
            result.append(word)
            word = ""
        else:
            word += i
    if word != "":
        result.append(word)
    return result
#print (splitted("|sdf fdg ghh||||hgfdhuio|io ghf|dgf gdsg|sdads||", '|'))

# Exercise 20
#     Convert a string into password format.
#     Example:
#     input : "mypassword"
#     output: "***********"
text = "mypassword"
#print ('*'*len(text))