import { currentTest } from './currentTest.js'
import { startTimer, stopTimer } from './timer.js'

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const progressText = document.getElementById('progressText');
const btnNext = document.getElementById('next');
const MAX_QUESTIONS = 3;

let currentQuestion = {};
let questionCounter = 0;
let availableQuesions = [];
let progressCounter = 0;

function startTest() {
    questionCounter = 0;

    availableQuesions = [...currentTest];
    getNewQuestion();
    startTimer();
};

function getNewQuestion() {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        console.log('off');
        stopTimer();
    } else {

        currentQuestion = availableQuesions[questionCounter];
        question.innerText = currentQuestion.question;

        answers.forEach(answer => {
            const number = answer.dataset["number"];
            answer.innerText = currentQuestion["answer" + number];
        });
        questionCounter++;
    }
    progressText.innerHTML = `Вопрос ${questionCounter}/${MAX_QUESTIONS}. Правильно ${progressCounter}`

};

answers.forEach(answer => {

    answer.addEventListener("click", event => {

        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.answerCorrect) {
            selectedChoice.style.backgroundColor = 'green';
            progressCounter++;

        } else {
            selectedChoice.style.backgroundColor = 'red';

            answers.forEach(answer => {
                const correct = answer.dataset["number"];
                if (correct == currentQuestion.answerCorrect) {
                    answer.style.backgroundColor = 'green';
                }
            });
        };

        progressText.innerHTML = `Вопрос ${questionCounter}/${MAX_QUESTIONS}. Правильно ${progressCounter}`

        // setTimeout(() => {
        btnNext.onclick = function () {
            selectedChoice.style.backgroundColor = '';

            answers.forEach(answer => {
                answer.style.backgroundColor = '';
            });

            getNewQuestion();
        };
        // }, 1500);
    });
});

startTest();