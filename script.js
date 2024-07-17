const quizData = [
    {
       question: "Which of the following statements about let and const is true?",

a: "Both let and const are function-scoped.",

b: "Variables declared with const can be reassigned.",

c: "Variables declared with let can be reassigned, while variables declared with const cannot be reassigned.",

d:"let and const are hoisted in the same way as var.",
correct: "d"

    },
    {
        question: "console.log(2 + '2');",
        a: "4",
        b: "22",
        c: "NaN",
        d: "Syntax Error",
        correct: "B",
    },
    {
        question: "Which of the following commands is used to install TypeScript globally on your machine?",
        a: "npm install -g typescript",
        b: "npm install typescript",
        c: "tsc --init",
        d: "npm init typescript",
        correct: "a",
    },
    {
        question: " Which of the following methods can be used to add elements to the end of an array in TypeScript?        ",
        a: "push()",
        b: "pop() ",
        c: "shift()",
        d: "unshift()",
        correct: "a",
    },
    {
        question: "What is the correct way to define a function in TypeScript with a default parameter?        ",
        a:"`function greet(name: string = 'Guest') { console.log(name); }`",
        b: "`function greet(name?: string = 'Guest') { console.log(name); }`",
        c: "`function greet(name: string) { console.log(name || 'Guest'); }        `",
        d: "`function greet(name?: string) { console.log(name); }`",
        correct: "",
    },
    {
        question: "What happens when you try to access a variable declared with `let` or `const` before its declaration in TypeScript?        ",
        a: "It throws a syntax error. ",
        b: " It returns undefined.",
        c: "It throws a runtime error.",
        d: " It works fine without any issues.  ",
        correct: "a",
    },
    {
        question: "Which keyword is used to export a function or variable from a TypeScript module?        ",
        a: "export",
        b: "import",
        c: "module",
        d: "require",
        correct: "a",
    },
{
        question: "Which of the following statements about TypeScript's error handling is true?        ",
        a: "TypeScript supports try-catch-finally blocks for synchronous error handling.",
        b: "TypeScript automatically catches all runtime errors and logs them to the console.",
        c: "TypeScript does not support error handling at all.",
        d: "TypeScript treats all errors as warnings during compilation.",
        correct: "a",
    },
    {
        question: "Which TypeScript type represents a value that can be either true or false?        ",
        a: "boolean",
        b: "number",
        c: "string",
        d: "any",
        correct: "a",
    },
    {
        question: "let x = 10;        ",
        a: "number",
        b: "any",
        c: "string",
        d: "boolean",
        correct: "a",
    },
    {
        question: "Which TypeScript feature allows you to define a type that represents either one type or another?        ",
        a: "Type Aliases  ",
        b: "Type Literals",
        c: "Type Unions",
        d: "Type Intersection",
        correct: "c",
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