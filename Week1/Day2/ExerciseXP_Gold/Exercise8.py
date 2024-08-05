# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.

# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')
sequence = input('Enter a sequence of comma-separated numbers:')
sequence_list = sequence.split(",")
sequence_tuple = tuple(sequence_list)
print (sequence_list)
print (sequence_tuple)