const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's??",
        a: "Largest railway station",
        b: "Highest railway station",
        c: "Longest railway station",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Entomology is the science that studies??",
        a: "Behavior of human beings",
        b: "Insects",
        c: "The origin and history of technical and scientific terms",
        d: "The formation of rocks",
        correct: "b",
    },
    {
        question: "Garampani sanctuary is located at??",
        a: "Junagarh, Gujarat",
        b: "Kohima, Nagaland",
        c: "Diphu, Assam",
        d: "Gangtok, Sikkim",
        correct: "c",
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded??",
        a: "Physics and Chemistry",
        b: "Physiology or Medicine",
        c: "Literature, Peace and Economics",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "When is the World's Diabetes Day??",
        a: "14th November",
        b: "11th December",
        c: "15th October",
        d: "1st July",
        correct: "a",
    },
    {
        question: "With which sport is the Jules Rimet trophy associated??",
        a: "Basketball",
        b: "Football",
        c: "Hockey",
        d: "Golf",
        correct: "b",
    },
    
];
const quiz= document.getElementById('quiz')
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
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})