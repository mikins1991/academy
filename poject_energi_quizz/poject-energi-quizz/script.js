import { topicOne } from './topicOne.js'
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
console.log(answers);



let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...topicOne];
    getNewQuestion();
};

function getNewQuestion() {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        console.log('off');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(answer => {
        const number = answer.dataset["number"];
        answer.innerText = currentQuestion["answer" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

answers.forEach(answer => {
    answer.addEventListener("click", event => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answerCorrect ? "correct" : "incorrect";

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
});

startGame();