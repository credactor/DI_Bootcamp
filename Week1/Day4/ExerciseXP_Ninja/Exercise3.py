# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:

# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer(*args):
    longest = len(max(*args, key=len))
    print ('*'*(longest + 4))
    for i in args:
        print (f"* {i}{' '*(longest - len(i))} *")
    print ('*'*(longest + 4))
box_printer("Hello", "World", "in", "reallylongword", "a", "frame")