// Using the code below, Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// function winBattle(){
//     return true;
// }

const winBattle = () => true;
var experiencePoints;
winBattle ? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints);