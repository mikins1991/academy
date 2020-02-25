import { currentTest } from './currentTest.js'
import { startTimer, stopTimer, timerSet } from './timer.js'

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const progressText = document.getElementById('progressText');
const btnNext = document.getElementById('next');
const MAX_QUESTIONS = 3;

let currentQuestion = {};
let questionCounter = 0;
let availableQuesions = [];
let progressCounter = 0;
let countClic = 0;
let selectedChoice;

function startTest() {
    questionCounter = 0;
    availableQuesions = [...currentTest];
    getNewQuestion();
    startTimer();
};

function getNewQuestion() {
    btnNext.disabled = true;

    if (availableQuesions.length === 0 || questionCounter == MAX_QUESTIONS) {
        console.log('off');
        clearInterval(timerSet);
        // openModal();
    } else {

        currentQuestion = availableQuesions[questionCounter];
        question.innerText = currentQuestion.question;

        answers.forEach(answer => {
            const number = answer.dataset['number'];
            answer.innerText = currentQuestion['answer' + number];
        });
        questionCounter++;

    }
    progressText.innerHTML = `Вопрос ${questionCounter}/${MAX_QUESTIONS}. Правильно ${progressCounter}`

};

function stoptTimer() {
    clearInterval(timerSet);
    lastSecond = 0;
    divTimer.innerHTML = `${`00`}:${`00`}`;

}

answers.forEach(answer => {

    answer.addEventListener('click', event => {

        selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        btnNext.disabled = false;

        if (selectedAnswer == currentQuestion.answerCorrect) {
            selectedChoice.style.backgroundColor = 'green';
            progressCounter++;

        } else {
            selectedChoice.style.backgroundColor = 'red';

            answers.forEach(answer => {
                const correct = answer.dataset['number'];
                if (correct == currentQuestion.answerCorrect) {
                    answer.style.backgroundColor = 'green';
                }
            });
        };
        progressText.innerHTML = `Вопрос ${questionCounter}/${MAX_QUESTIONS}. Правильно ${progressCounter}`;
    });

});

btnNext.addEventListener('click', function () {
    selectedChoice.style.backgroundColor = '';
    countClic++;

    answers.forEach(answer => {
        answer.style.backgroundColor = '';
    });

    if (countClic == (MAX_QUESTIONS - 1)) {
        btnNext.innerText = "Завершить";

        // stoptTimer();
    }
    getNewQuestion();
});

startTest();





// document.addEventListener('DOMContentLoaded', openModal, false);

// function openModal() {
//     [].forEach.call(document.querySelectorAll('.prefix-open, .prefix-close'), function (item) {
//         item.addEventListener('click', function (event) {
//             event.preventDefault();
//             document.querySelector('#Modal').classList.toggle('active');
//         });
//     });
// }
