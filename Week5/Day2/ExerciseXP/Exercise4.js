// 1. Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
//     const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
            { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
            { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
            { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
            { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
            { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(elem => `Hello ${elem.firstName}`);
console.log (welcomeStudents);
const fsResidents = users.filter(elem => elem.role === 'Full Stack Resident');
console.log (fsResidents);
const chain = users
    .filter(elem => elem.role === 'Full Stack Resident')
    .map((elem) => elem.lastName);
console.log (chain);