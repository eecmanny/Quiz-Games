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

//This makes the "quiz is over" pop up in the time box
var answersum = document.querySelector(".timer-count");

var winCounter = 0;
var loseCounter = 0;
var firstPlace = 0;
var firstInitials = "";
var secondPlace = 0;
var secondPlaceInitials = "";
var thirdPlace = 0;
var thirdPlaceInitials = "";
var isWin = false;

// Click timer to start
startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 60;
    // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
    // renderBlanks()
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
  // Clears interval and stops timer
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 10);
}


//Error doesn't stop
//This funtions makes the reset work,
//This Function allows the local memory to stay on the site.
// !!Need to Make Code to add up answers!! The quizselect function is called when you choose an asnwer button on a quiz
// The quizselect function is called when you choose an answer button on a quiz
// function quizselect() {
//   isWin = false;
//   timerCount = 60;
// // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   startTimer();
// }

// Click answers on quizes
startButton.addEventListener("click", quizselect);

// function answerselect() {
// // !!Need to Make Code for button select and to add up answers!! If less than 5 fail quiz
// answerCorrect = 1;
// answerWrong = 0;
// }




// Click answers on quizzes
var answerButtons = document.querySelectorAll(".answer-button");
answerButtons.forEach(function (button) {
  button.addEventListener("click", quizselect);
});

// !!answersum var maybe wrong!! The winGame function is called when the win condition is met
function winGame() {
  answersum.textContent = "YOU BEAT THE QUIZ!";
  winCounter++;
  startButton.disabled = false;
  setWins();
}

// !!answersum var maybe wrong!! The loseGame function is called when the timer reaches 0
function loseGame() {
  answersum.textContent = "QUIZ OVER";
  loseCounter++;
  startButton.disabled = false;
  setLosses();
}

// Click Reset to Reset
resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {
    // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  firstPlace = 0;
  firstInitials = 0;
  secondPlace = 0;
  secondPlaceInitials = 0;
  thirdPlace = 0;
  thirdPlaceInitials = 0;

  // Renders (Wins, Losses, First, Second, third) and sets them into client storage
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
//wins
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}
//losses
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}
//First place time
function setFirst() {
  first.textContent = firstPlace;
  localStorage.setItem("firstPlace", firstPlace);
}
//First place initials
function setFirstInitials() {
  firstinitials.textContent = firstInitials;
  localStorage.setItem("firstInitials", firstInitials);
}
//Second place time
function setSecond() {
  second.textContent = secondPlace;
  localStorage.setItem("secondPlace", secondPlace);
}
//Second place initials
function setSecondInitials() {
  secondsinitials.textContent = secondPlaceInitials;
  localStorage.setItem("secondPlaceInitials", secondPlaceInitials);
}
//Third place time
function setThird() {
  third.textContent = thirdPlace;
  localStorage.setItem("thirdPlace", thirdPlace);
}
//Third place initials
function setThirdInitials() {
  thirdinitials.textContent = thirdPlaceInitials;
  localStorage.setItem("thirdPlaceInitials", thirdPlaceInitials);
}


// // // Calls local storage from web browser
// function init() {
//   getWins();
//   getlosses();
//   getfirstplacetime();
//   getfirstplaceintitial();
//   getsecondplacetime();
//   getsecondplaceinitial();
//   getthirdplacetime();
//   getthirdplaceinitial();
// }

// Calls local storage when browser opens
init();

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

// // These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}