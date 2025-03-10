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


// const calcTip = function(bill){
//     return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20
// };

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0] , bills[1] + tips[1] , bills[2] + tips[2]];
// console.log(totals);


// introduction to objects

// const reza = {
//     firstName:'reza',
//     lastName:'amin',
//     age: 2024 - 2000,
//     job: 'programmer',
//     friends: ['alireza', 'mamad'],
// };

// console.log(reza);




// dot vs bracket

// const reza = {
//     firstName:'reza',
//     lastName:'amin',
//     age: 2024 - 2000,
//     job: 'programmer',
//     friends: ['alireza', 'mamad'],
// };

// console.log(reza.firstName);
// console.log(reza['firstName']);

// const nameKey = 'Name';
// console.log(reza['first' + nameKey]);
// console.log(reza['last' + nameKey]);

// const question = prompt('what do you want know reza?');

// if(reza[question]){
//     console.log(reza[question]);
// } else{
//     console.log('value does not exist');
// };


// reza.location ="Iran";
// reza['telegram'] = "@jalal_aref";
// console.log(reza);


//

// console.log(`${reza.firstName} has ${reza.friends.length} friedns and his best friend called ${reza.friends[1]}`);






// object methods

// const reza = {
//     firstName:'reza',
//     lastName:'amin',
//     birthYear:2000,
//     job: 'programmer',
//     friends : ['alireza', 'mamad'],
//     hasDriverLicense: false,

//     calcAge: function(){
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },

//     getSummery : function(){
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and has ${this.hasDriverLicense ? 'a' : 'no'} drivers license`
//     }
// };


// console.log(reza.calcAge());
// console.log(reza['calcAge']());
// console.log(reza.age);

// console.log(reza.getSummery());




// coding challenge #3 part 2

// const mark= {
//     fullName:'mark',
//     mass:78,
//     height:1.69,

//     calcBmi: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'john',
//     mass: 92,
//     height: 1.95,

//     calcBmi: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// }

// mark.calcBmi();
// john.calcBmi();

// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName} with BMI ${mark.bmi} bigger than ${john.fullName} with BMI ${john.bmi}`);

// } else if(john.bmi > mark.bmi){
//     console.log(`${john.fullName} with BMI ${john.bmi} bigger than ${mark.fullName} with BMI ${mark.bmi}`);
// };



// itearation the for loop

// for(let rep=1; rep <= 20; rep++){
//     console.log(`lifting weights repetition ${rep}`);
// };



// looping arrays breaking and continue

// const reza = [
//     'reza',
//     'amin',
//     2024 - 2000,
//     'programmer',
//     ['alireza', 'mamad']
// ];

// const types = [];

// for(let i = 0 ; i < reza.length; i++){
//     console.log(reza[i]);
//     types.push(typeof reza[i]);
// };
// console.log(types);

//

// const years = [2000,2001,2002,2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2024 - years[i]);
// };
// console.log(ages);


// continue

// for(let i=0; i< reza.length;i++){
//     if(typeof reza[i] !== 'string') continue;
//     console.log(reza[i]);
// };


// break

// for(let i = 0 ; i < reza.length; i++){
//     if(typeof reza[i] === 'number') break;
//     console.log(reza[i]);
// };







// looping backwards and loops in loops

// const reza = [
//     'reza',
//     'amin',
//     2024 - 2000,
//     'programmer',
//     ['alireza', 'mamad']
// ];

// for(let i = reza.length - 1 ; i >=0; i--){
//     console.log(reza[i]);
// };


// loops in loops

// for(let exercise = 1; exercise <=3; exercise++){
//     console.log(` ------- starting exercise ${exercise}`);
//     for(let rep =1; rep <=5; rep++){
//         console.log(`exercise ${exercise}: lifting repetition ${rep}`)
//     }
// };







// while loop

// let rep =1;
// while(rep <=10){
//     console.log(`lifting weights repetition ${rep}`);
//     rep++;
// };



// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6){
//     console.log(`your roled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1 ;
//     if(dice===6) console.log('loop is about to end...');
// };




// coding challenge #4 part 2

const calcTip = function(bill){
    return bill>=50 && bill<=300 ? bill * 0.15 : bill*0.20
};

const bills = [10,20,30,4,0,50,6,0,70,8,90,100];
const tips = [];
const totals =[];

for(let i = 0 ; i < bills.length; i++){
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
};

console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
        
    }
    return sum / arr.length;
};

console.log(calcAverage([2,3,7]));

console.log(calcAverage(totals));
console.log(calcAverage(tips));