# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
#
toppings = []
while True:
    topping = input("Please enter a pizza topping (print 'quit' for stop asking): ")
    if topping == "quit":
        break
    elif topping != "":
        toppings.append(topping)
        print(topping, "added to your pizza!")
print("Your toppings are: ", toppings)
print("Total price is ", 10 + 2.5 * len(toppings))
