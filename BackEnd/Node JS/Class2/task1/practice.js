const fs = require("fs");
console.log(fs);

// write file
fs.writeFileSync("note.txt", "I am learning Backend \n")

// append file
fs.appendFileSync("note.txt", "My name is Bhagyalaxmi")

// read file
const read = fs.readFileSync("note.txt")
console.log(read.toString());

// create folder
fs.mkdirSync("Rinu")

// rename folder
fs.renameSync("file", "Node");