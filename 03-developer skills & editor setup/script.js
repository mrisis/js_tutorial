"use strict";

// const x = 10;

// if (x === 23) console.log("hi");
// console.log(x);

// const calcAge = (birthYear) => 2024 - birthYear;

// console.log(calcAge(2000));

// if (calcAge(2000) >= 20) console.log("hi ");

// const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(tempratures);
// console.log(amplitude);

// debugger

const measurKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    value: Number(prompt("Degrees celsisus:")),
  };
  debugger;
  const kelvin = measurement.value + 270;
  return kelvin;
};

console.log(measurKelvin());
