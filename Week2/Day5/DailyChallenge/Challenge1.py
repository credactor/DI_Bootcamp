# PART 1: Quizz
# 1. What is a class?   In OOP, a class is a blueprint for creating objects, providing initial values for state, and implementations of behavior

# 2. What is an instance?   An instance is a copy of the class with actual values, literally an object belonging to a specific class.

# 3. What is encapsulation?    Encapsulation is the bundling of data with the mechanisms or methods that operate on the data.
 
# 4. What is abstraction?    Abstraction is the use of only the definition of the characteristics of an object, without describing their concrete/detailed implementations.

# 5. What is inheritance?    Inheritance is the process by which one class takes on the attributes and methods of another.

# 6. What is multiple inheritance?    Multiple inheritance means that a subclass can inherit from two or more superclasses

# 7. What is polymorphism?    In OOP, polymorphism is the provision of a single interface to entities of different types.

# 8. What is method resolution order or MRO?   Method resolution order defines the order in which the base classes are searched when executing a method.

# -------------------------------------------------------------------------------

# PART 2: Create a deck of cards class
# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
#     The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#     The Deck class :
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card():
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck():
    def __init__(self, list_of_cards):
        self.list_of_cards = list_of_cards

    def shuffle_deck(self):
        random.shuffle(self.list_of_cards)
    
    def deal(self):        
        return self.list_of_cards.pop()

standard_deck = [Card(suit, value) for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']
                 for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']]

new_deck = Deck(standard_deck)

for i in range (10): # shuffle and deal 10 cards
    new_deck.shuffle_deck()
    dealt_card = new_deck.deal()
    print ("The card dealt from a deck:", dealt_card.value, "of", dealt_card.suit)


