"use strict";

var secrectNumber = Math.trunc(Math.random() * 20 + 1); //?

var score = 20;

const scoreElement = document.querySelector(".score");
const bodyElement = document.querySelector("body");
const numberElement = document.querySelector(".number");
const highscoreElement = document.querySelector(".highscore");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessElement = document.querySelector(".guess");

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function handleCheck() {
    var guess = document.querySelector(".guess").value;

    switch (true) {
        // No input
        case guess === "":
            displayMessage("🚫 No Number!");
            break;

        // When guess is right
        case Number(guess) === secrectNumber:
            displayMessage("🎉 Correct Number!");

            bodyElement.style.backgroundColor = "#60b347";
            numberElement.style.width = "30rem";
            numberElement.textContent = secrectNumber;
            if (score > highscoreElement.textContent) {
                highscoreElement.textContent = score;
                guessElement.disabled = true;
                checkButton.disabled = true;
            }
            break;

        // When guess is wrong
        case Number(guess) !== secrectNumber:
            score = score - 1;
            scoreElement.textContent = score;

            // Too high
            if (Number(guess) > secrectNumber) {
                displayMessage("📈 Too high!");
            }
            // Too low
            if (Number(guess) < secrectNumber) {
                displayMessage("📉 Too low!");
            }
            // Lost
            if (score === 0) {
                displayMessage("💥 You Lost!");
                bodyElement.style.backgroundColor = "#e74c3c";
                guessElement.disabled = true;
                checkButton.disabled = true;
            }
            break;
    }
}

function restartGame() {
    guessElement.disabled = false;
    checkButton.disabled = false;
    score = 20;
    scoreElement.textContent = score;
    displayMessage("Start guessing...");
    bodyElement.style.backgroundColor = "#222";
    guessElement.value = "";
    numberElement.style.width = "15rem";
    numberElement.textContent = "?";
    secrectNumber = Math.trunc(Math.random() * 20 + 1);
}

checkButton.addEventListener("click", handleCheck);

againButton.addEventListener("click", restartGame);
