'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log(' i can drive!');


// const if = 'reza';
// const interface = true;



// functions

// function logger(){
//     console.log('my first name is reza');
// }

// logger();
// logger();
// logger();


// function fruitProcessor(apples , oranges){
//     const juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);



// function declarations

function calcAge1(birthYear){
    return 2024 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

// fuction expressions 

const calcAge2 = function (birthYear){
    return 2024 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);