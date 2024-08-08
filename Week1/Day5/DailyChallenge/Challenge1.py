# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension

words = "without,hello,bag,world"
list_items = list(words.split(","))
list_items.sort()
print (','.join(list_items))