# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)
# The key is the product, the value is the price

# items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
# wallet = "$300"

# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
# wallet = "$100" 

# items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
# wallet = "$1" 

items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet = "$100"
can_buy = []
money = int(wallet.replace('$', ""))
for key, value in items_purchase.items():
    price = value.replace('$', "")
    price = price.replace(',', "")
    if int(price) <= money:
        can_buy.append(key)
can_buy.sort()
if can_buy:
    print(can_buy)
else:
    print('Nothing')