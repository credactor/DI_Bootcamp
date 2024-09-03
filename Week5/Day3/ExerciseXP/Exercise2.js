// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
    console.log(`Your full name is ${objUser.first} ${objUser.last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});