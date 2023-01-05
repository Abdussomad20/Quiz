const quizData = [
    {
        question:"What is my Name?",
        a: "Lanre",
        b: "David",
        c: "Abdussomad",
        d: "Ismail",
        correct: "c",
    },
    {
    question:"What is my age?",
        a: "15",
        b: "23",
        c: "25",
        d: "29",
        correct: "b",
    },
    {
        question:"What is my brand name?",
        a: "Harzkid Brand",
        b: "Harzkid Work",
        c: "Harzkid Creatives",
        d: "Harzkid Development",
        correct: "c",
    },
    {
        question:"What is my stack?",
        a: "Front End Development",
        b: "Backend Development",
        c: "DevRel",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswers (){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if (answerEl.checked) {
            answer = answerEl.id
        }
        })
        return answer
}

submitBtn.addEventListener('click', () => { 
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }            

})
