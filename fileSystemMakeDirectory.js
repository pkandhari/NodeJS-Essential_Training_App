const fs = require("fs")

let dirName = "New-Directory"

if (fs.existsSync(dirName)) {
    console.log("Directory already exist.")
} else {
    fs.mkdir(dirName, err => {
        if (err) {
            throw err
        }
        console.log("Directory Created!")
    })
}

