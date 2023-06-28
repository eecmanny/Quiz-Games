var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var first = document.querySelector(".first");
var firstinitials = document.querySelector(".firstinitials");
var second = document.querySelector(".second");
var secondsinitials = document.querySelector(".secondsinitials");
var third = document.querySelector(".third");
var thirdinitials = document.querySelector(".thirdinitials");


var wrong = document.querySelector(".Wrong");

var right = document.querySelector(".Right");



var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var answercorrect = 1;
var answerwrong = 0;

// var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var firstplace = 0;
var firstplacein = 0;
var secondplace = 0;
var secondplacein = 0;
var thirdplace = 0;
var thirdplacein = 0;
var isWin = false;
var timer;
var timerCount;

// function answer(){

// }

// function answerpicks() {
//   answercorrect.addEventListener("click", answer);
//   startButton.disabled = false;
//   console.log(answercorrect);

//   answerwrong.addEventListener("click", answer);
//   console.log(answerwrong);
// }




// // The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
  // getfirstplacetime();
  // getfirstplaceintitial();
  // getsecondplacetime();
  // getsecondplaceinitial();
  // getthirdplacetime();
  // getthirdplaceinitial();
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

// // The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  console.log(startButton);
  // renderBlanks()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "QUIZ OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
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
    }
  }, 10);
}



// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
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

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// // Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// // Attaches event listener to button
resetButton.addEventListener("click", resetGame);

// // // Attach event listener to document to listen for key event
// // document.addEventListener("keydown", function(event) {
// //   // If the count is zero, exit function
// //   if (timerCount === 0) {
// //     return;
// //   }
// //   // Convert all keys to lower case
// //   var key = event.key.toLowerCase();
// //   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
// //   // Test if key pushed is letter
// //   if (alphabetNumericCharacters.includes(key)) {
// //     var letterGuessed = event.key;
// //     checkLetters(letterGuessed)
// //     checkWin();
// //   }
// // });