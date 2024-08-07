# Using this list of magician’s names
# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

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