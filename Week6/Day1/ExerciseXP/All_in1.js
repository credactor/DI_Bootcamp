//1
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

//2
const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success!");
    }, 4000);
  })
.then((result) => console.log(result));

//3
myPromise = Promise.resolve(3).then((value) => console.log(value));
newPromise = Promise.reject('Boo!').catch((value) => console.log(value));


