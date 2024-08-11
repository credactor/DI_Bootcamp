# McDonald's farm
# cow : 5
# sheep : 2
# goat : 12
#     E-I-E-I-0!

# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:
# Create a class called Farm. How should it be implemented?
# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm():
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = dict()
    
    def add_animal(self, new_animal, quantity = 1):
        if new_animal in self.animals:
            self.animals[new_animal] += quantity
        else:
            self.animals[new_animal] = quantity

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for key, value in self.animals.items():
            info += f"{key} : {value}\n"
        info += f"\n\tE-I-E-I-0!"
        return info
    
    def get_animal_types(self):
        return sorted(list(self.animals.keys()))
    
    def get_short_info(self):
        total_types = len (animals_sorted)
        info = f"{self.name}'s farm has "
        for position, animal in enumerate(animals_sorted):
            info += f"{animal}"
            if self.animals[animal] > 1:
                info += "s"
            if position < total_types - 2:
                info += ", "
            if position == total_types - 2:
                info += " and "
        info += "."
        return info

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
#macdonald.add_animal('horse')
macdonald.add_animal('goat', 12)
animals_sorted = macdonald.get_animal_types()
print(macdonald.get_info())
print(macdonald.get_short_info())
