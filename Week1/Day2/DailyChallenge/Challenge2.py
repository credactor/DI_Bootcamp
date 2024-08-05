# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
#
# Examples
# user's word : "ppoeemm" ➞ "poem"
# user's word : "wiiiinnnnd" ➞ "wind"
# user's word : "ttiiitllleeee" ➞ "title"
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
#
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

string = input ("Enter a string: ")
result = string[0]
for i in range (1, len(string)):
    if string[i] != result[-1]:
        result += string[i]
print('The result string:',result)