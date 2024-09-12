const fs = require("fs");

fs.readdir(__dirname, (err, data) =>{
    if (err) return console.log(err); console.log(data);
    
});