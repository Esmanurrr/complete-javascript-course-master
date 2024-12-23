'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  
  // ES6 enhanced function literals
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){ // we can also just use 'obj' as an argument
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient); // mushrooms
    console.log(otherIngredients); // ['onion', 'olives', 'spinach']
  }

};

// ---------------- WORKING WITH STRINGS ----------------

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane[2]); // 2
// console.log('B737'[0]); // B

// console.log(airline.length); // 16
// console.log('B737'.length); // 4

// console.log(airline.indexOf('r')); // 6 (r is in index of 6)
// console.log(airline.lastIndexOf('r')); // 10 (last r is in index of 10)
// console.log(airline.indexOf('Portugal')); // 8 (case sensitiv - if we search 'portugal' then returns -1)

// console.log(airline.slice(4)); // Air Portugal (argument is begin parameter)
// console.log(airline.slice(4, 7)); // Air (begin, finish parameter), length of this string is (finish - start)

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // + 1 is for not to get space char 

// console.log(airline.slice(-2)); // al (last 2 letters)
// console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function(seat){
   // B and E is in the middle
//    const s = seat.slice(-1);
//    if(s === 'B' || s === 'E') console.log("You got the middle seat 😐");
//    else console.log("You are lucky 🥳")
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Strings are primitive, how they got the methods? 
// whenever we call a method on a string, javascript will automaticly in behind the scenes convert that string primitive to string object with the same content
// and then it is on that object were the methods are called.
// this process is called BOXING

// console.log(new String('jonas')); // this conversion is what javascript does behind the scenes whenever we call a method on a string, when operation is done the object converted back to a regular string primitive
// console.log(typeof new String('jonas')); // object
// all string methods return primitive, even if called on a string object
// console.log(typeof new String('jonas').slice(-1)); // string 

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmal = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmal.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£','$').replace(',','.') ; // (what we want to replace, string that will replace the first one)
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// console.log(announcement.replace('door', 'gate')); // only replaces first 'door'
// console.log(announcement.replaceAll('door', 'gate')) // all 'door' replaces to 'gate'
// console.log(announcement.replace(/door/g, 'gate')); // replace all with regular expressions

// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Airb')); // true

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('Part of the NEW airbus family');
// }

// Practice exercise
// const checkBaggage = function(items){
//  const baggage = items.toLowerCase();
//  if(baggage.includes('knife') || baggage.includes('gun')){
//   console.log('You are NOT allowed on board');
//  } else {
//   console.log('Welcome aboard');
//  }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// Split and Join

// console.log('a+very+nice+string'.split('+')); // ['a','very','nice','string']
// console.log('Jonas Schmedtmann'.split(' ')); // ['Jonas','Schmedtmann']

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');
// capitalizeName('esmanur mazlum');

