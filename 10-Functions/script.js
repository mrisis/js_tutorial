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

const flight = "LH125";
const reza = {
  name: "reza amin",
  passport: 242526,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "MR." + passenger.name;

  if (passenger.passport === 242526) {
    alert("checked In");
  } else {
    alert("wrong PassPort");
  }
};

checkIn(flight, reza);
console.log(flight);
console.log(reza);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(reza);
checkIn(flight, reza);
console.log(reza);
