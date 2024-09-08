//1
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

//2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

function toJs(obj) {
    let jsonPromise = new Promise(function (resolve, reject) {
        if (Object.keys(obj).length !== 0) {
            let jsonObj = JSON.parse(obj);
            resolve(jsonObj);
        } 
        else {
            reject("Rejected. Object is empty!");
        }
    })
    return jsonPromise;
}

function toMorse(morseJS) {
    let input = "hello!";
    let morsePromise = new Promise(function (resolve, reject) {
        symbols = new Set(input.split(""));        
        for (i of symbols) {
            if (i in morseJS === false) {
                reject(`Rejected. The character ${i} doesn't exist in the morse javascript object`);
                return morsePromise;
            }
        }
        morseList = [];
        for (i of input) {
            morseList.push(morseJS[String(i)]);
        }
        resolve(morseList);
    });
    return morsePromise;
}

function joinWords(morseTranslation) {
    return morseTranslation.join("\n");
}

toJs(morse)
    .then((result) => toMorse(result))
    .then((result) => joinWords(result))
    .then((result) => console.log(result))
    .catch(error => console.log(error));

