const fs = require("fs")

//Firstly remove all the files in the directory
fs.readdirSync("./assetsToDelete").forEach(fileName => {
    fs.unlinkSync(`./assetsToDelete/${fileName}`)
})

//After remove all the files in the directory, Now remove Directory
fs.rmdir("./assetsToDelete", err => {
    if (err) {
        throw err
    }
    console.log("assestsToDelete directory removed successfully.")
})