const fs = require("fs")

//For synchronous reading of directory.
const files = fs.readdirSync("./node_modules")
console.log(files)

//For asynchronous reading of directory.
fs.readdir("./node_modules", (err, filesList) => {
    if (err) {
        throw err
    }
    console.log(filesList)
})