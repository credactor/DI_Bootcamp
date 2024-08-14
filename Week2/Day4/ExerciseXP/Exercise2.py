# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

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