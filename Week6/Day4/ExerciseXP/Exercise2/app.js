function averageAge(persons) {
    sum = persons.map((x) => x.age).reduce((x, y) => (x + y));
    average = sum / persons.length;
    console.log("The average age is ",average);
}

const persons = require("./data.js");
averageAge(persons);