// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
//     The copy should NOT include “Mary” or your name.
//     Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//     Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people[2] = 'Jason'
people.push('Stan')
console.log(people.indexOf("Mary"));
new_people = people.slice(1, people.length-1)
console.log(new_people)
console.log(people.indexOf("Foo"));
last = people[people.length-1]
console.log(people)
console.log(last)

for (let i in people) {
    console.log(people[i])
}

for (let i in people) {    
    console.log(people[i])
    if (people[i] === 'Devon') {
        break;
    }
}