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
// console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // same


// var me = 'Esma';
// let job = 'engineer';
// const year = 2000;

// Functions 
// console.log(addDecl(2,3)); // 5
// console.log(addExpr(2,3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addExpr(2,3)); // (with var) Uncaught TypeError: 'addExpr' is not a function. Because var will be undefined then we call it like that: undefined(2,3) so that is a not function.
// console.log(addArrow(2,3));


// function addDecl(a,b){
//     return a + b;
// }

// const addExpr = function (a,b) {
//     return a + b;
// }

// var addExpr = function (a,b) {
//     return a + b;
// }

// const addArrow = (a,b) => a + b;


// Example
// console.log(numProducts); // undefined
// if(!numProducts) deleteShoppingCart(); // All products are deleted.

// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log('All products are deleted');
// }

// what is the best practices ?
// 1. dont use var to declare variables. use const or let
// 2. declare your variables top of code 
// 3. only use variables and functions after declaration of 

// var x = 1; // we can only see x variable in window object as a property
// let y = 2; // we can not see let and const variables
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false


// ------ THIS KEYWORD ------

// console.log(this); // window - global object

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear); // 46
//     console.log(this); // undefined because of strict mode
// }
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear); // 46
//     console.log(this); // window (lexical this keyword)
// }
// calcAgeArrow(1991);

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this); // jonas object
//         console.log(2037 - this.year); // 46
//     }
// }
// jonas.calcAge(1991);

// const matilda = {
//     year: 2017
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // 20

// const f = jonas.calcAge;
// f(); // undefined because of there is no year 


// ------- Regular Functions vs. Arrow Functions ------

// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function(){
//         console.log(this); // jonas object
//         console.log(2037 - this.year); // 46

        // solution 1
        // const self = this
        // const isMillenial = function() {
        //     console.log(self); // undefined
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: Cannot read property 'year' of undefined at isMillenial

        // };

        // solution 2
//         const isMillenial = () => { // it works because arrow function use it parent's 'this' keyword
//             console.log(this); // undefined
//             console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: Cannot read property 'year' of undefined at isMillenial
//         };
//         isMillenial();
//     },

//     greet: () => console.log(`Hey ${this.firstName}`) // 'this' from window ** Dont use arrow function as a method.
// };

// jonas.greet(); // "Hey undefined", with var this will be 'Hey Matilda'
// console.log(this.firstName); // undefined because global scope has no firstName prop. 


// Arguments keyword
// const addExpr = function (a,b) {
//     console.log(arguments); // Arguments: [2,5,8,34]
//     return a + b;
// };
// addExpr(2,5,8,34); 


// const addArrow = (a,b) => {
//     console.log(arguments); // Uncaught ReferenceError: arguments is not defined
//     return a+b;
// };
// addArrow(2,6,3,5);


// ------ Primitives vs Objects ------


// let age = 30;
// let oldAge = age; // 30
// age = 31; 

// const me = {
//     name: 'Jonas',
//     age: 30
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend',friend); // age: 27
// console.log('Me',me); // age: 27, why me's age is changed? because object is a reference type

// Primitives
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage :', jessica); // lastName: 'Davis',
console.log('After marriage :', marriedJessica); // lastName: 'Davis',

// marriedJessica = {} we cannot this way

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage :', jessica2); // lastName: 'Williams' - not changed, array length: 4
console.log('After marriage :', jessicaCopy); // lastName: 'Davis' - changed, in the first level prop it will change actually but if it is array, it will not work (array length: 4)