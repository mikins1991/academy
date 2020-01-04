
// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Что необходимо выяснить перед началом ремонта силового трансформатора?", ["Все указанное в других ответах.", "В каком состоянии находится масло в трансформаторе и требуется ли его замена.", "Необходимую потребность в материалах, инструментах, приспособлениях для ремонта.", "HКакие дефекты присутствуют в трансформаторе и, следовательно, обьем ремонта."], "Все указанное в других ответах."),
    new Question("К каким повреждениям в трансформаторе могут привести старение изоляции обмоток и увлажнение масла в процессе эксплуатации?", ["К замыканию на корпус и междуфазным замыканиям.", "К пожару стали, т.е. нарушению межлистовой изоляции сердечника или изоляции стяжных болтов.", "К обрыву в обмотке трансформатора.", "К любой из перечисленных в других ответах."], "К замыканию на корпус и междуфазным замыканиям."),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Что необходимо выяснить перед началом ремонта силового трансформатора?", ["Все указанное в других ответах.", "В каком состоянии находится масло в трансформаторе и требуется ли его замена.", "Необходимую потребность в материалах, инструментах, приспособлениях для ремонта.", "HКакие дефекты присутствуют в трансформаторе и, следовательно, обьем ремонта."], "Все указанное в других ответах."),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();