"use strict";

// default parameters

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(bookings);
// };

// createBooking("LH123");
// createBooking("LH124", 20);
// createBooking("LH125", 205, 2550);

// how to passing arguments works vlaues vs refrence

// const flight = "LH125";
// const reza = {
//   name: "reza amin",
//   passport: 242526,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "MR." + passenger.name;

//   if (passenger.passport === 242526) {
//     alert("checked In");
//   } else {
//     alert("wrong PassPort");
//   }
// };

// checkIn(flight, reza);
// console.log(flight);
// console.log(reza);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(reza);
// checkIn(flight, reza);
// console.log(reza);

// functions accepting callback functions

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// higher order function (callback functions)

// const transformer = function (str, fn) {
//   console.log(`Transformed string:${fn(str)}`);
//   console.log(`Transformed By: ${fn.name}`);
// };

// transformer("JS is the best", upperFirstWord);
// transformer("JS is the best", oneWord);

// functions retrning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("reza");

// greet("Hello")("reza");

// challenge write function with arrow functions

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr("HI")("reza");

// the call ad apply method

// const landa = {
//   airline: "Landa Air Lines",
//   iataCode: "LA",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}` });
//   },
// };

// landa.book(850, "reza amin");
// // console.log(landa);

// const eurowings = {
//   airline: "eurowings",
//   iataCode: "EU",
//   bookings: [],
// };

// const book = landa.book;

// // call method

// book.call(eurowings, 900, "alireza");
// // console.log(eurowings);

// // apply method

// const flightData = [1000, "mamad"];
// book.apply(eurowings, flightData);
// // console.log(eurowings);

// book.call(eurowings, ...flightData);
// // console.log(eurowings);

// // the bind method

// const bookEu = book.bind(eurowings);
// bookEu(110, "mohsen");
// console.log(eurowings);

// // with event listner

// landa.planes = 300;
// landa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", landa.buyPlane.bind(landa));

// // partial application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(1000));
// console.log(addVAT(250));

// // write function add tax to return function

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(2550));
// console.log(addVAT2(1550));

// const poll = {
//   question: "whate your favorite programming language?",
//   options: ['0":js', "1:python", "2:rust"],
//   answers: new Array(4).fill(0),

//   //1.
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join("\n")} \n(write option number)`
//       )
//     );
//     typeof answer === "number" &&
//       answer < this.options.length &&
//       this.answers[answer]++;
//     this.displayResult();
//     this.displayResult("string");
//   },
//   displayResult(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if ((type = "string")) {
//       console.log(`poll results ${this.answers.join(",")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // bounus

// poll.registerNewAnswer({ answers: [5, 2, 3] });
// console.log(poll);

// Iife

// const runOnce = function () {
//   console.log("run one time for ever");
// };

// runOnce();

// // Iife
// (function () {
//   console.log("run one time !!!");
// })();

// (() => console.log("run one time !@!@!"))();

// closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
