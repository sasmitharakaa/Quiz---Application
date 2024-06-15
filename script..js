const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { Text: "shark", correct:false},
            { Text: "Blue Whale", correct:true},
            { Text: "Elephant", correct:false},
            { Text: "Giraffe", correct:false},
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { Text: "Asia", correct:false},
            { Text: "Australia", correct:true},
            { Text: "Arctic", correct:false},
            { Text: "Africa", correct:false},
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { Text: "Kalhari", correct:false},
            { Text: "Gobi", correct:true},
            { Text: "Sahara", correct:false},
            { Text: "Antarctica", correct:true},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            { Text: "shark", correct:false},
            { Text: "Blue Whale", correct:true},
            { Text: "Elephant", correct:false},
            { Text: "Giraffe", correct:false},
        ]
    },
    {
        question: "Which is largest river in the world?",
        answers: [
            { Text: "Nile River", correct:false},
            { Text: "Amazon River", correct:true},
            { Text: "Yangtze River", correct:false},
            { Text: "Mahaweli River", correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();