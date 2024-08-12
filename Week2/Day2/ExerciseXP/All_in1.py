#1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):        
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def __init__(self, name, age, sounds):
        super().__init__(name, age)
        self.sounds = sounds
    
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def __init__(self, name, age, sounds):
        super().__init__(name, age)
        self.sounds = sounds

    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def __init__(self, name, age, sounds):
        super().__init__(name, age)
        self.sounds = sounds

    def sing(self, sounds):
        return f'{sounds}'
    
all_cats = [Bengal('Snowy', 2, "meow"), Chartreux('Pepper', 7, "meow"), Siamese('Ginger', 3, "meow")]
sara_pets = Pets(all_cats)
sara_pets.walk()

#2
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        print(self.name, "is barking")

    def run_speed(self):
        return self.weight/self.age*10

    def fight(self, other_dog):
        strength1 = self.run_speed() * self.weight
        strength2 = other_dog.run_speed() * other_dog.weight
        if strength1 > strength2:
            outcome = f"The winner is {self.name}."
        elif strength1 < strength2:
            outcome = f"The winner is {other_dog.name}."
        else:
            outcome = "Draw!"
        return outcome

# cooper = Dog("Cooper", 3, 50)
# milo = Dog ("Milo", 4, 40)
# tucker = Dog ("Tucker", 2, 40)

# cooper.bark()
# print (cooper.fight(milo))
# print (cooper.fight(tucker))
# print (tucker.fight(milo))

#3
from Exercise2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained
    
    def train(self):
        self.bark()
        self.trained = True
    
    def play(self, *args):
        if args:
            message = self.name
            for dog in args:
                message += f", {dog.name}"
            message += " all play together."
            print (message)

    def do_a_trick(self):
        trick = random.choice(["does a barrel roll.", "stands on his back legs.",
                   "shakes your hand.", "plays dead."])
        print (self.name, trick)

cooper = PetDog("Cooper", 3, 50)
milo = PetDog ("Milo", 4, 40)
tucker = PetDog ("Tucker", 2, 40)

milo.train()
milo.play(cooper, tucker)
cooper.do_a_trick()

#4
class Family():
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members
    
    def born(self, newborn):
        self.members.append(newborn)
        print (f"Congratulations! The {self.last_name} family has a newborn: {newborn['name']}.")
        
    def is_18(self, name):
        for person in self.members:
            if person['name'] == name:
                if person['age'] >= 18:
                    return True
                else:
                    return False
    
    def family_presentation(self):
        print (self.last_name, "family:")
        for person in self.members:
            print(f"Name: {person['name']}, age: {person['age']}, gender: {person['gender']}")

# johnson = Family("Johnson", [{'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}])
# johnson.born({'name':'Ian','age':0,'gender':'Male','is_child':True})
# print(johnson.is_18("Sarah"))
# johnson.family_presentation()

#5
from Exercise4 import Family

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)
    
    def use_power(self, name):
        for person in self.members:
            if person['name'] == name:
                if person['age'] >= 18:
                     print (f"{person['name']} has a power: {person['power']}.")
                else:    
                     raise Exception (f"{person['name']} is not over 18 years old.")
    
    def incredible_presentation(self):
        print ("\033[1m\033[3m\033[31m{}\033[0m".format("**Here is our powerful family**"))
        super().family_presentation()

johnson = TheIncredibles("Johnson", [{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}])
johnson.incredible_presentation()
johnson.born({'name':'Baby Jack','age':0,'gender':'Male','is_child':True,'power': 'Unknown Power'})
johnson.incredible_presentation()
