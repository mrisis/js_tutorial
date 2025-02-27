"use strict";

//selection elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// starting consitions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

btnRoll.addEventListener("click", function () {
  // generate a random dice

  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // check for rolled 1: if true switch next player
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});
