// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success!");
    }, 4000);
  })
.then((result) => console.log(result));