# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

import requests
import time

def load_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    return round (end_time - start_time, 3)
    
sites = ["https://www.google.com", "https://www.imdb.com", "https://www.yahoo.com"]
for site in sites:
    print(f"The loading time for the {site} is {load_time(site)} s.")
    
    