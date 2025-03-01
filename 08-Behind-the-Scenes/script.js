"use strict";

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `you are age ${age} and born in ${birthYear}`;
//     console.log(output);
//     console.log(firstName);
//   }
//   if (birthYear >= 1981 && birthYear <= 1996) {
//     const str = firstName;
//     console.log(firstName);
//   }
//   printAge();
//   console.log(str); => refrence Error;
//   return age;
// }

// const firstName = "reza";
// calcAge(2000);
// printAge(); => error
// console.log(age); => ReferenceError

////////////

// console.log(me);
// console.log(job);
// console.log(year);

var me = "reza";
let job = "programmer";
const year = 2000;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
