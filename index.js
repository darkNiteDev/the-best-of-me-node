const questions = [
    "What I learned today?",
    "What bored me? How could I have gone better?", 
    "which mades me happy?",
    "How many people I helped today?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + ">")
}

ask()

const answers =[] 
process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
     } else{
         console.log(answers)
        process.exit()    
        }
    
})

process.on('exit', () => {
    console.log(`Amazing!
    
    What you learned today was:
    ${answers[0]} 

    What bored you was and that you could have improved was:
    ${answers[1]} 

    Which made you happy was:
    ${answers[2]} 

    You helped ${answers[3]} people today!
    ${answers[3]} 

    Come back tomorrow for further reflections

    `)

})

