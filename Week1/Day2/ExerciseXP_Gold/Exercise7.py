#Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

million = list(range(1, 1000001))
print(min(million))
print(max(million))
print(sum(million))
