function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // Show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // Show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guessText) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guessText);
        populate();
    };
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML =
        "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
    gameOverHTML +=
        "<button id='playAgain' onclick='restartQuiz()'>Play Again</button>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

function restartQuiz() {
    var quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
        <h1>India Quiz</h1>
        <div id="question"></div>
        <div class="buttons">
            <button id="bt0"><span id="choice0"></span></button>
            <button id="bt1"><span id="choice1"></span></button>
            <button id="bt2"><span id="choice2"></span></button>
            <button id="bt3"><span id="choice3"></span></button>
        </div>
        <hr>
        <footer>
            <p id="progress"></p>
        </footer>
    `;

    quiz = new Quiz(questions);
    populate();

}

var questions = [
    new Question("What is the capital of India?", ["New Delhi", "Mumbai", "Jaipur", "Kolkata"], "New Delhi"),

    new Question("Which is the longest river of India?", ["Godavari", "Ganga", "Yamuna", "Brahmaputra"], "Ganga"),

    new Question('Which city is known as the "Pink City of India"?', ["Udaipur", "Jodhpur", "Jaipur", "Odisha"], "Jaipur"),

    new Question("Where is Taj Mahal located?", ["Delhi", "Agra", "Jaipur", "Lucknow"], "Agra"),

    new Question("Who wrote the National Anthem of India?", ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhas Chandra Bose"], "Rabindranath Tagore"),

    new Question('Which Indian state is known as the "Land of Five Rivers"?', ["Punjab", "Haryana", "Gujarat", "Rajasthan"], "Punjab"),

    new Question("What is the capital of Odisha?", ["Cuttack", "Bhubaneswar", "Kerala", "Puri"], "Bhubaneswar"),

    new Question('Who was known as the "Iron Man of India"?', ["Lal Bahadur Shastri", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh"], "Sardar Vallabhbhai Patel"),

    new Question("Who was the first woman Prime Minister of India?", ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Sonia Gandhi"], "Indira Gandhi"),

    new Question('Which Indian city is known as the "Silicon Valley of India"?', ["Hyderabad", "Pune", "Bengaluru", "Chennai"], "Bengaluru"),

    new Question('Which Indian scientist is known as the "Missile Man of India"?', ["Homi J. Bhabha", "C.V. Raman", "A.P.J. Abdul Kalam", "Vikram Sarabhai"], "A.P.J. Abdul Kalam"),

    new Question("Which is the smallest state in India by area?", ["Sikkim", "Goa", "Tripura", "Manipur"], "Goa"),

    new Question("National Sport of India?", ["Cricket", "Football", "Hockey", "Kabaddi"], "Hockey"),

    new Question('In which state is the "Sun Temple of Konark" located?', ["Andhra Pradesh", "Odisha", "Tamil Nadu", "West Bengal"], "Odisha"),

    new Question('Which city is also known as the "City of Lakes"?', ["Jaipur", "Udaipur", "Bhopal", "Mysuru"], "Udaipur"),

    new Question("Which Indian state is famous for tea gardens?", ["Kerala", "Gujarat", "Assam", "Bihar"], "Assam")
];

// Initialize quiz
var quiz = new Quiz(questions);

// Start quiz
populate();
