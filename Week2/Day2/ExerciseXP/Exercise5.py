# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Add a method called incredible_presentation which :
#     Print a sentence like “*Here is our powerful family **”
#     Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.

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