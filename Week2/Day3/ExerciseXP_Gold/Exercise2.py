# Given an age in seconds, calculate how old someone would be on:
#     Earth: orbital period 365.25 Earth days, or 31557600 seconds
#     Mercury: orbital period 0.2408467 Earth years
#     Venus: orbital period 0.61519726 Earth years
#     Mars: orbital period 1.8808158 Earth years
#     Jupiter: orbital period 11.862615 Earth years
#     Saturn: orbital period 29.447498 Earth years
#     Uranus: orbital period 84.016846 Earth years
#     Neptune: orbital period 164.79132 Earth years

# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

age = 1500000000
year = 31557600
coeff = {'Earth': 1, 
    'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132
}
print ("Your age in planetary years:")
for key, value in coeff.items():
    print (f"You are {round(age/year/value, 2)} {key}-years old")
