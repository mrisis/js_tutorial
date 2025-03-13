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

// creating dom elements

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
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

// coputing usernames

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummery = function (account) {
  const incoms = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incoms} €`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interset = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interset} €`;
};

const updateUI = function (acc) {
  // display movements current user
  displayMovements(acc.movements);

  // display balnce current user
  calcDisplayBalance(acc);

  // display summary current user
  calcDisplaySummery(acc);
};

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // change welcome message after login
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    // after login remove value of input username & pin
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// implementing transfers

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferTo.value = inputTransferAmount.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username &&
    currentAccount.balance >= amount
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movementsUSD);

//

// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movementsUSD);

// const movementsDescription = movements.map(
//   (mov, i, arr) =>
//     `movement ${i + 1} : you ${mov > 0 ? "deposit" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescription);

// console.log(accounts);

// the filter method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposits);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// the reduce method

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// console.log(balance);

// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance);

// const maxValue = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );

// console.log(maxValue);

// coding challenge #2 part 11

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));

//   const adults = humanAges.filter((age) => age >= 18);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// the majic of chaininh methods

// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// coding challenge #3 part 11

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// the find method

// const firstWithDrawal = movements.find((mov) => mov < 0);
// console.log(firstWithDrawal);

// const account = accounts.find((acc) => (acc.owner = "Jessica Davis"));
// console.log(account);

// some and every

// console.log(movements);
// console.log(movements.includes(-130));

// // some method

// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// // every method

// console.log(movements.every((mov) => mov > 0));

// const deposit = (mov) => mov > 0;
// console.log(movements.every(deposit));

// flat and flatmap methods

// const arr = [[1, 2, 3], [4, 5], 6, 7, 8];
// console.log(arr.flat());

// const arrDeep = [[1, [2, 3]], [4, 5, [33, 44, [23, 21]]], 6, 7, 8];
// console.log(arrDeep.flat(3));

// const overalBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overalBalance);

// //flatMap method
// const overalBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overalBalance2);

// sorting arrays

// const owners = ["reza", "ali", "zahra", "mamad"];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);
// console.log(movements.sort());

// //asd
// console.log(movements.sort((a, b) => a - b));

// //des
// console.log(movements.sort((a, b) => b - a));

// more ways of creating and filling arrays

// const x = new Array(7);
// console.log(x);

// // x.fill(1);

// x.fill(1, 3, 5);
// console.log(x);

// // Array.From

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);

// console.log(z);

// labelBalance.addEventListener("click", function () {
//   const movemventsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => el.textContent.replace("€", "")
//   );
//   console.log(movemventsUI);
// });

// array methods practice

// const bankDespositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDespositSum);

// //
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

// const numDeposits1000Two = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

// console.log(numDeposits1000Two);

// console.log(numDeposits1000);

// //prefixed ++ operators

// let a = 10;
// // console.log(a++);
// console.log(++a);

// //
// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
//       return sums;
//     },
//     {
//       deposits: 0,
//       withdrawals: 0,
//     }
//   );

// console.log(sums);

// //
// const converTitleCase = function (title) {
//   const exceptions = ["a", "an", "and", "the", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(" ");
//   return titleCase;
// };

// console.log(converTitleCase("this is a reza amin and this prson"));

// coding challenge #4 part 11

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1.
dogs.forEach((dog) => Math.trunc((dog.recFood = dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(
  `Sarah 's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

//3.

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooLittle);

//4.

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);

console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

//5.

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

//6.

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));

//8.

const dogsCopySorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsCopySorted);
