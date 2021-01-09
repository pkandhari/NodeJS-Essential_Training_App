const fs = require("fs")

const md = `
This is an example.
We can write text to a file with fs.writeFile function.
`

const mdappend = `
This is an example of appending the file.
`

//For asynchronous creating and writing of file content.
fs.writeFile("./assets/Test.txt", md, err => {
    if (err) {
        throw err
    }
    console.log("File saved.")
})

//For asynchronous creating, writing and appending of file content.
fs.appendFile("./assets/Test.txt", mdappend, err => {
    if (err) {
        throw err
    }
    console.log("File appended successfully.")
})