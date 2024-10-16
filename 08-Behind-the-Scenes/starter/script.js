'use strict';

// calcAge is in global scope
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(firstName); // thanks to global scope we can use there

//     function printAge (){
//         let output = ` ${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

         // block scope
//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true;
             // Creating new variable with same name as outer scope's variable
//             const firstName = 'Steven';

             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT';
//             console.log("in if statement ", output) // NEW OUTPUT

//             const str = `Oh, and you're a millenial, ${firstName}` // firstname is steven because it firstly look up the own scope
//             console.log(str);

//             function add(a,b) { // functions are block scope
//                 return a + b;
//             }

//         }
        // console.log(str); // referenceError (only const and let are block scope)
        // console.log(millenial); // logged true (before es6 - ignore the block, var is function scope)
        // add(2,3); // referenceError (because of block scope)
//         console.log("out of if statement ", output); // NEW OUTPUT
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// -------- Hoisting --------

// Variables
console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // same


var me = 'Esma';
let job = 'engineer';
const year = 2000;

// Functions 
console.log(addDecl(2,3)); // 5
// console.log(addExpr(2,3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addExpr(2,3)); // (with var) Uncaught TypeError: 'addExpr' is not a function. Because var will be undefined then we call it like that: undefined(2,3) so that is a not function.
// console.log(addArrow(2,3));


function addDecl(a,b){
    return a + b;
}

// const addExpr = function (a,b) {
//     return a + b;
// }

var addExpr = function (a,b) {
    return a + b;
}

const addArrow = (a,b) => a + b;


// Example
console.log(numProducts); // undefined
if(!numProducts) deleteShoppingCart(); // All products are deleted.

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products are deleted');
}

// what is the best practices ?
// 1. dont use var to declare variables. use const or let
// 2. declare your variables top of code 
// 3. only use variables and functions after declaration of 

var x = 1; // we can only see x variable in window object as a property
let y = 2; // we can not see let and const variables
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
