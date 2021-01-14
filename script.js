"use strict";

var secrectNumber = Math.trunc(Math.random() * 20 + 1); //?

var score = 20;

var messageElement = document.querySelector(".message");
var scoreElement = document.querySelector(".score");
var bodyElement = document.querySelector("body");
var numberElement = document.querySelector(".number");
var highscoreElement = document.querySelector(".highscore");
var checkButton = document.querySelector(".check");
var againButton = document.querySelector(".again");
var guessElement = document.querySelector(".guess");

function handleCheck() {
  var guess = document.querySelector(".guess").value;

  switch (true) {
    // No input
    case guess === "":
      messageElement.textContent = "🚫 No Number!";
      break;

    // Win
    case Number(guess) === secrectNumber:
      messageElement.textContent = "🎉 Correct Number!";
      bodyElement.style.backgroundColor = "#60b347";
      numberElement.style.width = "30rem";
      numberElement.textContent = secrectNumber;
      if (score > highscoreElement.textContent) {
        highscoreElement.textContent = score;
        guessElement.disabled = true;
      }
      break;

    // Too high
    case Number(guess) > secrectNumber:
      if (score > 0) {
        messageElement.textContent = "📈 Too high!";
        score = score - 1;
        scoreElement.textContent = score;
      }
      if (score === 0) {
        messageElementElement.textContent = "💥 You Lost!";
      }
      break;

    // Too low
    case Number(guess) < secrectNumber:
      if (score > 0) {
        messageElement.textContent = "📉 Too Low!";
        score = score - 1;
        scoreElement.textContent = score;
      }
      if (score === 0) {
        messageElement.textContent = "💥 You Lost!";
      }
      break;
  }
}

function handleAgain() {
  guessElement.disabled = false;
  score = 20;
  scoreElement.textContent = score;
  messageElement.textContent = "Start guessing...";
  bodyElement.style.backgroundColor = "#222";
  guessElement.value = "";
  numberElement.style.width = "15rem";
  numberElement.textContent = "?";
  secrectNumber = Math.trunc(Math.random() * 20 + 1);
}

checkButton.addEventListener("click", handleCheck);

againButton.addEventListener("click", handleAgain);
