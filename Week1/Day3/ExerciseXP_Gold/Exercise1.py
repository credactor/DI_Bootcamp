# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
#     Ask the user to give you a person’s name and store the answer in a variable.
#     Get the birthday of the name provided by the user.
#     Print out the birthday with a nicely-formatted message.

birthdays = {'John':'2000/12/01', 'Jane':'1990/07/03', 'Mike':'2005/01/25', 'Anna':'2002/11/13', 'Mary':'1999/02/09'}
print ('Hello! You can look up the birthdays of the people in the list!')
name = input ('Enter a name: ')
date = birthdays[name]
print (f"{name} has a birthday on {date}")