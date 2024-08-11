# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat():
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def oldest_cat(*args):
    max_age = 0
    for cat in args:
        if cat.age > max_age:
            name = cat.name
            max_age = cat.age
    return name, max_age

snowy = Cat ('Snowy', 2)
ginger = Cat ('Ginger', 7)
pepper = Cat ('Pepper', 3)
name, age = oldest_cat (snowy, ginger, pepper)
print (f"The oldest cat is {name}, and is {age} years old.")

