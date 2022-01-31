// Theme Functions 

function theme_1() {
    document.querySelector('body').style.backgroundColor = '#D9D7F1';
}
function theme_2() {
    document.querySelector('body').style.backgroundColor = '#FFEEAD';
}
function theme_3() {
    document.querySelector('body').style.backgroundColor = '#DDFFBC';
}

// Data Functions 

const quizData = [
    {
        question: "What can you never eat for breakfast?",
        a: 'Lunch',
        b: 'Crush',
        c: 'Flying Chappal',
        d: 'Dinner',
        correct: 'b'
    },
    {
        question: "What can one catch that is not thrown?",
        a: 'A fish',
        b: 'A bird',
        c: 'A cat',
        d: 'A cold',
        correct: 'd'
    },
    {
        question: "How can a girl go 25 days without sleep?",
        a: 'uk what I mean by this',
        b: 'She sleeps at night',
        c: 'She is a Witch',
        d: 'Boost is the secret of her energy',
        correct: 'b'
    },
    {
        question: "How do you make the number one disappear?",
        a: 'Add G',
        b: 'Add 1',
        c: 'Add Girl',
        d: 'Eraser',
        correct: 'a'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});