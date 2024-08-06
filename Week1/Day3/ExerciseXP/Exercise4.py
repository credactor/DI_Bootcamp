# Use this list :
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :
# #1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

#     Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
#     Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
#     Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
#     Only recreate the 1st result for:
#         The characters, which names contain the letter “i”.
#         The characters, which names start with the letter “m” or “p”.

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}
disney_users_C = {}
disney_users_I = {}
disney_users_MP = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
    disney_users_B[i] = users[i]
for i in range(len(users)):
    if 'i' in users[i]:
        disney_users_I[users[i]] = i
    if users[i][0] in ['M', 'P']:
        disney_users_MP[users[i]] = i
users.sort()
for i in range(len(users)):
    disney_users_C[users[i]] = i
print(disney_users_A)
print(disney_users_B)
print(disney_users_C)
print(disney_users_I)
print(disney_users_MP)