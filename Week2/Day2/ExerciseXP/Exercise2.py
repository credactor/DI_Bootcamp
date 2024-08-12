# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
#     bark: returns a string which states: “<dog_name> is barking”.
#     run_speed: returns the dogs running speed (weight/age*10).
#     fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.
# Create 3 dogs and run them through your class.

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
