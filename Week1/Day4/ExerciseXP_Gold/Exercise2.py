# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful

def func (x):
    my_list = [str(x)*i for i in [1, 2, 3, 4]]
    result = 0
    for j in my_list:
        result += int(j)
    return result

x = 3
print (func (x))