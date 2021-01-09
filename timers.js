const waitTime = 3000

console.log(`setting ${waitTime/1000} seconds of delay `)
const finishedTimeOut = () => {
    console.log("Done waiting.")
}

setTimeout(finishedTimeOut, waitTime)