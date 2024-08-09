# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
#     Ask the user to give you a person’s name and store the answer in a variable.
#     Get the birthday of the name provided by the user.
#     Print out the birthday with a nicely-formatted message.

# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
#     Ask the user for a person’s name – store it in a variable.
#     Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
#     Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

birthdays = {'John':'2000/12/01', 'Jane':'1990/07/03', 'Mike':'2005/01/25', 'Anna':'2002/11/13', 'Mary':'1999/02/09'}
name = input ('Enter your name: ')
date = input ('Enter your birthday (YYYY/MM/DD): ')
birthdays[name] = date
print ('You can look up the birthdays of the people in the list:')
print (', '.join(list(birthdays.keys())))
name = input ('Enter a name: ')
if name in birthdays.keys():
    date = birthdays[name]
    print (f"{name} has a birthday on {date}")
else:
    print ('Sorry, we don’t have the birthday information for',name)