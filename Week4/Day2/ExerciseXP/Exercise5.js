// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    family_name: 'Jones',
    city: 'Boston',
    family_members: 4
  }
 
// console.log(Object.keys(family));

Object.keys(family).forEach((key) => {
    console.log(key);
    })

Object.values(family).forEach((value) => {
    console.log(value);
    })