# Your goal is to create a program to help a city with the vaccination of its citizens. 
# Part 1. You will have to create two classes:
# Human
# Represents a citizen of the city, it has the following attributes: id_number (str), name (str), age (int), priority (bool) and blood_type (str). Its blood type can be “A”, “B”, “AB” or “O”.
# This class has no methods.

# Queue
# Represents a queue of humans waiting for their vaccine.
# It has the following attribute : humans, the list containing the humans that are waiting. It is initialized empty.
# This class is useful to manage who will get vaccinated in priority. It has the following methods:
#     add_person(self, person) : Adds a human to the queue, if he is older than 60 years old or a priority person, put him at the beginning of the list (at index 0) before every other.
#     find_in_queue(self, person) : Returns the index of a human in the queue.
#     swap(self, person1, person2): Swaps person1 with person2.
#     get_next(self) : Returns the next human waiting in the queue. The next human should be the one located at the index 0 in the list.
#     get_next_blood_type(self, blood_type) : Returns the first human with this specific blood type.
#     sort_by_age(self) : Sorts the queue
#         first the priority people
#         then, the older people
#         then the younger people

# Every human returned by get_next and get_next_blood_type is removed from the list.
# Those functions return None if the list is empty (ie. no one in the list).

# Bonus: Don’t use any of the following built-in methods: list.insert, list.pop, list.index, list.sort, sorted.

# Part 2
# Human
# Create an attribute family for the Human class.
# Initialized as empty, family is a list of all the humans that are living in the same house with this human.
# Add a method add_family_member(self, person) that adds the person to this human’s family and this human to the person’s family.

# Queue
# Add the rearrange_queue(self) method to the Queue class, so that there won’t be two members of the same family one after the other in the line.

from faker import Faker
from random import choice, choices, randint

class Human():
    def __init__(self, id_number, name, age, priority, blood_type, family = None):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.family = family

    def add_family_member(self, family):
        self.family = family
     
class Queue():
    def __init__(self):
        self.humans = []

    def add_person(self, person):
        if person.age > 60 or person.priority == True:
            self.humans.insert(0, person)
        else:
            self.humans.append(person)

    def find_in_queue(self, person):
        if person in self.humans:
            return self.humans.index(person)

    def swap(self, person1, person2):
        if person1 and person2 in self.humans:
            self.humans[self.humans.index(person1)], self.humans[self.humans.index(person2)] = person2, person1

    def get_next(self):
        if self.humans != []:
            return self.humans.pop(0)
        else:
            return None

    def get_next_blood_type(self, blood_type):
        person = next((p for p in self.humans if p.blood_type == blood_type), None)
        if person:
            self.humans.remove(person)
            return person
        else:
            return None

    def sort_by_age(self):
        self.humans.sort(key = lambda p: (p.priority, p.age), reverse=True)

    # This is a difficult task and it does not always have a solution.
    def rearrange_queue(self): 
        if self.humans != []:
            permutations = 0
            for num in range (1, len(self.humans) - 2):
                this_family = self.humans[num].family
                if this_family == self.humans[num-1].family:
                    for pos in range (num + 1, len(self.humans) - 1):
                        if this_family != self.humans[pos].family and this_family != self.humans[pos+1].family:
                            self.humans.insert(pos + 1, self.humans[num])
                            self.humans.pop(num)
                            num -= 1
                            permutations += 1
                            break
            #print ("Permutations: ",permutations)
    def print_queue(self):
        for p in self.humans:
            print (f"id: {p.id_number}, name: {p.name}, age: {p.age}, priority: {p.priority}, blood_type: {p.blood_type}, family: {p.family}")
        print()

queue = Queue()
fake = Faker()
for p in range (20):
    name = fake.name()
    id_number = fake.iana_id()
    age = randint(0, 90)
    priority = choices([True, False], weights=[0.2, 0.8])
    blood_type = choice(['A', 'B', 'AB', 'O'])
    human = Human(id_number, name, age, priority, blood_type)
    queue.add_person(human)
queue.print_queue()
queue.sort_by_age()
queue.print_queue()
for p in queue.humans:
    p.family = choices([1,2,3,4,5,6,7,8], weights=[0.1, 0.2, 0.05, 0.25, 0.1, 0.1, 0.05, 0.15])
print("Next human:",queue.get_next().name)
print(f"Next human with blood type 'B': {queue.get_next_blood_type('B').name}")
print()
queue.print_queue()
print()
queue.rearrange_queue()
queue.print_queue()

