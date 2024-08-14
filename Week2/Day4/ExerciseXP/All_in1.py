#1
import random

def get_words_from_file(file):
    f = open(file, 'r')
    content = [line.strip() for line in f]
    f.close()
    return content

def get_random_sentence(lenght):
    global content
    my_list = []
    for i in range (lenght):
        my_list.append((random.choice(content).lower()))
    return ' '.join(my_list)

def main():
    print ("This program creates a random sentence from 2 to 20 words long.")
    try:
        lenght = int(input("Please enter the length of the sentence: "))
    except ValueError:
        print('Invalid input!')
        exit()
    else:
        if 1 < lenght < 21:
            print(get_random_sentence(lenght))
        else:
            print ("Lenght must be a number from 2 to 20.")

file = '.\\Other\\sowpods.txt'
content = get_words_from_file(file)
main()

#2
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
sample = json.loads(sampleJson)
print (sample["company"]["employee"]['payable']['salary'])
sample["company"]["employee"]["birth_date"] = "01.01.2000"
f = open('.\\DI_Bootcamp\\Week2\\Day4\\ExerciseXP\\file.json', 'w+')
json.dump(sample, f, indent = 2, sort_keys = False)
f.close()