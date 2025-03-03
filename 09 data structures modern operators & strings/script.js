"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
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
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 1, address }) {
    console.log(
      `$start menu ${this.starterMenu[starterIndex]} , address ${address}, manimenu ${this.mainMenu[mainIndex]}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

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

console.log(3 || "reza");

console.log("" || "reza");
console.log("" || null || 0 || 23);
console.log(null || undefined);

restaurant.numberGuest = 23;

const guests1 = restaurant.numberGuest || 10;
console.log(guests1);

console.log("" && "reza");
console.log(0 && 23);
console.log(null && undefined);
console.log("hello" && 23 && null && "reza");

restaurant.orderPizza && restaurant.orderPizza("benana");
