// alert('hello world');

// let js = 'amazing';
// if (js === 'amazing') alert('fun');


// console.log(40+8+23-10);


// values and variables

// console.log("reza amin");

// let firstName = "reza";
// console.log(firstName);

// let PI = 3.1415;
// console.log(PI);



// data types


// let firstName = "reza";
// console.log(typeof firstName)

// let age = 24;
// console.log(typeof age);

// let jsIsFun = true;
// console.log(typeof jsIsFun);

// let year;
// console.log(typeof year);

// year = 2000;
// console.log(typeof year)

// console.log(typeof null);



// let , const , var


// let age = 24;
// age=25;

// const birthYear = 2000;
// birthYear=2001; -> error

// var firstName = "reza";
// firstName = "alireza";



// math operator

// const ageReza = 2025 - 2000;
// console.log(ageReza);

// console.log(ageReza * 2);

// console.log(ageReza / 2);

// console.log(2 ** 3);


// // assignment operators

// let x = 5;

// x += 2;

// x -= 1;

// x *= 3;

// x++;

// x --;

// console.log(x);


// comparison operators

// console.log(ageReza >= 18);

// const isFullAge = ageReza >= 18;
// console.log(isFullAge);


// operator precedence

// console.log(25-10-5);


// const averageAge = (24 + 19) / 2;
// console.log(averageAge);


// answer codeing challenge 


// const massMark = 78;
// const hightMark = 1.69;

// const massJohn = 95;
// const hightJohn = 1.76;

// const BMIMark = massMark / hightMark ** 2;
// const BMIJohn = massJohn / (hightJohn * hightJohn);


// console.log(BMIJohn, BMIMark);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


// string and template literals


// const firstName = 'reza';
// const job = 'programmer';
// const birthDate = 2000;
// const year = 2024;

// const reza = `i'm ${firstName} , a ${year - birthDate} years old , ${job}!`
// console.log(reza);


// console.log(`string
//     multiple 
//     lines!!!`);

// console.log('string \n\ multiple \n\ lines !!!!');


// if else statement

// const age = 2;

// if (age >= 18) {
//     console.log('reza can start dirving licence.')
    
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`reza is too young, wait another ${yearsLeft} years ...`)
    
// }


// const birthYear = 2000;

// let century;
// if (birthYear >= 2000) {
//     century = 21;
    
// } else {
//     century = 20;
// }

// console.log(century)


// coding challenge #2

const BMIMark = 28.3;
const BMIJohn = 23.9;

if (BMIMark > BMIJohn) {
    console.log(`mark BMI ${BMIMark} is higher than john's ${BMIJohn}`)
} else {
    console.log(`BMI john ${BMIJohn} is higher than mark's ${BMIMark}`)
}