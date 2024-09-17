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

const cutPieces = function (fruit){
    return fruit *4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));