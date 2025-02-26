"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 20;

// document.querySelector(".score").textContent = 35;

// // input fields

// console.log(document.querySelector(".guess").value);

// document.querySelector(".guess").value = 33;

// handling click events

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when palyer win

  if (!guess) {
    document.querySelector(".message").textContent = "NO Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!✌️";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // when guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too High!😁";
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "yuo lost the game🎃";
    }

    // when guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too Low!🥲";
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "yuo lost the game🎃";
    }
  }
});

// again logic

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
