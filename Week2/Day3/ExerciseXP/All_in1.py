#1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        text = f"{str(self.amount)} {self.currency}"
        if self.amount != 1:
            text += "s"
        return (text)

    def __int__(self):
        return (int(self.amount))

    def __repr__(self):
        text = f"{str(self.amount)} {self.currency}"
        if self.amount != 1:
            text += "s"
        return (text)
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                total = self.amount + other.amount
                text = f"{total} {self.currency}"
                if total != 1:
                    text += "s"
                return (text)
            else:
                raise Exception (f"TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            total = self.amount + int(other)
            text = f"{total} {self.currency}"
            if total != 1:
                    text += "s"
            return (text)

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                total = self.amount + other.amount
            else:
                raise Exception (f"TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            total = self.amount + other
        return Currency(self.currency, total)


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(c1)
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)

#2
from func import summa
summa (2, 3) 

#3
import string
import random
text = ""
for i in range (5):
    text += random.choice(string.ascii_letters)
print (text)

#4
from datetime import date

def current_date():
    print (date.today())

current_date()

#5
from datetime import datetime

def until_the_new_year():
    now = datetime.today()
    new_year = datetime(2025,1,1)
    d = new_year - now
    mm, ss = divmod(d.seconds, 60)
    hh, mm = divmod(mm, 60)
    print('The 1st of January is in {} days {} hours {} minutes {} seconds'.format(d.days, hh, mm, ss))

until_the_new_year()

#6
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

#7
from faker import Faker

def add_someone():
    users.append({'name': fake.name(), 'address': fake.address(), 'lang_code': fake.language_code()})

fake = Faker()
users = []
for i in range (5):
    add_someone()
print (users)