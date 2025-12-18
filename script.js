let questions = [
    {
        id: 0,
        question: "Which of these possess a mangekyou sharingan?",
        answers: [
            { text: "Monkey.D Luffy", correct: false },
            { text: "Naruto Uzamaki", correct: false },
            { text: "Brandon Coochieha", correct: false },
            { text: "Shisui Uchiha", correct: true }

        ]
    },
    {
        id: 1,
        question: "What language do they speak in Brazil?",
        answers: [
            { text: "Patois", correct: false },
            { text: "Portoguese", correct: true },
            { text: "Cheesecake", correct: false },
            { text: "Russian", correct: false }

        ]
    },
    {
        id: 2,
        question: "What colour is also a fruit?",
        answers: [
            { text: "Orange", correct: true },
            { text: "Red", correct: false },
            { text: "Brown", correct: false },
            { text: "Rainbow", correct: false }

        ]
    },
    {
        id: 3,
        question: "What is the best job?",
        answers: [
            { text: "Accountant", correct: false },
            { text: "Pharmacist", correct: false },
            { text: "Firefighter", correct: false },
            { text: "Software Engineer", correct: true }

        ]
    }
]

let questionIndex = 0
let score = 0

function renderQuestion() {

    //Remove the start butto if it exists
    if (document.getElementById('start') != null) {
        document.getElementById('start').remove()
    } else {
        document.getElementById('next').remove()

    }

    const prevAnswersDiv = document.getElementById("answers-div")
    prevAnswersDiv.remove()

    let currentQuestion = questions[questionIndex]


    const answersDiv = document.createElement("div")
    const question = document.createElement("h2")

    question.textContent = currentQuestion.question

    const next = document.createElement("button")

    next.textContent = "Next"

    answersDiv.setAttribute("id", "answers-div")
    next.setAttribute("onclick", "renderQuestion()")
    next.setAttribute("id", "next")

    answersDiv.appendChild(question)

    currentQuestion.answers.forEach((answer, index) => {
        //create a button for each answer
        const answerElement = document.createElement("button")
        answerElement.textContent = answer.text
        console.log("THIS IS THE ANSWER INDEX IN RENDER", index);
        answerElement.id = `answer-${index}`

        //Adds an event listener on the button instead of an onclick
        answerElement.addEventListener("click", () => {
            checkAnswer(answer,index)
        })

        answersDiv.append(answerElement)

    })

    const currentDiv = document.getElementById("main")
    const navigation = document.getElementById("navigation")

    navigation.appendChild(next)

    currentDiv.appendChild(answersDiv)

    questionIndex++

}

function checkAnswer(answer, index){
    console.log("THIS IS THE ANSWER INDEX IN CHECK ANSWER", answer.id);
    console.log('Heres the answer that was passed through', answer);
    if(answer.correct == true){
        console.log("DING DING DING");
        document.getElementById(`answer-${index}`).style.background = 'green'
        score++
        console.log("current score ", score);
    }else{
        console.log("FALSE EH AWWW");
        document.getElementById(`answer-${index}`).style.background = 'red'

    }
    //check whether the answer is correct or not
    // How can I check if they are correct
        // Inside the answer array I have a boolean correct: true
        // I can use this to see if its true then I'll console log that they got it correct
        // for now lets pass in the entire answer array

    // if the answer is incorrect make the button the user selected red
    // regardless make the correct answer green

}