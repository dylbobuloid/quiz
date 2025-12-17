let questions = [
    {
        question: "Which of these possess a mangekyou sharingan?",
        answers: [
            { text: "Monkey.D Luffy", correct: false },
            { text: "Naruto Uzamaki", correct: false },
            { text: "Brandon Coochieha", correct: false },
            { text: "Shisui Uchiha", correct: true }

        ]
    },
    {
        question: "What language do they speak in Brazil?",
        answers: [
            { text: "Patois", correct: false },
            { text: "Portoguese", correct: true },
            { text: "Cheesecake", correct: false },
            { text: "Russian", correct: false }

        ]
    },
    {
        question: "What colour is also a fruit?",
        answers: [
            { text: "Orange", correct: true },
            { text: "Red", correct: false },
            { text: "Brown", correct: false },
            { text: "Rainbow", correct: false }

        ]
    },
    {
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


function renderQuestion() {

    //Remove the start butto if it exists
    if (document.getElementById('start') != null) {
        document.getElementById('start').remove()
    } else {
        document.getElementById('next').remove()

    }

    // Remove the next tag otherwise there will be a duplicate
    // it probably isnt efficient re-rendering next every time but for now
    // this is the solution 

    const prevAnswersDiv = document.getElementById("answers-div")
    prevAnswersDiv.remove()


    let currentQuestion = questions[questionIndex]


    const answersDiv = document.createElement("div")
    const question = document.createElement("h2")

    question.textContent = currentQuestion.question

    const answer1 = document.createElement("button")
    const answer2 = document.createElement("button")
    const answer3 = document.createElement("button")
    const answer4 = document.createElement("button")
    const next = document.createElement("button")


    answer1.textContent = currentQuestion.answers[0].text
    answer2.textContent = currentQuestion.answers[1].text
    answer3.textContent = currentQuestion.answers[2].text
    answer4.textContent = currentQuestion.answers[3].text
    next.textContent = "Next"

    answersDiv.setAttribute("id", "answers-div")
    next.setAttribute("onclick", "renderQuestion()")
    next.setAttribute("id", "next")

    const currentDiv = document.getElementById("main")
    const navigation = document.getElementById("navigation")

    answersDiv.appendChild(question)
    answersDiv.appendChild(answer1)
    answersDiv.appendChild(answer2)
    answersDiv.appendChild(answer3)
    answersDiv.appendChild(answer4)

    navigation.appendChild(next)

    currentDiv.appendChild(answersDiv)

    //const startButton = document.getElementById("start")

    //startButton.remove()



    questionIndex++

    ``
}