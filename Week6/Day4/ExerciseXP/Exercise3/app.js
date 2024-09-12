const {readFile, writeFile} = require("./fileManager.js");
readFile(__dirname + "\\Hello World.txt");
writeFile(__dirname + "\\Bye World.txt", "Writing to the file");