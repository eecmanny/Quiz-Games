// Variables for the reset button
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var first = document.querySelector(".first");
var firstinitials = document.querySelector(".firstinitials");
var second = document.querySelector(".second");
var secondsinitials = document.querySelector(".secondsinitials");
var third = document.querySelector(".third");
var thirdinitials = document.querySelector(".thirdinitials");

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");

var answerCorrect = 1;
var answerWrong = 0;

var answersum = document.querySelector(".timer-count");

var winCounter = 0;
var loseCounter = 0;
var firstPlace = 0;
var firstInitials = 0;
var secondPlace = 0;
var secondPlaceInitials = 0;
var thirdPlace = 0;
var thirdPlaceInitials = 0;
var isWin = false;

// Click timer to start
startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  startTimer();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
var timer;
var timerCount;

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// The quizselect function is called when you choose an answer button on a quiz
function quizselect() {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  startTimer();
}

// Click answers on quizzes
var answerButtons = document.querySelectorAll(".answer-button");
answerButtons.forEach(function (button) {
  button.addEventListener("click", quizselect);
});

// The winGame function is called when the win condition is met
function winGame() {
  answersum.textContent = "YOU BEAT THE QUIZ!";
  winCounter++;
  startButton.disabled = false;
  setWins();
}

// The loseGame function is called when the timer reaches 0
function loseGame() {
  answersum.textContent = "QUIZ OVER";
  loseCounter++;
  startButton.disabled = false;
  setLosses();
}

// Click Reset to Reset
resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {
  winCounter = 0;
  loseCounter = 0;
  firstPlace = 0;
  firstInitials = 0;
  secondPlace = 0;
  secondPlaceInitials = 0;
  thirdPlace = 0;
  thirdPlaceInitials = 0;

  setWins();
  setLosses();
  setFirst();
  setFirstInitials();
  setSecond();
  setSecondInitials();
  setThird();
  setThirdInitials();
}

// Functions to update counts on the screen and in local storage

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

function setFirst() {
  first.textContent = firstPlace;
  localStorage.setItem("firstPlace", firstPlace);
}

function setFirstInitials() {
  firstinitials.textContent = firstInitials;
  localStorage.setItem("firstInitials", firstInitials);
}

function setSecond() {
  second.textContent = secondPlace;
  localStorage.setItem("secondPlace", secondPlace);
}

function setSecondInitials() {
  secondsinitials.textContent = secondPlaceInitials;
  localStorage.setItem("secondPlaceInitials", secondPlaceInitials);
}

function setThird() {
  third.textContent = thirdPlace;
  localStorage.setItem("thirdPlace", thirdPlace);
}

function setThirdInitials() {
  thirdinitials.textContent = thirdPlaceInitials;
  localStorage.setItem("thirdPlaceInitials", thirdPlaceInitials);
}

// Function to initialize the counts and initials from local storage

function init() {
  var storedWin = localStorage.getItem("winCount");
  if (storedWin) {
    winCounter = parseInt(storedWin);
    win.textContent = winCounter;
  }

  var storedLose = localStorage.getItem("loseCount");
  if (storedLose) {
    loseCounter = parseInt(storedLose);
    lose.textContent = loseCounter;
  }

  var storedFirst = localStorage.getItem("firstPlace");
  if (storedFirst) {
    firstPlace = parseInt(storedFirst);
    first.textContent = firstPlace;
  }

  var storedFirstInitials = localStorage.getItem("firstInitials");
  if (storedFirstInitials) {
    firstInitials = parseInt(storedFirstInitials);
    firstinitials.textContent = firstInitials;
  }

  var storedSecond = localStorage.getItem("secondPlace");
  if (storedSecond) {
    secondPlace = parseInt(storedSecond);
    second.textContent = secondPlace;
  }

  var storedSecondInitials = localStorage.getItem("secondPlaceInitials");
  if (storedSecondInitials) {
    secondPlaceInitials = parseInt(storedSecondInitials);
    secondsinitials.textContent = secondPlaceInitials;
  }

  var storedThird = localStorage.getItem("thirdPlace");
  if (storedThird) {
    thirdPlace = parseInt(storedThird);
    third.textContent = thirdPlace;
  }

  var storedThirdInitials = localStorage.getItem("thirdPlaceInitials");
  if (storedThirdInitials) {
    thirdPlaceInitials = parseInt(storedThirdInitials);
    thirdinitials.textContent = thirdPlaceInitials;
  }
}

init();