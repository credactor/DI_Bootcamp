# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

from datetime import datetime

def until_the_new_year():
    now = datetime.today()
    new_year = datetime(2025,1,1)
    d = new_year - now
    mm, ss = divmod(d.seconds, 60)
    hh, mm = divmod(mm, 60)
    print('The 1st of January is in {} days {} hours {} minutes {} seconds'.format(d.days, hh, mm, ss))

until_the_new_year()