// Padding
// const message = 'Go to gate 23!'
// console.log(message.padStart(20, '+').padEnd(30, '+')); // (how many length should be?, what we add for it?)
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function(number){
//   const str = number + ''; // convert number to string
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');

// }

// console.log(maskCreditCard(3242242));
// console.log(maskCreditCard(423425443453323));
// console.log(maskCreditCard('585438399539539583'));

// Repeat 
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planeInLine = function(n){
//   console.log(`There are ${n} plane in line ${'✈️'.repeat(n)}`);
// }

// planeInLine(3);
// planeInLine(7);
// planeInLine(12);


// ------------- MAPS ------------

// Maps: Fundamentals
// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lizbon, Portugal')); // returns updated whole map

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open',11)
//     .set('close',23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// console.log(rest.get('name')); // Classico Italiano
// console.log(rest.get(true)); // we are open :D 

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // we are open :D (but this way is not readeble)

// console.log(rest.has('categories')); // true
// // rest.clear();
// rest.delete(2); 
// console.log(rest.size);

// const arr = [1,2]
// rest.set(arr, 'Test');
// // rest.set([1,2], 'Test');
// console.log(rest.get([1,2])); // returns undefined (NOT 'Test', because they are not the same object in the heap)

// rest.set(document.querySelector('h1'), 'Heading');

// Maps: Iteratıons

// const question = new Map([
//   ['question','What is the best programming language in the world?'],
//   [1, 'C'],
//   [2,'Java'],
//   [3, 'Javascirpt'],
//   ['correct', 3],
//   [true, 'Correct 🥳'],
//   [false, 'Try again!']
// ]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app

// console.log(question.get('question'));

// for(const [key,value] of question) {
//   typeof key == 'number' ? console.log(`Answer ${key}: ${value}`) : ''
// }

// const answer = Number(prompt('Your answer'));
// const answer = 3;
// answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));

// Convert map to array 
// console.log(question); // map, (object in the object)
// console.log([...question]) // array (arrays in an array)
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);


// when we use these data structures? 
// if we have a simple list, we can use arrays or sets
// if we have key/value pairs, we can use objects or maps (key allows us to describe values)
// if we have a json datas, we can use array. because json datas are objects that in one array


// --------------- SETS ------------

// const orderSet = new Set(['Pasta','Pizza','Risotto','Pizza','Pasta','Pizza']);
// console.log(orderSet); // Set(3), all duplicates are gone. elements are unique. orders in the set is not important

// console.log(new Set('Jonas')); // Set(5) {"J","o","n","a","s"}

// console.log(orderSet.size); // 3, not length!
// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// orderSet.clear(); // delete all of the elements from Set
// console.log(orderSet); 

// for (const order of orderSet) console.log(order);

// Example
// const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique = [...new Set(staff)]; // we turned set to array
// console.log(staffUnique);

// console.log(new Set('jonasschmedtmann').size); // how many letters in the name

// ------------- LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES ----------

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties); // ['thu', 'fri','sat']

// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr); // we are open on 3 days: thu, fri, sat

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries); // entries get objects with array

// for(const [key, {open, close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// };


// ------------ OPTIONAL CHAINING ----------------

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // this is complex way to check if its null

// with optional chaining
// console.log(restaurant.openingHours.mon?.open); // if monday exist return value, but if not returned undefined. this returned undefined now
// console.log(restaurant.openingHours?.mon?.open); // if monday and openinghours exist return value, but if not returned undefined. because there is no monday bro..

// Example
// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for (const day of days) {
//   console.log(day); // each element 
//   console.log([day]); // with array
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; // if we use ||, 0 will be falsy value so it will be undefined. but in nullish operator 0 is not falsy value :)
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods 
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// Arrays
// const users = [
//   {name: 'Jonas', email: 'hello@jonas.io'}
// ];

// console.log(users[0]?.name ?? 'User array empty');
// if(users.length > 0) console.log(users[0].name); else console.log('User array empty');



// ---------- LOOPING ARRAYS : THE FOR-OF LOOP ---------  

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu) console.log(item);
// we can still use break or continue keyword in for-of loop

// for(const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); // if item is an array, we can destruct it.
// }

// for(const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`); // destructed way
// }

// console.log([...menu.entries()]);
// entries has 2 element array in each menu element. in 2 indexes array, it has index number and name of element of menu




// ------------ LOGICAL ASSIGNMENT OPERATORS -------------

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20
//   numGuests: 0
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
// };

// ------------- LOGICAK ASSIGNMENT OPERATORS -----------

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // when numGuests is 0 then value will be 10 (because 0 is falsy value), so or assignment doesnt work in it
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10; // and now if numGuests is 0, then it returned 0, NOT 10
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'; // {name: 'Capri', numGuests: 20, owner: undefined}, because there is no owner property of rest1 so it return first falsy value. this version is false
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // {name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}, because both of true so returned last element

// AND assignment operator
// rest1.owner &&= '<ANONYMOUS>'; // this is true because if rest1 has owner property then set the value anonymous, but rest1 has no owner property. so nothings happen
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1); // {name: 'Capri', numGuests: 20}
// console.log(rest2); // {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}


// ---------- THE NULLISH COALESCING OPERATOR (??) ---------

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); 

// Nullish : null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);


// --------- SHORT CIRCUITING (|| AND &&) --------------

// console.log('--------OR--------');
// if  all the element is false, return last one. but if at least one element is true, return that one.
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 10 

