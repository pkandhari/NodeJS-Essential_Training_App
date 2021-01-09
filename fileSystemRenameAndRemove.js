const fs = require("fs")

//------------------RENAMING OF DIRECTORY------------------------
//For synchronous renaming of directory.
fs.renameSync("./FolderRename", "./FolderRename1")

//For asynchronous renaming of directory.
fs.rename("./FolderRename1", "./FolderRename2", err => {
    if (err) {
        throw err
    }
})

//------------------RENAMING OF FILE------------------------
//For synchronous renaming of file.
fs.renameSync("./assets/Test.txt", "./assets/Test1.txt")

//For asynchronous renaming of file.
fs.rename("./assets/Test1.txt", "./assets/Test2.txt", err => {
    if (err) {
        throw err
    }
})

setTimeout(() => {
    fs.unlinkSync("./assets/FileToDelete.txt", err => {
        if (err) {
            throw err
        }
    })
}, 4000)