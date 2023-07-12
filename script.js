// Variables for the reset button
var answerStatus = document.querySelector(".result");
var initialBox = document.querySelector("#high-score");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var timer;
var timerCount;

// Getting quiz container
var quizContainer = document.querySelector(".quiz-container");

// This makes the "quiz is over" pop up in the time box
var answerSum = document.querySelector(".timer-count");

var scoreCounter = 0;

var correctAnswers = ["head", "2 Spaces", "can only be true or false", "===", "cd", "Flex-Wrap"];
var quizQuestions = [
  {
    question: "Which of the following tags contains metadata about the webpage?",
    choices: ["body", "head", "main", "footer"],
    correct: "head"
  },
  {
    question: "According to the W3C recommendation, what's the appropriate way of indenting nested HTML elements?",
    choices: ["No recommended indent", "No Space", "1 Space", "2 Spaces"],
    correct: "2 Spaces"
  },
  {
    question: "What is true about boolean data types?",
    choices: ["is Undefined", "can only be a string", "can only be a number", "can only be true or false"],
    correct: "can only be true or false"
  },
  {
    question: "What comparison means the same value and same type?",
    choices: ["&&", "==", "===", "||"],
    correct: "==="
  },
  {
    question: "What command is used to open a directory?",
    choices: ["touch", "mkr", "git", "cd"],
    correct: "cd"
  },
  {
    question: "What flex style tool allows elements to wrap around each other?",
    choices: ["Flex-Wrap", "Flex-Direction", "Justify-content", "Display"],
    correct: "Flex-Wrap"
  }
];

var questionsIndex = 0;

// Click timer to start
startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // renderBlanks()
  startTimer();
  renderQuestions();
  initialBox.classList.add("hide");
}

function renderQuestions() {
  quizContainer.textContent = "";
  // Check to see if the question index is greater than the length of questions -> return
  if (questionsIndex >= quizQuestions.length) {
    quizComplete();
    return;
  }
  var question = document.createElement("h2");
  question.textContent = quizQuestions[questionsIndex].question;
  quizContainer.append(question);

  var options = document.createElement("ul");
  quizContainer.append(options);

  for (var i = 0; i < quizQuestions[questionsIndex].choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = quizQuestions[questionsIndex].choices[i];
    options.append(choiceBtn);

    choiceBtn.addEventListener("click", function (event) {
      var chosen = event.target.textContent;
      if (chosen === quizQuestions[questionsIndex].correct) {
        scoreCounter++;
        console.log("correct");
        answerStatus.textContent = "Correct"
      } else {
        timerCount -= 5;
        console.log("incorrect");
        answerStatus.textContent = "Incorret"
      }
      questionsIndex++;
      console.log(chosen);
      renderQuestions();
    });
  }
}

function quizComplete() {
  // Add remaining seconds to the score
  scoreCounter += timerCount;

  // Show form to retrieve user initials
  // Make initial-box un-invisible
  initialBox.classList.remove("hide");
  // Stop timer
  clearInterval(timer);
}

function startTimer() {
  timer = setInterval(function () {
    if (timerCount <= 0) {
      quizComplete();
    } else {
      timerCount--;
      timerElement.textContent = timerCount;
      localStorage.setItem("timerCount", timerCount);
    }
  }, 1000);
}

var saveBtn = document.querySelector(".submit");
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Save Initials
  var currentTime = localStorage.getItem("timerCount");
  var typedInitials = document.getElementById("initials");

  // var currentTime = localStorage.getItem("timerCount", timerCount);
  // var typedInitials = document.getElementById("initials");

  var combinedInitialAndNum = {
    currentTime: currentTime,
    typedInitials: typedInitials.value.trim()
  };

  localStorage.setItem("InitialAndNum", JSON.stringify(combinedInitialAndNum));
  renderMessage();
});

function renderMessage() {
  var allScores = JSON.parse(localStorage.getItem("InitialAndNum"));
  if (allScores !== null) {
    document.querySelector(".message").textContent = "You " + allScores.typedInitials +
      " received a time of " + allScores.currentTime + ".";
  }
}

// Click Reset to Reset
resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {
  scoreCounter = 0;
  questionsIndex = 0;
  timerElement.textContent = "";
  startButton.disabled = false;
  initialBox.classList.add("hide");
}

// Calls local storage from web browser
function init() {
renderMessage();
}

// Calls local storage when browser opens
init();
