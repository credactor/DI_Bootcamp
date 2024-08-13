# You have to recreate the result using a translator module. Take a look at the googletrans module
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}

from deep_translator import GoogleTranslator
french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
fr_en = {}
for word in french_words:
    translated = GoogleTranslator(source='fr', target='en').translate(word)
    fr_en[word] = translated
print (fr_en)



