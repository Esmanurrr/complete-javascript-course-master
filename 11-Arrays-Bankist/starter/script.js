'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ----------------- SIMPLE ARRAY METHODS -----------------

/*

! why do array have methods?
! methods are simply functions that we can call on objects, they are functions atteched objects
! if array has a method, that refers they are an object

let arr = ['a', 'b', 'c','d','e'];

* slice - does not change the array
console.log(arr.slice(2)); // start parameter
console.log(arr.slice(2, 4)); // start and end parameter
console.log(arr.slice(-2)); // last 2 elements
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2));
console.log(arr.slice()); // shallow copy
console.log([...arr]); // shallow copy - you can use both of them


* splice - mutate the array
// console.log(arr.splice((2))); // ['c','d','e'];
arr.splice(-1); // delete last element
console.log(arr);
arr.splice(1, 2); // start and deleteCount
console.log(arr); // ['a', 'b'] - splice method deleted the other 3 element from actual array

* reverse - ALSO mutate the array
arr = ['a', 'b', 'c','d','e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //  ['f', 'g', 'h', 'i', 'j']
console.log(arr2); //  ['f', 'g', 'h', 'i', 'j']

* concat - does not mutate the original array.
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // same thing - you can use whatever you want

* join 
console.log(letters.join(' - ')); // result is STRING 

*/

// -------------------------- THE NEW AT METHOD -----------------

/*
const arr = [23, 11, 64];
console.log(arr[0]); // if you want to quickly get an element, you should use index of array
console.log(arr.at(0));

* getting last array element
console.log(arr[arr.length - 1]); // we can not arr[-1] because in js index should be 0 or positive number. 
console.log(arr.slice(-1)[0]); 
console.log(arr.at(-1)); // if you want to last element of array or if you want to order from last element, you can use at(). Also if you want to use method chaining you can use at()

console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); // s
*/


// ----------- LOOPING ARRAYS: FOREACH LOOP ---------------

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for(const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}


! forEach : requires callback function, higher-order function.
! when foreach loop on each element, callback function get these elements individually as argument 
! you can not BREAK from forEach. Conitnue and Break statements are not in forEach. if you must use break or continue statement you should use for loop

movements.forEach(function(movement, index, array) { // order is important
  if(movement > 0){
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

* 0: function(200);
* 1: function(450);
* 2: function(-400);

*/


// -------------- FOREACH WİTH MAPS AND SETS ---------------

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach in maps arguments are should be value, key and map

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// sets have no key
currenciesUnique.forEach(function(value, _, map){ // _ is unnecessary variable
  console.log(`${value}: ${value}`);
})