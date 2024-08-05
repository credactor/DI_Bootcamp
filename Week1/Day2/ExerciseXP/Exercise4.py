# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?
#
sequence = []
i = 1.5
while i <= 5:
    sequence.append(i)
    i += 0.5
print(sequence)