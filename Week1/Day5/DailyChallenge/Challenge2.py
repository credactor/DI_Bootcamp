# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

text = "A thing of beauty is a joy forever."
longest = max(list(text.split(" ")), key=len)
print (longest)