// 1
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

// 2
let colors = ["blue", "yellow", "green", "pink"];
suffix = ["st", "nd", "rd", "th"]
for (let i in colors) {
    let n;
    n = parseInt(i) + 1;
    console.log("My #"+n,"choice is", colors[i])
}

for (let i in colors) {
    let n;
    n = parseInt(i) + 1;
    console.log("My",n+suffix[i],"choice is", colors[i])
}

// 3
while (true) {
    let text = prompt('Enter a number >= 10:');
    if (isNaN(text)) {
        console.log('Not a number!');
    } else {
        num = parseInt(text);
        console.log(num);
        if (num >= 10) {
            break;
        }
    }
}

// 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
if (building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// 5
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

// 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
  text = ""
  Object.entries(details).forEach((key, value) => {
    text = text + key[0] + " " + key[1] + " ";
    })
  console.log (text)

// 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
secret = ""
for (i in names) {
    secret += names[i][0]
}
secret = secret.split('').sort().join('');
console.log(secret);