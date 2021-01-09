const questions = [
    "What is your name?",
    "What are you doing?",
    "What is your programming language?"
]

const ask = (i = 0) => {
    process.stdout.write(`\n ${questions[i]} \n`)
    process.stdout.write(`>`)
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
const [name,activity,language]=answers

console.log(`
Thanks you for your answers!
Go ${activity} ${name}, you can do programming in ${language} later.
`)
})