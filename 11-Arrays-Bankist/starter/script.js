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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // or .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  ); // returns undefined if there is no name in the value entered in the input
  inputTransferAmount.value = inputTransferTo.value = '';

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.username.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    ); // findIndex method work with callback function

    //.indexOf(23) -> we can just search the element of array, not write an complex condition

    // delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
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

// --------- THE SOME METHOD -------------

// equality
// console.log(movements.includes(-130)); // returns true

//some: condition
// console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0); //returns true

// evevry
// console.log(movements.every(mov => mov > 0)); // false
// console.log(account4.movements.every(mov => mov > 0)); // true because all of the element is positiv

// seperate callback
const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// ------------ FLAT AND FLATMAP -------------------

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
// console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements); // all movements are in one array
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);

// console.log(accounts.map(acc => acc.movements)); // sub arrays in one array
// console.log(overalBalance);

// flatMap
// console.log(accounts.flatMap(acc => acc.movements)); // all movements are in one array

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);

// console.log(overalBalance2);

// ------------ SORTING ARRAYS -------------------

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // mutate the actual array
// console.log(owners);

// Numbers
// console.log(movements);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; // returned value doesnt matter, it means if return value bigger than 0 then you sort a after b
//   if (b > a) return -1;
// });

movements.sort((a, b) => a - b); // ascending, if a-b is positive, return 1 so they change places.

// console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

movements.sort((a, b) => b - a); // descending, because b-a is positive, return 1 so they change places

// console.log(movements);

// -------- MORE WAYS OF CREATING AND FILLING ARRAYS ------

const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array([1,2,3,4,5,6,7]));

const x = new Array(7); // empty array
// console.log(x);
// console.log(x.map(()=>5)); // doesnt work
x.fill(1, 3, 5); // value, start, end
x.fill(1); // all elements are 1
// console.log(x);

arr.fill(23, 2, 6);
// console.log(arr);

// Array.from()

const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementUI);

  const movementUI2 = [...document.querySelectorAll('.movements__value')];
});

// -------- ARRAY METHOD PRACTICE ------

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov > 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// prefixed ++ operator
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);

// 3.
const {deposits, withdrawals} = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function(title){
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and','the', 'but','or','on','in','with'];

  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
  return titleCase;
}

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

