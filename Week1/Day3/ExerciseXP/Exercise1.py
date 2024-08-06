# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# for item in zip(keys, values):
new_dict = {k: v for (k, v) in zip(keys, values)}
print(new_dict)