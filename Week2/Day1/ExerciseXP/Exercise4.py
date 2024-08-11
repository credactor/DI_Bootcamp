# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter. 
# Create a method called get_groups that prints the animal/animals inside each group.
# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.

class Zoo():
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.sorted = dict()
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print (animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        group = 0
        list_sorted = sorted(self.animals)
        for letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
            for animal in list_sorted:
                if animal[0].upper() == letter:
                    group += 1
                    self.sorted[group] = [x for x in list_sorted if x[0].upper() == letter]
                    break
        #print (self.sorted)

    def get_groups(self):
        for key, value in self.sorted.items():
            print (key,":",value)

ramat_gan_safari = Zoo ("Ramat Gan Safari")
animals = ["Ape", "Baboon", 'Eel', "Bear", "Tiger", "Lion", "Zebra", 'Cat', 'Cougar', 'Emu']
for animal in animals:
    ramat_gan_safari.add_animal(animal)
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Lion")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()