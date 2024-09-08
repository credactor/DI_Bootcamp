// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
//     the promise resolves if the argument is less than or equal to 10
//     the promise rejects if argument is greater than 10.

function compareToTen(num) {
    let compare = new Promise(function (resolve, reject) {
        if (num <= 10) {
            resolve("Resolved");
        } else {
            reject("Rejected");
        }
    })
    .then((value) => console.log(value))    
    .catch((value) => console.log(value));
};

compareToTen(15);
compareToTen(8);