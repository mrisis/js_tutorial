"use strict";

// default parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

createBooking("LH123");
createBooking("LH124", 20);
createBooking("LH125", 205, 2550);
