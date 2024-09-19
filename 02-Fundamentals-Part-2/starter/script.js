'use strict';
// 1 - strict mod bazı şeyleri yapmamızı yasaklar.
// 2 - strict mod olmadan JS'in hata yaptığımızı bize bildirmeden sessizce başarısız olacağı durumları bizim için görünür hatalar oluşturur.

// let hasDriversLicense = false;
// const passTest = true;

 // if(passTest) hasDriverLicense = true; when strict mode is close, we cant see the error on the console but there is an error
// if (hasDriversLicense) console.log('I can drive'); 

// strict mode see the error of reserved word

// const interface = 'Audio'; 
// const private = 423;
// const if = 23;

// --- Functions ---

// function logger(){
//     console.log("My name is Esmanur");
// }

// //calling, running or invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0); // sadece bunu çalıştırdığımızda kendi içerisinde bu sonucu döndü ama biz onu konsola yazdırmadık. 
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// --- Function Declarations vs Expressions ---

// we call function declaration to above functions

//this is function declaration 
// we can call before declaration in function declaration. (hoisting)
// function calcAge1(birthYear) {
//     return 2030 - birthYear;
// }

// const age1 = calcAge1(2000);

// function expression - expression produces a value, and this value stored to a variable
// const calcAge2 = function (birthYear) {
//     return 2030 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age1, age2);

// --- Arrow Function ---  added in ES6 

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2000, "Esmanur"));
// console.log(yearsUntilRetirement(1990, "Zeliha"));

// --- Functions calling other functions ---

// const cutPieces = function (fruit){
//     return fruit *4;
// }

// function fruitProcessor(apples, oranges){

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// --- Review Functions ---

// const calcAge = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = function (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement; // if we dont use return, we will get undefined
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2000, "Esmanur"));
// console.log(yearsUntilRetirement(1960, "Zeliha"));

// --- Arrays ---

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); // Micheal
// console.log(friends[2]); // Peter

// console.log(friends.length); // 3
// console.log(friends[friends.length - 1]); // Peter

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'jonas'
// const jonas = [firstName, 'schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // Excercise
// const calcAge = (birthYear) => 2037 - birthYear;

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years[years.length - 1]])];

// --- Basic Array Operations ---

// const friends = ['Micheal', 'Steven', 'Peter'];

// Add elements
// const newLength = friends.push('Jay'); // added tp end

// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // added to index of 0
// console.log(friends);

// Remove elements
// friends.pop(); 
// const popped = friends.pop();
// console.log(popped);

// friends.shift(); // remove index of 0
// console.log(friends);

// console.log(friends.indexOf('Steven')); // 1
// console.log(friends.indexOf('Bob')); // -1  -> There is no Bob

// friends.push(23);
// console.log(friends.includes('Steven')); // returned true
// console.log(friends.includes('Bob')); // returned false
// console.log(friends.includes(23)); // returned true
// console.log(friends.includes('23')); // returned false because of strict type coercion

// if(friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// }

// --- Introduction to Objects ---

// const esma = {
//     firstName: 'Esmanur',
//     lastName: 'Mazlum',
//     age: 23,
//     job: 'engineer',
//     friends: ['zeliha', 'emine', 'serkan']
// };

// --- Dot vs. Bracket Notation ---

const esma = {
    firstName: 'Esmanur',
    lastName: 'Mazlum',
    age: 23,
    job: 'engineer',
    friends: ['zeliha', 'emine', 'serkan']
};

console.log(esma);

console.log(esma.lastName);
console.log(esma['lastName']); // the difference is that we can add more expression in bracket notation

const nameKey = 'Name';
console.log(esma['first' + nameKey]); // firstName --> return Esmanur
console.log(esma['last' + nameKey]); // lastName --> return Mazlum


const interestedIn = prompt('What do you want to know about esma? Choose between firstName, lastName, age, job or friends');
//console.log(esma[interestedIn]); we can not use esma.interestedIn because esma has not property of interestedIn, in bracket notation we can get the value of expression

if(esma[interestedIn]) {
    console.log(esma[interestedIn]);
} else {
    console.log('wrong request! Choose between firstName, lastName, age, job or friends');
}

// we can add value and key into object
esma.location = 'Turkey';
esma['instagram'] = '@ufaklikkesmaa';
console.log(esma);

// Challenge
// "Esma has 3 friends, and her best friend is called zeliha"

console.log(`${esma.firstName} has ${esma.friends.length} friends, and her best friend is called ${esma.friends[0]}`);