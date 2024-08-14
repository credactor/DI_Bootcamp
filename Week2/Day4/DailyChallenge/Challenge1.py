# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code
#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file. https://github.com/devtlv/theStranger_text_W5D4PY
#     Implement a classmethod that returns a Text instance but with a text file:
#     Hint: You need to open and read the text from the text file.
#     Now, use the provided the_stranger.txt file and try using the class you created above.

import string

class Text():
    def __init__(self, content):
        self.content = content    
    #def list_of_words(self):
        tab = str.maketrans(string.punctuation, ' ' * len(string.punctuation))
        my_list = self.content.translate(tab).split()
        self.my_list = [x.lower() for x in my_list]
        self.total = len(self.my_list)

    def frequency(self, word):
        word_freq = round (self.my_list.count(word.lower()) *100 / self.total, 3)
        if word_freq == 0:
            return (f"There is no word '{word}' in the text.")
        else:
            return (f"The frequency of '{word}' is {word_freq}%.")

    def the_most(self):
        word = ""
        max_freq = 0
        for i in self.my_list:
            word_freq = round (self.my_list.count(i) *100 / self.total, 3)
            if word_freq > max_freq:
                word = i
                max_freq = word_freq
        return word, max_freq

    def unique(self):
        uniques = []
        for i in self.my_list:
            if self.my_list.count(i) == 1:
                uniques.append(i)
        return uniques

#content = Text("A good book would sometimes cost as much as a good house.")
f = open('.\\Other\\the_stranger.txt', 'r')
content = Text(f.read())
f.close()
print (content.frequency('cost'))
word, max_freq = content.the_most()
print (f"The most common word in the text is '{word}': {max_freq}%.")
print ("Unique words in the text:", content.unique())



