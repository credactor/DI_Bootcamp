// Exercise 3: File Management using CommonJS syntax
// 1. Create a file named fileManager.js.
// 2. Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile. 
//     Implement the readFile function to read the content of a specified file using the fs module. 
//     Implement the writeFile function to write content to a specified file using the fs module.
// 3. Create a file “Hello World.txt” containing the sentence “Hello World !! “
// 4. Create a file “Bye World.txt” containing the sentence “Bye World !! “
// 5. Create another file named app.js.
// 6. In app.js, import the functions from the fileManager.js module.
// 7. Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.
// 8. Run app.js and verify that the file reading and writing operations are successful.

const fs = require("fs");

const readFile = (file) => {
    fs.readFile(file, 'utf-8', (err, data) =>{
        if (err) return console.log (err)
       console.log (data); 
    })
}

const writeFile = (file, data) => {
    fs.writeFile(file, data, 'utf-8', (err) =>{
        if (err) return console.log(err)})
}

module.exports = { readFile, writeFile };