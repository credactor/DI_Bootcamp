from faker import Faker

def add_someone():
    users.append({'name': fake.name(), 'address': fake.address(), 'lang_code': fake.language_code()})

fake = Faker()
users = []
for i in range (5):
    add_someone()
print (users)