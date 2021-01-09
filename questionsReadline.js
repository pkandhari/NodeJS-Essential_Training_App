const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "what's your name? ",
    "Where do you live? ",
    "What are you going to do with Node js? "
]

const collectAnswers = (questionsInput, done) => {
    const answers = []
    const [firstQuestion] = questionsInput
    const questionAnswered = answer => {
        answers.push(answer)
        if (answers.length < questionsInput.length) {
            rl.question(questionsInput[answers.length], questionAnswered)
        } else {
            done(answers)
        }
    }

    rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questions, answers => {
    console.log("Thanks for answering!")
    console.log(answers)
    process.exit()
})