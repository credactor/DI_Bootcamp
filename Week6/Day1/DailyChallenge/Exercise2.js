// 1. Create three functions. The two first functions should return a promise..
// 2. The first function is named toJs():
//     this function converts the morse json string provided above to a morse javascript object. 
//     if the morse javascript object is empty, throw an error (use reject) 
//     else return the morse javascript object (use resolve)
// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object. 
//     This function asks the user for a word or a sentence. 
//     if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject) 
//     else return an array with the morse translation of the user’s word.
//         if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//         if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array 
//     this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// 5. Chain the three functions. 

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