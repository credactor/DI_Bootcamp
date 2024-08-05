# A movie theater charges different ticket prices depending on a person’s age.
#     if a person is under the age of 3, the ticket is free.
#     if they are between 3 and 12, the ticket is $10.
#     if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.
#
tickets = int(input('How many people in your family, who wants a tickets?'))
costs = 0
for i in range (tickets):
    age = int(input("Please enter the age of the person: "))
    if 3 <= age <= 12:
        costs += 10
    elif age > 12:
        costs += 15
print (f'Your expenses are {costs}$')
