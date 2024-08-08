# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints: Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

def one_space(string):
    result = ' '.join(string.split())
    return result

matrix = ['7ii', 'Tsx', 'h%?', 'i #', 'sM ', '$a ', '#t%', '^r!']
alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
text = [matrix[i][j] for j in range(len(matrix[0])) for i in range(len(matrix))]
output = ""
for chr in text:
   if chr in alpha:
       output = output + chr
   else:
       output += " "
print ('Secret message:',one_space(output))

# The short solution:
# matrix = ['7ii', 'Tsx', 'h%?', 'i #', 'sM ', '$a ', '#t%', '^r!']
# alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
# print ('Secret message:',' '.join(''.join([matrix[i][j] if matrix[i][j] in alpha else " " for j in range(len(matrix[0])) for i in range(len(matrix))]).split()))