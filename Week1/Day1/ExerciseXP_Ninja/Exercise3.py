# Predict the output of the following code snippets:

# >>> 3 <= 3 < 9
#1
# >>> 3 == 3 == 3
#1
# >>> bool(0)
#0
# >>> bool(5 == "5")
#0
# >>> bool(4 == 4) == bool("4" == "4")
#1
# >>> bool(bool(None))
#0
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
#1
print("y is", y)
#0
print("a:", a)
#5
print("b:", b)
#10