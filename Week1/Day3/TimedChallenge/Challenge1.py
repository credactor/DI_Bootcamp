# Write a program to reverse the sentence wordwise

sentence = input('Enter a sentence: ')
divided = list(sentence.split(" "))
reverse = []
for i in reversed(divided):
    reverse.append(i)
print ('Reversed sentence:', ' '.join(reverse))
