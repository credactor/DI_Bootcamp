# Ask the user to input a month (1 to 12).
# Display the season of the month received :
#     Spring runs from March (3) to May (5)
#     Summer runs from June (6) to August (8)
#     Autumn runs from September (9) to November (11)
#     Winter runs from December (12) to February (2)
#
month_number = int(input('Please enter a month number (1 to 12): '))
if month_number in (3, 4, 5):
    print ("Spring")
elif month_number in (6, 7, 8):
    print ("Summer")
elif month_number in (9, 10, 11):
    print ("Autumn")
elif month_number in (12, 1, 2):
    print ("Winter")