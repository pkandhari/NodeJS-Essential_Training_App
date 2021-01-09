const events = require("events")

const emitter = new events.EventEmitter()

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)
})

// emitter.emit("customEvent", "Hello", "Computer")
// emitter.emit("customEvent", "This is an example", "Pritpal")

process.stdin.on("data", data => {
    const input = data.toString().trim()
    if (input === "exit") {
        emitter.emit("customEvent", "Good Bye!", "Process")
        process.exit()
    }
    emitter.emit("customEvent", data, "Terminal")
})