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
        correct: 'Crush'
    },
    {
        question: "What can one catch that is not thrown?",
        a: 'A fish',
        b: 'A bird',
        c: 'A cat',
        d: 'A cold',
        correct: 'A cold'
    },
    {
        question: "How can a girl go 25 days without sleep?",
        a: 'uk what I mean by this',
        b: 'She sleeps at night',
        c: 'She is a Witch',
        d: 'She is sleeping somewhere else, where you cant see',
        correct: 'She sleeps at night'
    },
    {
        question: "How do you make the number one disappear?",
        a: 'Add G',
        b: 'Add 1',
        c: 'Add Girl',
        d: 'Eraser',
        correct: 'Add G'
    }
]

const questions = document.getElementById('question')
const opt_a = document.getElementById('opt-a')
const opt_b = document.getElementById('opt-b')
const opt_c = document.getElementById('opt-c')
const opt_d = document.getElementById('opt-d')
const submitBtn = document.getElementById('submit')

let currentQuestion = 0;

function loadQuiz() {
    questions.innerHTML = quizData[currentQuestion].question;
    opt_a.innerHTML = quizData[currentQuestion].a;
    opt_b.innerHTML = quizData[currentQuestion].b;
    opt_c.innerHTML = quizData[currentQuestion].c;
    opt_d.innerHTML = quizData[currentQuestion].d;
}

loadQuiz();
function atLeastOneRadio() {
    return ($('input[type=radio]:checked').size() > 0);
}
function noRadio() {
    return ($('input[type=radio]:checked').size() = 0);
}

if (currentQuestion <= quizData.length - 1) {
    if (currentQuestion == quizData.length - 1) {
        submitBtn.innerHTML = 'Finish';
    }
    else {
        if (atLeastOneRadio() && (submitBtn.onclick == true)) {
            currentQuestion++;
            loadQuiz();
        }
        else if (noRadio() && (submitBtn.onclick == true)) {
            alert('Please select an option');
            break;
        }
    }
}