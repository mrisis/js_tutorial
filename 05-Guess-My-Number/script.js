"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 20;

// document.querySelector(".score").textContent = 35;

// // input fields

// console.log(document.querySelector(".guess").value);

// document.querySelector(".guess").value = 33;

// handling click events

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "NO Number!";
  }
});
