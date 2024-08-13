# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import time
from datetime import datetime
def life_in_minutes():    
    today = datetime.today()
    birth = input('Enter your birthday (DD/MM/YYYY): ')
    try:
        birthdate = time.strptime(birth, '%d/%m/%Y')
    except ValueError:
        print('Invalid date!')
        exit()
    birthdate = datetime(birthdate.tm_year, birthdate.tm_mon, birthdate.tm_mday)
    age = ((today - birthdate).days) * 24 * 60
    age += today.hour * 60 + today.minute
    print("You lived for", age, "minutes")

life_in_minutes()