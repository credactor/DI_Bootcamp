// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
//     If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//     else, reject the promise with a reason.
// 3. The second function called sortWords(), takes an array of words uppercased as an argument
//     If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//     else, reject the promise with a reason.

function makeAllCaps(array) {
    let allcaps = new Promise(function (resolve, reject) {
        if (array.every((value) => {return typeof(value) === 'string'})) {
            array.forEach((value, index) => {
                array[index] = value.toUpperCase()});
            resolve(array);
        } 
        else {
            reject("Rejected. Not all array elements are strings.");
        }
    })
    return allcaps;
}

function sortWords(array) {
    let sorted = new Promise(function (resolve, reject) {
        if (array.length > 4) {
            array.sort();
            resolve(array);
        } 
        else {
            reject("Rejected. The array length is not bigger than 4.");
        }
    })
    return sorted;
}

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));
