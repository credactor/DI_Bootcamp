# Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.
# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.
# Add a method called show_call_history. This method should print the call_history.
# Add another attribute called messages to your __init__() method which value is an empty list.
# Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
#     to : the number of another Phone object
#     from : your phone number (also a Phone object)
#     content
# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)
# Test your code !!!

class Phone():
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    
    def call (self, other_phone):
        call = f"{self.phone_number}, {other_phone.phone_number}"
        self.call_history.append(call)
        other_phone.call_history.append(call)

    def send_message (self, other_phone, content):
        message = {"to" : other_phone.phone_number, "from":self.phone_number,
                    "content": content}
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_call_history(self):
        print ('Phone number', self.phone_number, 'calls history:')
        for call in self.call_history:
            print (call)

    def show_outgoing_messages(self):
        print ('Phone number', self.phone_number, 'outgoing_messages:')
        for message in self.messages:
            if message["from"] == self.phone_number:
                print (f"to {message['to']}: {message['content']}")
        
    def show_incoming_messages(self):
        print ('Phone number', self.phone_number, 'incoming_messages:')
        for message in self.messages:
            if message["to"] == self.phone_number:
                print (f"from {message['from']}: {message['content']}")
        
    def show_messages_from(self, other_phone):
        print ("Messages from", other_phone.phone_number, "to", self.phone_number)
        for message in self.messages:
            if message["from"] == other_phone.phone_number:
                print (message["content"])

my_phone = Phone("007")
her_phone = Phone("001")
his_phone = Phone("009")
their_phone = Phone("911")
my_phone.call(her_phone)
my_phone.call(her_phone)
her_phone.call(my_phone)
his_phone.call(their_phone)
their_phone.call(his_phone)
my_phone.call(his_phone)
her_phone.call(his_phone)
his_phone.call(my_phone)
their_phone.call(her_phone)

my_phone.show_call_history()

my_phone.send_message(her_phone, "Hey, how's everyone doing today?")
her_phone.send_message(my_phone, "I'm good, just finished my morning workout. How about you all?")
his_phone.send_message(my_phone, "I'm doing well too. I had a relaxing morning, reading a book.")
their_phone.send_message(my_phone, "Lucky you! I had to rush to work early, but it's going fine so far. By the way, did you guys watch that new movie?")
my_phone.send_message(his_phone, "Yeah, I saw it last night. It was awesome! The plot twists kept me on the edge of my seat.")
her_phone.send_message(my_phone, "I haven't watched it yet, but I heard it's worth seeing. No spoilers, please!")
his_phone.send_message(her_phone, "Don't worry, we won't give anything away. So, any plans for the weekend?")
their_phone.send_message(his_phone, "I'm thinking of going hiking. The weather looks perfect for it.")
my_phone.send_message(her_phone, "That sounds great! Count me in. We could all use some fresh air.")
her_phone.send_message(my_phone, "Sorry, guys, I won't be able to join this time. I promised my family I'd visit them this weekend.")
his_phone.send_message(their_phone, "No problem, family comes first. We'll plan another outing soon!")
their_phone.send_message(his_phone, "Absolutely! We should also plan a game night soon. It's been a while since we had one.")
my_phone.send_message(his_phone, "Agreed! We always have a blast during game nights.")
her_phone.send_message(their_phone, "I'll make sure to be there for the game night. I'll miss you guys this weekend, though.")
his_phone.send_message(my_phone, "We'll miss you too, but have a great time with your family!")
their_phone.send_message(my_phone, "Alright, it's settled then. Hiking this weekend and game night next week!")
my_phone.send_message(their_phone, "Sounds like a plan. Looking forward to it!")
her_phone.send_message(his_phone, "Me too. Let's keep in touch on the group chat for any updates.")
his_phone.send_message(her_phone, "Sure thing. See you all soon!")
their_phone.send_message(his_phone, "Take care, everyone. See you on the weekend!")

my_phone.show_outgoing_messages()
my_phone.show_incoming_messages()
my_phone.show_messages_from(her_phone)