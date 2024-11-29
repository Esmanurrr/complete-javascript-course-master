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

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // or .textContent = 0;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html); // position, and string
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(''); // created a new property on the account element
  });
};

createUsernames(accounts);

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  ); // returns undefined if there is no name in the value entered in the input
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.username.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();


    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);

    // Display summary
    calcDisplaySummary(currentAccount);

  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

/*

* Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

! forEach in maps arguments are should be value, key and map

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

* Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
! sets have no key
currenciesUnique.forEach(function(value, _, map){ // _ is unnecessary variable
  console.log(`${value}: ${value}`);
})

*/

// ----------  DATA TRANSFORMATIONS WITH MAP, FILTER AND REDUCE -----------

// MAP : create a brand new array based on the original array.
//  takes an array, loops over that array and in each iteration it applies a callback function that we specify on our code to the current array element

// FILTER : returns a new array containing the array elements that passed a specified test condition

// REDUCE : boils ("reduces") all array elements down to one single value. no new array, only reduces value.

// --------- MAP -------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){ // functional programming
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd); // what map function actually do?

// const movementDescriptions = movements.map((mov, i) => {
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// }); // returned one array

// console.log(movementDescriptions);

// --------- THE FILTER METHOD -------------

// const deposits = movements.filter(function(mov){
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for(const mov of movements){
//   if (mov>0) depositsFor.push(mov);
// }; // same thing as filter method

// console.log(depositsFor);

// const withdrawals = movements.filter((mov) => mov < 0 );
// console.log(withdrawals);

// --------- THE REDUCE METHOD -------------

// console.log(movements);

// accumulator => snowball
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0); // 0 is initial value of accumulator

const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

// maximum value

const maxValue = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);

// console.log(maxValue);

// --------- THE MAGIC OF CHAINING METHODS -------------

const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// --------- THE FIND METHOD -------------

const firstWithdrawal = movements.find(mov => mov < 0); // returns first element which is less from 0
// console.log(movements);
// console.log(firstWithdrawal); // -400

// console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
