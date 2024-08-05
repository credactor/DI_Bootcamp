# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:

#     ___iiiii___
#    |:H:a:p:p:y:|
#  __|___________|__
# |^^^^^^^^^^^^^^^^^|
# |:B:i:r:t:h:d:a:y:|
# |                 |
# ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.
# Bonus : If they were born on a leap year, display two cakes !

import time
import calendar
from datetime import date
today = date.today()
birth = input('Enter your birthday (DD/MM/YYYY): ')
try:
   birthdate = time.strptime(birth, '%d/%m/%Y')
except ValueError:
   print('Invalid date!')
   exit()
year = birthdate.tm_year
month = birthdate.tm_mon
day = birthdate.tm_mday
age = today.year - year - ((today.month, today.day) < (month, day))
cakes = 1
if calendar.isleap(year):
   cakes = 2
if age > 0:
   candels = age % 10
   # print (age, cakes, candels)
   for i in range (cakes):
      space = (11 - candels) // 2
      print ()
      print ('     '+'_'*space+'i'*candels+'_'*space+'_'*(1-(candels % 2)))
      print ('    |:H:a:p:p:y:|')
      print ('  __|___________|__')
      print (' |^^^^^^^^^^^^^^^^^|')
      print (' |:B:i:r:t:h:d:a:y:|')
      print (' |                 |')
      print (' ~~~~~~~~~~~~~~~~~~~')