// you can set default value if its null
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); // 10, if restaurant.numGuests is undefined

// console.log('--------AND--------');
// if  all the element is true, return last one. but if at least one element is false, return that one.
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // Jonas

// console.log('Hello' && 23 && null && 'jonas'); // null

// practical example
// if (restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// you can check if its null
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');







// ---------- REST PATTERN AND PARAMETERS ---------

// 1) Destructuring

// SPRED, because on RIGHT side of = (assignment operator)
// const arr = [1,2, ...[3,4]];

// REST, because on LEFT side of = 
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1, 2, [3, 4, 5]

// REST element must be a last element on array
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood); // from the main menu we just get the pizza and risotto, then from starter menu we all get them

// Objects
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays); // {thu: {...}, fri: {...}}

// 2) Functions
// const add = function(...numbers){
//   let sum = 0;
//   for(let i = 0; i <numbers.length; i++) sum += numbers[i];
//   console.log(sum)
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms'); // mushrooms, []


// -------- SPREAD OPERATOR --------

// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]]; // bad version
// console.log(badNewArr); // [1,2,7,8,9]

// const newArr = [1,2, ...arr]; // [1,2,7,8,9] - spread operator seperate each element of array - we created NEW array. we are NOT manipulating
// const newArr = [1,2, arr]; // [1,2, Array(3)]
// console.log(newArr); 

// console.log(...newArr); // 1, 2, 3, 7, 8, 9 - not array. if we need to each element individually, we should to use spread operator

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // ["Pizza", "Pasta", "Risotto", "Gnocci"]

// spread operator likes destructuring BUT spread operator takes all the element from the array and does NOT create a variable. we can only use it in the places where we would other ways right values seperated by commas

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of mainMenu

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: array, strings, maps, sets. NOT objects. we can use spread operator on iterables.
// const str = 'Jonas';
// const letters = [...str, " ", "S."]; // ["J", "o", "n", "a", "s", " ", "S."]
// console.log(...str); // J o n a s

// console.log(`${...str} Schmedtmann`); // we can not use like this way because string interpolation want to get expression that returns a value.

// Real-world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"),prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients); // instead of restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])

// spread operator works on objects even though objects are not iterable
// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name); // "Ristorante Roma"
// console.log(restaurant.name); // 'Classico Italiano' - actual object is not manipulated. 

// -------- DESTRUCTURING OBJECTS -------

// we destruct objects with curly brackets {}, because of we create object with them.

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1
// });

// Basic
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories); 

// Changing names
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags); // same 

// Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters); // menu will logged [], if we didnt this then menu is undefined

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14};

// {a, b} = obj; we cannot do this because Javascript wait for a code block but we use for object our curly brackets
// ({a, b} = obj); 
// console.log(a, b); // a: 23 b: 7

// Nested Objects
// const {fri} = openingHours; // clg(fri) =>  {open: 11, close: 23} 
// const {fri: {open, close}} = openingHours; // clg(open, close) => 11, 23
// const {fri: {open: o, close: c}} = openingHours; // clg(o, c) => 11, 23
// console.log(o, c);



// ----- DESTRUCTURING ARRAYS ---- 
//Destructing array is simply seperating variables of array (original array will not affected)

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // arr[0] = x, arr[1] = y, arr[2] = z

// const [first, second] = restaurant.categories; // Italian Pizzeria

// const [first, , third] = restaurant.categories; // Italian Vegetarian

// let [main, , secondary] = restaurant.categories; // Italian Vegetarian
// console.log(main, secondary);

// ---- Switcing variables without destructing: 
// const temp = main;
// main = secondary;
// secondary = temp;
 
// with destructuring:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// ------ Recieve 2 return values from a function
// const [starter, main] = restaurant.order(2, 0); // Garlic Bread Pizza

// ------ Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested; // 2 [5,6]
// const [i, ,[j,k]] = nested; // 2 5 6

// ------ Default Values
// const [p, q, r] = [8, 9]; // p = 8, q = 9, r = undefined;
// const [p = 1, q = 1, r = 1] = [8, 9]; // p = 8, q = 9, r = 1;
 

