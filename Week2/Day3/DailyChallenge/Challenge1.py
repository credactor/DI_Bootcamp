# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:
#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them

import math

class Circle():    
    def __init__(self, radius = 1, diameter = None):
        if diameter:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            self.radius = radius
            self.diameter = radius * 2
        self.area = round (math.pi * self.radius ** 2, 2)

    def __repr__(self):
        return f"Radius: {(self.radius)}, area: {self.area}."

    def __add__(self, other):
        new_radius = self.radius + other.radius
        return Circle (new_radius)

    def __eq__(self, other):
        return self.radius == other.radius
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def put_in_list(self):
        circles.append (self)

def sort_list():
    circles.sort(key=lambda item: item.radius)

circles = []
a = Circle(radius = 3)
b = Circle(radius = 2)
c = Circle(diameter = 4)
d = Circle(diameter = 5)

print (a)
print (b)
print (c)
print (d)
print (c + d)
print (a == b)
print (c == b)
print (a > b)
print (d > b)

circles.extend([a, b, c, d])

for i in circles:
    print (i.radius)
sort_list()
for i in circles:
    print (i.radius)    

