let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let msg4 = document.getElementById("message4");
let userInput = document.getElementById("user-input");
let myButton = document.getElementById("myButton");

let answer = Math.floor(Math.random() * 10) + 1;
console.log(answer);
let numberOfGuesses = 0;
let guessedNumbers = [];

function youWon() {
  msg1.textContent = "You Won ⭐⭐⭐";
  msg2.textContent = "The number was: " + answer;
  msg3.textContent = "You guessed it in " + numberOfGuesses + " guesses";
  userInput.style.display = "none";
  myButton.style.display = "none";
  msg4.style.display = "none";
}

function youLost() {
  msg1.textContent = "You Lost 💔💔💔";
  msg2.textContent = "The number was: " + answer;
  msg3.textContent =
    "You could not guess it in " + numberOfGuesses + " guesses";
  userInput.style.display = "none";
  myButton.style.display = "none";
  msg4.style.display = "none";
}

function checkGuess() {
  let userGuess = userInput.value;
  if (userGuess < 1 || userGuess > 10) {
    alert("Please enter a number between 1-10");
  } else {
    guessedNumbers.push(userGuess);
    numberOfGuesses += 1;

    if (userGuess < answer) {
      if (numberOfGuesses >= 3) {
        youLost();
      } else {
        msg1.textContent = "Your guess is too low.";
        msg2.textContent = "Number of guesses: " + numberOfGuesses;
        msg3.textContent = "Guessed numbers are: " + guessedNumbers;
        msg4.textContent = "Guesses remaining: " + (3 - numberOfGuesses);
      }
    } else if (userGuess > answer) {
      if (numberOfGuesses >= 3) {
        youLost();
      } else {
        msg1.textContent = "Your guess is too high.";
        msg2.textContent = "Number of guesses: " + numberOfGuesses;
        msg3.textContent = "Guessed numbers are: " + guessedNumbers;
        msg4.textContent = "Guesses remaining: " + (3 - numberOfGuesses);
      }
    } else if (userGuess == answer) {
      youWon();
    }
  }
}
