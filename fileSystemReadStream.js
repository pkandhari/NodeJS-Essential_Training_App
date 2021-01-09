const fs = require("fs")
const readStream = fs.createReadStream("./assets/TestReadStream.txt","UTF-8")

let fileDate

readStream.on("data", data => {
    console.log(`Read ${data.length - 1} characters of file`)
    fileDate += data
})

readStream.on("end", () => {
    console.log("Finished reading file")
    console.log(`In total read ${fileDate.length - 1} characters of file`)
})