# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.
#
max_lenght = 0
while True:
    string = input('Please enter a longest sentence you can without the character “A”: ')
    if not "A" in string:
        string_lenght = len(string)
        if string_lenght > max_lenght:
            max_lenght = string_lenght
            print (f"Congratulations! Your string lenght is {string_lenght}.")
