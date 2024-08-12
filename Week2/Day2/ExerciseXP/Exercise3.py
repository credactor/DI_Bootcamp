# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
#     train: prints the output of bark and switches the trained boolean to True

#     play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#     do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#         “dog_name does a barrel roll”.
#         “dog_name stands on his back legs”.
#         “dog_name shakes your hand”.
#         “dog_name plays dead”.

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


