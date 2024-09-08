// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

myPromise = Promise.resolve(3).then((value) => console.log(value));
newPromise = Promise.reject('Boo!').catch((value) => console.log(value));