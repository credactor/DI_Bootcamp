# Notice : solve this exercise using a lambda function.
# Ask a user for the following inputs 5 times:
#     Name (string)
#     Age (int)
#     Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.

users = []
for i in range (5):
    user = input ("Enter data:")
    words = user.split(',')
    users.append((words[0], int(words[1]), int(words[2])))
users.sort(key=lambda x: (x[0], x[1], x[2]))
print (users)