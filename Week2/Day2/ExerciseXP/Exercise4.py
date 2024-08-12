# Create a class called Family and implement the following attributes:
#     members: list of dictionaries
#     last_name : (string)

# Implement the following methods:
#     born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
#     is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
#     family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

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
