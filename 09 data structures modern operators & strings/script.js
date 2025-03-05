"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekdayes = ["mon", "thu"];

const openingHours = {
  [weekdayes[1]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// console.log(openingHours);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 1, address }) {
    console.log(
      `$start menu ${this.starterMenu[starterIndex]} , address ${address}, manimenu ${this.mainMenu[mainIndex]}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
// console.log(restaurant);

// destructring arrays

// const arr = [4, 5, 6];

// const [x, y, z] = arr;
// console.log(arr);
// console.log(x, y, z);
// console.log(x);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [first, , third] = restaurant.categories;
// console.log(first, third);

// [first, third] = [third, first];
// console.log(first, third);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// nested destructring

// const nested = [2, 4, [5, 6]];

// const [i, , [k, j]] = nested;
// console.log(i, j, k);

// default values

// const [p = NaN, q = NaN, r = NaN] = [8, 9];
// console.log(p, q, r);

//// destructring objects

// const { openingHours, categories } = restaurant;
// console.log(openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 56 };
// ({ a, b } = obj);
// console.log(a, b);

//
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//

// restaurant.orderDelivery({
//   starterIndex: 2,
//   address: "golshan",
// });

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, "benana"];
// console.log(newMenu);
// console.log(...newMenu);

// const copyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(copyMenu);

// const str = "reza";
// const letters = [...str];
// console.log(letters);
// console.log(...str);

// const ingredients = [prompt("ing1?"), prompt("ing2"), prompt("ing3")];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, funder: "rezaAmin" };
// console.log(newRestaurant);

// copy objects

// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = "reza restaurant";

// console.log(restaurant.name, copyRestaurant.name);

// rest pattern & parameters

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = arr;
// console.log(a, b, others);

// const [pizza, risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   console.log(numbers);
// };

// add(2, 3, 4);
// add(2, 3, 5, 4, 8, 9, 9, 9, 9, 9, 9, 9);

// const x = [2, 3, 4, 5];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "benana");
// restaurant.orderPizza("benana");

// short circuiting

// console.log(3 || "reza");

// console.log("" || "reza");
// console.log("" || null || 0 || 23);
// console.log(null || undefined);

// restaurant.numberGuest = 23;

// const guests1 = restaurant.numberGuest || 10;
// console.log(guests1);

// console.log("" && "reza");
// console.log(0 && 23);
// console.log(null && undefined);
// console.log("hello" && 23 && null && "reza");

// restaurant.orderPizza && restaurant.orderPizza("benana");

//nulish coalescing operators

// restaurant.numGuest = 0;

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// nulish value === null , undefiend
// restaurant.numGuest = undefined;
// const secondGuest = restaurant.numGuest ?? 10;
// console.log(secondGuest);

// logical assignment operators

// const rest1 = {
//   name: "la pizza",
// numberGuests: 20,
//   numberGuests: 0,
// };

// const rest2 = {
//   name: "reza pizza",
//   owner: "Amin",
// };

// or assignment operator

// rest1.numberGuests ||= 10;
// rest2.numberGuests ||= 10;

// nulish assignment operator

// rest1.numberGuests ??= 10;
// rest2.numberGuests ??= 10;

// and assignment operators

// rest1.owner &&= "<anonymous>";
// rest2.owner &&= "<anoymous>";

// console.log(rest1);
// console.log(rest2);

// coding challenge #1 part 09

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// answers:

//1.

// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldplayers] = players1;
// console.log(gk, fieldplayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const player1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
// console.log(player1Final);

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);

//6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals scored`);
// };

// printGoals(...game.scored);

//7.
// team1 < team2 && console.log("team1 win");
// team2 < team1 && console.log("team2 win");

///// looping array the for of

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(i, el);
// }

///// optional chanining

// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day} opened at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? "method does not exist");

// console.log(restaurant.orderRisso?.(0, 1) ?? "method does not exist");

// const users = [{ name: "reza", age: 24 }];

// console.log(users[0]?.name ?? "user array empty");

///// looping objects keys , values , entries

// looping with keys

// const properties = Object.keys(openingHours);
// console.log(properties);

// for (const day of properties) {
//   console.log(day);
// }

// looping with values

// const values = Object.values(openingHours);
// console.log(values);
// for (const x of values) {
//   console.log(x);
// }

// looping with keys and values
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//// coding challenge #2 part 09

//1.

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }

//2.
// let average = 0;
// for (const odd of Object.values(game.odds)) {
//   average += odd;
// }

// average /= Object.values(game.odds).length;
// console.log(average);

//3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`odd of ${teamStr} ${odd}`);
// }

//// sets

// const orderSet = new Set(["pizza", "pasta", "pizza", "pasta", "potato"]);

// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("benana"));
// console.log(orderSet.has("pizza"));
// console.log(orderSet.add("benana"));
// console.log(orderSet.delete("pizza"));
// // orderSet.clear();

// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ["waiter", "chef", "manager", "chef", "waiter"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set("reza").size);

// maps fundamentals

// const rest = new Map();

// rest.set("name", "reza");
// rest.set(1, "tehran");
// rest.set(2, "Isfahan");
// rest.set("categorries", ["italian", "iranian", "organic"]);

// console.log(rest.get("name"));
// console.log(rest.has("categorries"));
// console.log(rest.size);
// rest.delete(1);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "time to ");

// rest.set(document.querySelector("h1"), "Heading");

// console.log(rest);

// maps iterations

// const question = new Map([
//   ["question", "whats your best language?"],
//   [1, "C"],
//   [2, "java"],
//   [3, "js"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again!"],
// ]);

// console.log(question);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt("your answer:"));
// let answer = 3;

// console.log(question.get(question.get("correct") === answer));

// map to objects

// const hoursMap = Object.entries(openingHours);
// console.log(hoursMap);

// map to arrays

// console.log([...question]);

// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// coding challenge #3 part 09

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2.
// gameEvents.delete(64);
// console.log(gameEvents);

//3.
// const time = [...new Set(gameEvents.keys())].pop();
// console.log(
//   `An event happened , on average , every ${time / gameEvents.size} minutes`
// );

//4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "First" : "Second";
//   console.log(`[${half} HALF] ${min} : ${event}`);
// }

// working with strings part 1

const airLine = "TAP Air Iran";
const plane = "A320";

// console.log(plane[0]);
// console.log(plane[3]);

// console.log(plane.indexOf("3"));
// console.log(airLine.lastIndexOf("A"));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(" ")));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("you go the middle seat");
//   } else {
//     console.log("you got lucky");
//   }
// };

// checkMiddleSeat("22E");
// checkMiddleSeat("2C");
// checkMiddleSeat("32B");

// working with string part 2

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const passenger = "rEzA";
const passenerLower = passenger.toLocaleLowerCase();
const passengercorrect =
  passenerLower[0].toUpperCase() + passenerLower.slice(1);
console.log(passengercorrect);

// email check

const email = "reza@gamil.com";
const loginEmail = "    Reza@Gmail.COM  ";

const normalizedEmail = email.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// replacing

const priceGB = "299,87$";
const priceUs = priceGB.replace(",", ".");
console.log(priceUs);

const name1 = "reza amin amin";
console.log(name1.replace("amin", "rezaei"));

console.log(name1.replaceAll("amin", "rezaei"));

// booleans

const plane1 = "A320ne";
console.log(plane1.includes("A320"));

console.log(plane1.startsWith("A"));
console.log(plane1.endsWith("w"));

//practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are terrorist");
  } else {
    console.log("welcome aboard");
  }
};

checkBaggage("Knife , laptop");
checkBaggage("gun , snacks");
checkBaggage("benana");
