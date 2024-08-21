# Create a file called menu_editor.py , which will have the following functions:
# 1. show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
#   View an Item (V) 
#   Add an Item (A) 
#   Delete an Item (D) 
#   Update an Item (U) 
#   Show the Menu (S)
# Call the appropriate function that matches the user’s input. 
# 2. add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#   If the item was added successfully print a message which states: item was added successfully.
# 3. remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#   If the item was deleted successfully – print a message to let the user know this was completed. 
#   If not – print a message which states that there was an error. 
# 4. update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#   If the item was updated successfully – print a message to let the user know this was completed. 
#   If not – print a message which states that there was an error. 
# 5. show_restaurant_menu() - print the restaurant’s menu.
# When the user chooses to exit the program, display the restaurant menu and exit the program. 

from menu_item import MenuManager, MenuItem
def show_user_menu():
    while True:
        choice = input("Enter (V)iew, (A)dd, (D)elete, (U)pdate an item, (S)how the menu or (E)xit: ")[0].upper()
        if choice == "V":
            view_item()
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "E":
            show_restaurant_menu()
            return

def view_item():
    name = input('Enter the name of the item: ')
    print (manager.get_by_name(name)[0])

def add_item_to_menu():
    name = input('Enter the name of the item: ')
    price = int(input("Enter the price of the item: "))
    item = MenuItem(name, price)
    item.save()

def remove_item_from_menu():
    name = input('Enter the name of the item: ')
    item = manager.get_by_name(name)[0]
    to_delete = MenuItem(item[0], item[1])
    to_delete.delete()

def update_item_from_menu():
    name = input('Enter the name of the item: ')
    price = int(input("Enter the price of the item: "))
    item = manager.get_by_name(name)[0]
    to_update = MenuItem(item[0], item[1])
    to_update.update(name, price)

def show_restaurant_menu():
    print("Restaurant Menu:")
    all = manager.all_items()
    for i in all:
        print (i)

manager = MenuManager()
show_user_menu()