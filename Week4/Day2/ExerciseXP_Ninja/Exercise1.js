// Hint: - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
// Create two objects, each object should hold a person’s details. Here are the details:
//     FullName
//     Mass
//     Height
// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.

function BMI (mass, height) {
    return mass / height ** 2;
}
const first = {
    name: 'Fool Name',
    mass: 110,
    height: 1.65,
    bmi: BMI (110, 1.65)
}
const second = {
    name: 'Smart Name',
    mass: 80,
    height: 1.75,
    bmi: BMI (80, 1.75)
}

if (first.bmi > second.bmi) {
    console.log(first.name)
}
else {
    console.log(second.name)
}