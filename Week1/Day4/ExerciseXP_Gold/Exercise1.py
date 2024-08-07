# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.

# Some Hints
# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.

import time
from datetime import date

def get_age(birthdate):
    today = date.today()
    year = birthdate.tm_year
    month = birthdate.tm_mon
    day = birthdate.tm_mday
    age = today.year - year - ((today.month, today.day) < (month, day))
    return age

def can_retire(gender, date_of_birth):
    age = get_age(date_of_birth)
    if (gender == 'm' and age >= 67) or (gender == 'f' and age >= 62):
        answer = True
    else: answer = False
    return answer

gender = input('Enter your gender ("m" or "f"): ')
if gender not in 'mf':
    print('Invalid gender!')
    exit()
birthday = input('Enter your birthday (DD/MM/YYYY): ')
try:
    birthdate = time.strptime(birthday, '%d/%m/%Y')
except ValueError:
    print('Invalid date!')
    exit()
if can_retire(gender, birthdate) == True:
    print ('You can retire!')
else:
    print ('You cannot retire yet.')