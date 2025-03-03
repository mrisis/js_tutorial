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

// var me = "reza";
// let job = "programmer";
// const year = 2000;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//////////

// console.log(this);

// function calcAge(birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// }

// calcAge(2000);

// const calcAgeArrow = (birthYear) => {
//   console.log(2024 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2000);

// const reza = {
//   year: 2000,
//   calcAge: function () {
//     console.log(2024 - this.year);
//     console.log(this);
//   },
// };

// reza.calcAge();

// const matilda = {
//   year: 2005,
// };

// matilda.calcAge = reza.calcAge;
// matilda.calcAge();

// const f = reza.calcAge;
// f();

//////////////////////

// const reza = {
//   firstName: "reza",
//   year: 2000,
//   calcAge: function () {
//     console.log(2024 - this.year);

// const self = this;
// const isMillenial = function () {
//   console.log(self.year >= 1981 && self.year <= 1991);
// };

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1991);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`hey ${this.firstName}`),
// };

// reza.greet(); => hey undefiend
// reza.calcAge();

////

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 3, 4, 5);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 3);  => error

//////

// primitive types

let lastName = "amin";
let oldLastName = lastName;
lastName = "poori";
console.log(lastName);
console.log(oldLastName);

// refrence types

const reza = {
  firstName: "reza",
  lastName: "amin",
  age: 24,
};

const marridReza = reza;
// marridReza.lastName = "poori";

// console.log(reza);
// console.log(marridReza);

const rezaCopy = Object.assign({}, reza);

rezaCopy.lastName = "poori";
console.log(reza);
console.log(rezaCopy);
