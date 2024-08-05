# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
#
my_fav_numbers = set ([1,2,3,4,5])
print (my_fav_numbers)
my_fav_numbers |= set ([7,8])
print (my_fav_numbers)
my_fav_numbers.discard(8)
print (my_fav_numbers)
friend_fav_numbers = set ([2,3,11,17])
our_fav_numbers = my_fav_numbers | friend_fav_numbers
print (our_fav_numbers)