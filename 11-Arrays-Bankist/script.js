"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// simple array methods

// const arr = ["a", "b", "c", "d", "e"];

// // slice
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice());

// // splice
// // console.log(arr.splice(2));
// // console.log(arr);

// // reverse

// const arr2 = ["j", "i", "h", "g", "f"];

// console.log(arr2.reverse());
// console.log(arr2);

// // concat

// const newArr = arr.concat(arr2);
// console.log(newArr);
// console.log([...arr, ...arr2]);

// // join
// console.log(arr.join("_"));
// console.log(arr2.join(" !_! "));

// the new at method

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last value in array

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// console.log("reza".at(0));

// looping arrays foreach

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }

// // forEach

// console.log("-----FOREACH-----");
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`MoveMent ${index + 1} : you deposited ${movement}`);
//   } else {
//     console.log(`MoveMent ${index + 1} :  you withdrew ${Math.abs(movement)}`);
//   }
// });

// foreach with maps & sets

// // maps
// currencies.forEach(function (value, key, map1) {
//   console.log(`${key}: ${value}`);
// });

// // sets

// const currenciesUnique = new Set([
//   "usd",
//   "gbp",
//   "usd",
//   "eur",
//   "eur",
//   "usd",
//   "gbp",
// ]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key} : ${value}`);
// });

// bankist project

// creating dom elements

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (movement, index) {
    const type = movement > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${movement}€</div>
        </div>
    
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

// coding challenge #1 part 11

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrect = dogsJulia.slice();
//   dogsJuliaCorrect.splice(0, 1);
//   dogsJuliaCorrect.splice(-2);
//   const dogs = dogsJuliaCorrect.concat(dogsKate);
//   dogs.forEach(function (dog, index) {
//     if (dog >= 3) {
//       console.log(
//         `dog number ${index + 1} ia an adult , and is ${dog} years old`
//       );
//     } else {
//       console.log(` dog number ${index + 1} is still puppy!!!`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// the map method

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movementsUSD);

//

const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

const movementsDescription = movements.map(
  (mov, i, arr) =>
    `movement ${i + 1} : you ${mov > 0 ? "deposit" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);
