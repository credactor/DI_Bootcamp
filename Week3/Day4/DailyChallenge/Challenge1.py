import psycopg2, requests, json, os
from random import choices
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

connection = psycopg2.connect (database= DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT)

cursor = connection.cursor()
countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()

file_name = 'first_country.json'
with open(file_name, 'w') as file:
        json.dump(data, file, indent=2)

random_countries = choices(list(range(len(data))), k=10)

for i in random_countries:
    name = data[i]['name']['common']
    capital = data[i]['capital'][0].replace('\'', '`')
    flag = data[i]['flag']
    region = data[i]['region']
    population = data[i]['population']
    query = f'''INSERT INTO random_countries 
    (name, capital,flag_code, subregion, population) 
    VALUES ('{name}', '{capital}', '{flag}', '{region}','{population}')'''
    cursor.execute(query)
    connection.commit()

print('Sucessfully added to the database')
