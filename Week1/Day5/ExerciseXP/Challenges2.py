# Exercise 1
# Draw the following pattern using for loops:
#   *
#  ***
# *****

#     *
#    **
#   ***
#  ****
# *****

# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *

for i in range (3):
    print (f"{' '*(2-i)}{'*'*(i+i+1)}{' '*(2-i)}")
print()

for i in range (5):
    print (f"{' '*(4-i)}{'*'*(i+1)}")
print()

for i in range (5):
    print (f"{'*'*(i+1)}{' '*(4-i)}")
for i in range (5, 0, -1):
    print (f"{' '*(5-i)}{'*'*(i)}")

# Exercise 2
# Analyse this code before executing it. Write some comments next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1): # loop over list length minus 1
    minimum = i # index of minimum element
    for j in range(i + 1, len(my_list)): # loop starting from the next element to the end of the list
        if(my_list[j] < my_list[minimum]): # if the next element is less than the current one...
            minimum = j # ...then this element becomes minimal
            if(minimum != i): # if the minimum element is not the first...
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # ... then swap elements
print(my_list)
# The purpose of the program is to sort elements in ascending order
