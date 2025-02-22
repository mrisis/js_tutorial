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

// const BMIMark = 28.3;
// const BMIJohn = 23.9;

// if (BMIMark > BMIJohn) {
//     console.log(`mark BMI ${BMIMark} is higher than john's ${BMIJohn}`)
// } else {
//     console.log(`BMI john ${BMIJohn} is higher than mark's ${BMIMark}`)
// }


// data converison

// const inputYear = '2000';
// console.log(Number(inputYear) + 18);

// console.log(String(24));

// console.log(Number('reza')); 


// data coercion

// console.log('im ' + 24 + ' years old');

// console.log('1' + '2' + '8');

// console.log('18' - '5');

// console.log('18' / '2');
// console.log('18' * '2');
// console.log('18' ** '2');


// let n = '1' + 1;
// n = n -1;
// console.log(n);



// truthy & falsy values


// falsy values : 0 , '' , unll , undefined , NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean('reza'));
// console.log(Boolean(undefined));


// const money = 0;
// if (money) {
//     console.log("don't spend it all")
// } else {
//     console.log("you should get a job")
// }


// let hight;
// // hight = 0 -> id return undefined
// if (hight) {
//     console.log(" hight is defined")
// } else {
//     console.log("hight is UNDEFINED")
// }


// equality operators == vs ===


// const age = 18;
// if (age === 18) {
//     console.log('you just became adultd');
// } else {
//     console.log('you are young man !!');
// }

// console.log(18==='18');
// console.log(18=="18");

// const favourite = Number(prompt("what's your favourite number?"));

// if (favourite === 23) {
//     console.log('it is cool number');
// }else if(favourite === 20){
//     console.log('it is not bad number')
// }else{
//     console.log('what ???!!')

// }

// if (favourite !== 23) {
//     console.log('why not 23??')
// }


// logical operators

// const hasDriverLicence = true;
// const hasGoodVision = true;
// const isTired = false;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);

// if (hasDriverLicence && hasGoodVision) {
//     console.log('reza is able should drive')
// } else {
//     console.log('someone else should drive')
// }

// if (hasDriverLicence && hasGoodVision && !isTired) {
//     console.log('reza is able should drive')
    
// } else {
//     console.log('someone else should drive...')
    
// }

// console.log(hasDriverLicence || hasGoodVision || isTired)



// coding challenge #3

// const scoreDolphines  = (96+108+89) / 3;
// const scoreKoalas = (88+91+110) / 3;

// if (scoreDolphines > scoreKoalas) {
//     console.log('dolphins win the trophy')
// } else if(scoreKoalas > scoreDolphines){
//     console.log('koalas win the trophy')
// } else if(scoreDolphines === scoreKoalas){
//     console.log('both win the trophy')
// }


///// 

// const scoreDolphines = (97+112+101) / 3;
// const scoreKoalas = (109+95+123) / 3;

// if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
//     console.log('dolphines wit the trophy');
// } else if(scoreKoalas > scoreDolphines && scoreKoalas>= 100) {
//     console.log(' koalas win the trophy')
// } else if(scoreDolphines === scoreKoalas && scoreDolphines>=100 && scoreKoalas>=100){
//     console.log('both win the trophy');
// } else{
//     console.log('no one win trophy');
// }




// the switch case statement

const day = 'monday';

switch(day){
    case 'monday':
        console.log('plan1');
        console.log('go to home');
        break;
    case 'tuesday':
        console.log('go to gym');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('record videos');
        break;
    default:
        console.log(' not a valid day!!!');
}