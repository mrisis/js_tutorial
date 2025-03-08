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

const landa = {
  airline: "Landa Air Lines",
  iataCode: "LA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}` });
  },
};

landa.book(850, "reza amin");
console.log(landa);

const eurowings = {
  airline: "eurowings",
  iataCode: "EU",
  bookings: [],
};

const book = landa.book;

// call method

book.call(eurowings, 900, "alireza");
console.log(eurowings);

// apply method

const flightData = [1000, "mamad"];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
console.log(eurowings);
