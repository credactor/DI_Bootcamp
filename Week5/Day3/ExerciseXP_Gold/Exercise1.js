// Create a function called printFullName.
// The function should return a string like the example below

// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`

// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)
// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

function printFullName(objUser){
    console.log(`Your full name is ${objUser.first} ${objUser.last}`);
}

printFullName({first: 'Elie', last:'Schoppik'});