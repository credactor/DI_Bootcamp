# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.
# Hint : The generated sentences do not have to make sense.
# Download this word list: http://norvig.com/ngrams/sowpods.txt
# Save it in your development directory.
# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?
# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
#     use the words list to get your random words.
#     the amount of words should be the value of the length parameter.
# Take the random words and create a sentence (using a python method), the sentence should be lower case.
# Create a function called main which will:
#     Print a message explaining what the program does.
#     Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
#         If the user inputs incorrect data, print an error message and end the program.
#         If the user inputs correct data, run your code.

import random

def get_words_from_file(file):
    f = open(file, 'r')
    content = [line.strip() for line in f]
    f.close()
    return content

def get_random_sentence(lenght):
    global content
    my_list = []
    for i in range (lenght):
        my_list.append((random.choice(content).lower()))
    return ' '.join(my_list)

def main():
    print ("This program creates a random sentence from 2 to 20 words long.")
    try:
        lenght = int(input("Please enter the length of the sentence: "))
    except ValueError:
        print('Invalid input!')
        exit()
    else:
        if 1 < lenght < 21:
            print(get_random_sentence(lenght))
        else:
            print ("Lenght must be a number from 2 to 20.")

file = '.\\Other\\sowpods.txt'
content = get_words_from_file(file)
main()