//All variable for the reset button
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var first = document.querySelector(".first");
var firstinitials = document.querySelector(".firstinitials");
var second = document.querySelector(".second");
var secondsinitials = document.querySelector(".secondsinitials");
var third = document.querySelector(".third");
var thirdinitials = document.querySelector(".thirdinitials");


var wrong = document.querySelector(".t1");
var right = document.querySelector(".f1");

var wrong = document.querySelector(".t2");
var right = document.querySelector(".f2");

var wrong = document.querySelector(".t3");
var right = document.querySelector(".f3");

var wrong = document.querySelector(".t4");
var right = document.querySelector(".f4");

var wrong = document.querySelector(".t5");
var right = document.querySelector(".f5");

var wrong = document.querySelector(".t6");
var right = document.querySelector(".f6");


var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");

var answercorrect = 1;
var answerwrong = 0;

//This makes the "quiz is over" pop up in the time box
var answersum = document.querySelector(".timer-count");


var winCounter = 0;
var loseCounter = 0;
var firstplace = 0;
var firstin = 0;
var secondplace = 0;
var secondplacein = 0;
var thirdplace = 0;
var thirdplacein = 0;
var isWin = false;

// Click timer to start
startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  console.log(startButton);
  // renderBlanks()
  startTimer()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
var timer;
var timerCount;

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    console.log(timer);
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
      console.log(timer);
    }
  }, 10);
}


//Error doesn't stop
//This funtions makes the reset work,
//This Function allows the local memory to stay on the site.
// !!Need to Make Code to add up answers!! The quizselect function is called when you choose an asnwer button on a quiz
function quizselect() {
  isWin = false;
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  console.log(startButton);
  // renderBlanks()
  startTimer()
}

// Click answers on quizes
startButton.addEventListener("click", quizselect);

function answerselect() {

}

// !!answersum var maybe wrong!! The winGame function is called when the win condition is met
function winGame() {
  answersum.textContent = "YOU BEAT THE QUIZ!";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// !!answersum var maybe wrong!! The loseGame function is called when timer reaches 0 
function loseGame() {
  answersum.textContent = "QUIZ OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// Click Reset to Reset
resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  firstplace = 0;
  firstinitials = 0;
  secondplace = 0;
  secondplaceinitials = 0;
  thirdplace = 0;
  thirdplaceinitials = 0;

  // Renders (Wins, Losses, First, Second, third) and sets them into client storage
  setWins()
  setLosses()
  setfirst()
  setfirstin()
  setsecond()
  setsecondin()
  setthird()
  setthirdin()
}

//Functions updates count on screen to clients storage
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
function setfirst() {
  first.textContent = firstplace;
  localStorage.setItem("xxxxxxxx", firstplace);
}
//First place initials
function setfirstin() {
  firstinitials.textContent = firstplacein;
  localStorage.setItem("xxxxxxxx", firstplacein);
}
//Second place time
function setsecond() {
  second.textContent = secondplace;
  localStorage.setItem("xxxxxxxxx", secondplace);
}
//Second place initials
function setsecondin() {
  secondsinitials.textContent = secondplacein;
  localStorage.setItem("xxxxxxxx", secondplacein);
}
//Third place time
function setthird() {
  third.textContent = thirdplace;
  localStorage.setItem("xxxxxxxxx", thirdplace);
}
//Third place initials
function setthirdin() {
  thirdinitials.textContent = thirdplacein;
  localStorage.setItem("xxxxxxxx", thirdplacein);
}

// // Calls local storage from web browser
function init() {
  getWins();
  getlosses();
  getfirstplacetime();
  getfirstplaceintitial();
  getsecondplacetime();
  getsecondplaceinitial();
  getthirdplacetime();
  getthirdplaceinitial();
}

// Calls local storage when browser opens
init();

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

function getfirstplaceintitial() {
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

function getfirstplacetime() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function getsecondplacetime() {
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

function getsecondplaceinitial() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function getthirdplacetime() {
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

function getthirdplaceinitial() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}
