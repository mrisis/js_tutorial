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

// function calcAge1(birthYear){
//     return 2024 - birthYear;
// }

// const age1 = calcAge1(2000);
// console.log(age1);

// fuction expressions 

// const calcAge2 = function (birthYear){
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age2);



// arrow functions

// const calcAge3 = birthYear => 2024 - birthYear;

// const age3 = calcAge3(2000);
// console.log(age3);


// const yearUntilRetirment = (birthYear,firstName) => {
//     const age = 2024 - birthYear;
//     const retirment = 65 - age;
//     return console.log(`${firstName} retiry ${retirment} years`)
// }

// console.log(yearUntilRetirment(2000, 'reza'));
// console.log(yearUntilRetirment(1980, 'ali'));




// fuctions calling other functions

// function cutFruitPieces(friut){
//     return friut * 4;
// }


// function friutProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }


// console.log(friutProcessor(2,3));




// reviewing functions

// const calcAge=function (birthYear){
//     return 2024 - birthYear;
// }

// const yearUntilRetirment = function (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirment = 65 - age;

//     if(retirment > 0){
//         return retirment;
//     }else{
//         return -1;
//     }
// };

// console.log(yearUntilRetirment(2000, 'reza'));
// console.log(yearUntilRetirment(1920, 'alireza'));



// coding challenge #1 part 2

// const calcAverage = (a,b,c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2*avgKoalas){
//         console.log(`dolphins winner ${avgDolphins} vs ${avgKoalas}`);
//     } else if(avgKoalas >= 2*avgDolphins){
//         console.log(`koalas winner ${avgKoalas} vs ${avgDolphins}`);
//     } else{
//         console.log('no team winner...');
//     }
// };

// checkWinner(scoreDolphins, scoreKoalas);



// introduction to array

// const friends = ['ali', 'reza' , 'mamad'];
// console.log(friends);

// const y = new Array(2000,2008,2020);
// console.log(y);

// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'alireza';
// console.log(friends);

// const reza = ['reza', 'amin', 2024 - 2000 , 'programmer', friends];
// console.log(reza);


// //
// const calcAge = function(birthYear){
//     return 2024 - birthYear;
// }

// const years = [2000,2001,2010];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);




// basic array operations (methods)

// const friends = ['reza', 'ali', 'mamad'];

// add elements
// friends.push('alireza');
// console.log(friends);

// friends.unshift('mohammadreza');
// console.log(friends);

// remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// 
// console.log(friends.indexOf('ali'));

// console.log(friends.includes('Bob'));

// if(friends.includes('ali')){
//     console.log('your friend name ali.');
// }




// coding challenge #2 part 2


const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20
};

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0] , bills[1] + tips[1] , bills[2] + tips[2]];
console.log(totals);