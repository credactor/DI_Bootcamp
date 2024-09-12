// Exercise 7: Reading and Copying Files
// 1. Create a directory named file-explorer.
// 2. Inside the file-explorer directory, create a file named copy-file.js.
// 3. In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.
// 4. Create another file named read-directory.js.
// 5. In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.
// 6. Open a terminal in the file-explorer directory.
// 7. Run node copy-file.js to copy the content from source.txt to destination.txt.
// 8. Run node read-directory.js to list the files in the directory.

const fs = require("fs");

const wf = (path, data) => {
    fs.writeFile(path, data, 'utf-8', (err) =>{
        if (err) return console.log(err)})
}

const rf = (path) => {
    fs.readFile(path, 'utf-8', (err, data) =>{
        if (err) {
            console.log(err);
            return
        }
        wf("destination.txt", data)
        console.log (`File written.`)
    })
}

rf("source.txt")