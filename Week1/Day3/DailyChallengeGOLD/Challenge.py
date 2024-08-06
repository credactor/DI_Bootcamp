# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift. 

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
abc = list (alphabet)
mode = input ('Do you want encrypt or decrypt? (Enter "e" or "d"): ')
shift = int(input ('Enter shift (number from 1 to 25): '))
if not mode in 'ed' or not shift in range(1, 26):
    exit()
elif mode == 'd':
    shift = 26 - shift
text = input ('Enter text: ')
output = ""
for chr in text:
   if chr in abc:
       output = output + abc[abc.index(chr)+shift]
   else:
       output += chr
print ('Result: ',output)