# 1. Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns 
# item_id : SERIAL PRIMARY KEY 
# item_name : VARCHAR(30) NOT NULL 
# item_price : SMALLINT DEFAULT 0
# 2. In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
# 3. Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.
# 4. In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.
# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

import psycopg2, os#, menu_editor
from dotenv import load_dotenv
load_dotenv()
DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')
connection = psycopg2.connect (database= DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT)
cursor = connection.cursor()

class MenuItem():
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        query = f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', '{self.price}')"
        cursor.execute(query)
        connection.commit()
    
    def update(self, name, price = 0):
        query = f"UPDATE menu_items SET item_name = '{name}', item_price = '{price}' WHERE item_name = '{self.name}';"
        self.name = name
        self.price = price
        cursor.execute(query)
        connection.commit()
        
    def delete(self):
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}'"
        cursor.execute(query)
        connection.commit()

class MenuManager():
    @staticmethod
    def get_by_name(name):
        query = f"SELECT item_name, item_price FROM menu_items WHERE item_name = '{name}'"
        cursor.execute(query)
        results = cursor.fetchall()
        if results:
            return results
        else:
            return None
    
    @staticmethod
    def all_items():
        query = f"SELECT item_name, item_price FROM menu_items"
        cursor.execute(query)
        results = cursor.fetchall()
        return results

# manager = MenuManager()
# item1 = MenuItem('Burger', 35)
# item1.save()
# item1.update('Veggie Burger', 37)
# item2 = MenuItem('Beef Stew', 25)
# item2.save()
# item3 = MenuItem('Cola', 5)
# item3.save()
# item4 = MenuItem('Cake', 10)
# item4.save()
# item1.delete()
# print (manager.get_by_name('Beef Stew'))
# print (manager.get_by_name('Chiken'))
# all = manager.all_items()
# for i in all:
#     print (i)
# connection.close()
