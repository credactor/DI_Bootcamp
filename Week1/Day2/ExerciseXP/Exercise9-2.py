# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.
#
names = ['John', 'Michael', 'Lisa', 'Maria', 'Alex']
final_list = []
for i in names:
    age = int(input(f"{i}, please enter your age: "))
    if not 16 <= age <= 21:
        final_list.append(i)
print ('Final list of viewers:', final_list)