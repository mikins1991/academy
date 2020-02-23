import { currentTest } from './currentTest.js'

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));

const MAX_QUESTIONS = 3;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
// let questionCounter = 0;
let availableQuesions = [];


function startTest() {
    let questionCounter = 0;
    score = 0;
    availableQuesions = [...currentTest];
    getNewQuestion();
};
console.log(currentTest)

console.log(availableQuesions)

function getNewQuestion() {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        console.log('off');
    } else {

        currentQuestion = availableQuesions[questionCounter];
        question.innerText = currentQuestion.question;
        console.log(currentQuestion.question)

        answers.forEach(answer => {
            const number = answer.dataset["number"];
            answer.innerText = currentQuestion["answer" + number];
        });


        // acceptingAnswers = true;
        questionCounter++;
    }
};

answers.forEach(answer => {
    answer.addEventListener("click", event => {
        // if (!acceptingAnswers) return;

        // acceptingAnswers = false;

        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // const classToApply =
        if (selectedAnswer == currentQuestion.answerCorrect) {
            selectedChoice.style.backgroundColor = 'green';
            "correct"

        } else {
            selectedChoice.style.backgroundColor = 'red';

            "incorrect"
        };

        // selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.style.backgroundColor = '';

            // selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1500);
    });
});

startTest();