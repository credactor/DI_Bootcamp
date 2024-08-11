# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

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