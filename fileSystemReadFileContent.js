const fs = require("fs")

//For synchronous reading of file content.
const text = fs.readFileSync("./assets/Test.txt", "UTF-8")
console.log(text)

//For asynchronous reading of file content.
fs.readFile("./assets/Test.txt", "UTF-8", (err, textData) => {
    if (err) {
        throw err
    }
    console.log(textData)
})

//For asynchronous reading of binary file content.
fs.readFile("./assets/TestImage.png", (err, imgData) => {
    if (err) {
        console.log(`An error has occurred: ${err.message}`)
        process.exit()
    }
    console.log(imgData)
})