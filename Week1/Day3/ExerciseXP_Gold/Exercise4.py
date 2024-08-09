# Using the dictionary below, each key-value pair represents an item and its price - print all the items and their prices in a sentence.

items = {"banana": 4, "apple": 2, "orange": 1.5, "pear": 3}
print ("Prices in the Fruit Shop:")
for key, value in items.items():
    print("{key}\t{value}$".format(key=key, value=value))

# Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.

items = {"banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}}

total = 0
for value in items.values():
    total += value["price"] * value["stock"]
print ('Cost to buy everything:', total)