'use strict';


let guessEl = document.querySelector('.guess');
let checkEl = document.querySelector('.check');
let messageEl = document.querySelector('.message');
let numberEl = document.querySelector('.number');
let againEl = document.querySelector('.again');
let scoreEl = document.querySelector('.score');
let highscoreEl = document.querySelector('.highscore');
let bodyEl = document.querySelector('body');
console.log(guessEl, checkEl, messageEl, numberEl, againEl, scoreEl, highscoreEl);
let currentScore = parseInt(scoreEl.textContent);
let highScore = parseInt(highscoreEl.textContent);
let randomNum = Math.floor(Math.random() * 20 + 1);

console.log(randomNum);

checkEl.onclick = function() {
    console.log(numberEl.textContent, guessEl.value);
    if(guessEl.value == randomNum) {
        checkEl.classList.add('wrong');
        bodyEl.style.background = 'Green';
        messageEl.textContent = "Correct Number!";
        numberEl.textContent = randomNum;
        if(currentScore > highScore) {
            highscoreEl.textContent = scoreEl.textContent;
        }
    }else if (guessEl.value > randomNum) {
        messageEl.textContent = "Too High! Try again.";
        currentScore--;
        scoreEl.textContent = String(currentScore);
    }else {
        messageEl.textContent = "Too Low! Try again.";
        currentScore--;
        scoreEl.textContent = String(currentScore);
    }

    if(currentScore == 0) {
        bodyEl.style.background = "red";
        messageEl.textContent = "You lost!";
        checkEl.classList.add('wrong');
    }
}


againEl.onclick = function() {
    messageEl.textContent = "Start guessing...";
    numberEl.textContent = "?";
    guessEl.value = "";
    bodyEl.style.background = "#222222";
    scoreEl.textContent = "20";
    currentScore = 20;
    checkEl.classList.remove('wrong');
    let newRandomNum = Math.floor(Math.random() * 20 + 1);
    randomNum = newRandomNum;
    console.log(randomNum);
}



