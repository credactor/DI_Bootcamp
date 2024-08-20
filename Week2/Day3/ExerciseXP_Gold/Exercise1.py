# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

from datetime import datetime, date

def until_the_holiday():
    now = datetime.today()
    print ("Today is", date.today())
    holiday = datetime(2024,10,2)
    d = holiday - now
    mm, ss = divmod(d.seconds, 60)
    hh, mm = divmod(mm, 60)
    print('The holiday is in {} days and {}:{}:{} hours.'.format(d.days, hh, mm, ss))

until_the_holiday()