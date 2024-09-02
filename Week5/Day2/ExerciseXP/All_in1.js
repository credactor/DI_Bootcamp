//1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => { 
    console.log(`${index+1} choise is ${color}.`); 
});

if (colors.some((value)=> { return (value === "Violet"); })) {
    console.log("Yeah");
}
else {
    console.log("No...");
}

//2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    index + 1 < 4 ? suffix = ordinal[index+1] : suffix = ordinal[0];
    console.log(`${index+1}${suffix} choise is ${color}.`); 
});

//3
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // -> ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]); // -> ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); // -> [undefined, undefined]

//4
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

//5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let text = epic.reduce ((acc, val) => acc + " " + val);
console.log (text);

//6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

const studentsPassed = students.filter(elem => elem.isPassed === true);
console.log (studentsPassed);
students
    .filter(elem => elem.isPassed)
    .forEach((elem) => {
        console.log(`Congratulations, ${elem.name}, you passed the course in ${elem.course}.`);
    });
