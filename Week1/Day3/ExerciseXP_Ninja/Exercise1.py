# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# Convert it into a list using Python (don’t do it by hand!).
# Print out a message saying how many manufacturers/companies are in the list.
# Print the list of manufacturers in reverse/descending order (Z-A).
# Using loops or list comprehension:
#     Find out how many manufacturers’ names have the letter ‘o’ in them.
#     Find out how many manufacturers’ names do not have the letter ‘i’ in them.

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
#     Remove these programmatically. (Hint: you can use set to help you).
#     Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

brands = list("Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".split(", "))
print ('Companies in the list: ',len(brands))
brands.sort(reverse=True)
print(brands)
have_o = 0
not_have_i = 0
for brand in brands:
    if 'o' in brand:
        have_o += 1
    if not 'i' in brand:
        not_have_i += 1
print ('Brands with "o" in their names: ',have_o)
print ('Brands without "i" in their names: ',not_have_i)

cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars = list (set (cars))
print(', '.join(cars))
print ('Companies in new list: ',len(cars))