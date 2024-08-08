#1
words = "without,hello,bag,world"
list_items = list(words.split(","))
list_items.sort()
print (','.join(list_items))

#2
text = "A thing of beauty is a joy forever."
longest = max(list(text.split(" ")), key=len)
print (longest)