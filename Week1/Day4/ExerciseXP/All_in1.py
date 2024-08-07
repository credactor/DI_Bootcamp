#1
def display_message():
    print("Hello everyone! I am learning Python in this course.")

display_message()

#2
def favorite_book(title):
     print("One of my favorite books is",title)

favorite_book('The Old Man and The Sea')

#3
def describe_city(city, country='USA'):
    print (city,'is in',country)
describe_city('London', 'UK')

#4
import random
def compare_with_random(num):
    if 1 <= num <= 100:
        random_number = random.randrange(1, 101)
        if random_number == num:
            print ('Success!')
        else:
            print(f"Fail: {random_number} not equal {num}.")

compare_with_random(50)

#5
def make_shirt(size='large', text='I love Python'):
    print (f'The size of the shirt is {size} and the text is "{text}"')
make_shirt()
make_shirt('medium', 'Summer')
make_shirt(text='Wild', size='small')

#6
def show_magicians(names):
    for i in names:
        print (i)

def make_great(names):
    names = [x + ' the Great' for x in names]
    return names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
show_magicians(magician_names)
magician_names = make_great(magician_names)
show_magicians(magician_names)

#7
import random
def get_random_temp(season):
    if season == 'winter': a, b = -10, 16
    elif season == 'spring': a, b = 0, 24
    elif season == 'summer': a, b = 16, 40
    elif season in ['autumn', 'fall'] : a, b = 0, 24
    else:
        exit()
    random_temp = random.randrange(a, b)
    return random_temp

def main():
    season = input ('Enter season (summer, autumn (or fall), winter or spring: ')
    temp = get_random_temp(season)
    print (f'The temperature right now is {temp} degrees Celsius.')
    if temp >= 32:
        msg = 'It''s very hot! Beware of heat stroke!'
    elif temp >= 24:
        msg = 'It might be hot today.'
    elif temp >= 16:
        msg = 'The weather is comfortable today'
    elif temp >= 0:
        msg = 'Quite chilly! Don''t forget your coat.'
    else:
        msg = 'Brrr, that''s freezing! Wear some extra layers today.'
    print (msg)

main()

#8
data = [{"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}]

def ask(data):
    right = 0
    wrong = 0
    wrong_answers = []
    for block in data:
        print('Question:', block.get("question"))
        answer = input ('Your answer: ')
        if answer == block.get("answer"):
            right += 1
        else:
            wrong += 1
            wrong_answers.append(answer)
    # print (wrong_answers)
    inform(right, wrong)

def inform (right, wrong):
    print(f'You have {right} correct and {wrong} incorrect answers.')

ask(data)