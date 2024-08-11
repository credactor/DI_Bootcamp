#1
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

#2
class Dog():
    def __init__(self, name, height):
        # print("A new dog has been initialized !")
        # print("His name is", name_of_the_dog)
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"{davids_dog.name} is {davids_dog.height} cm high.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"{sarahs_dog.name} is {sarahs_dog.height} cm high.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height >= sarahs_dog.height:
    biggest_dog = davids_dog.name
else:
    biggest_dog = sarahs_dog.name

print(f"{biggest_dog} is the biggest dog.")

#3
class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for element in self.lyrics:
            print (element)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

#4
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
