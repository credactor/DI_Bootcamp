// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log(results);
  }).catch((error) => {
    console.log(error);
});
  
// The Promise.all() takes an array of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill, with an array of the fulfillment values.
