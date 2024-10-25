'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery : function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){ // we can also just use 'obj' as an argument
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta : function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient); // mushrooms
    console.log(otherIngredients); // ['onion', 'olives', 'spinach']
  }

};

// ------------ LOGICAL ASSIGNMENT OPERATORS -------------

const rest1 = {
  name: 'Capri',
  // numGuests: 20
  numGuests: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};


// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // when numGuests is 0 then value will be 10 (because 0 is falsy value), so or assignment doesnt work in it
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10; // and now if numGuests is 0, then it returned 0, NOT 10
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'; // {name: 'Capri', numGuests: 20, owner: undefined}, because there is no owner property of rest1 so it return first falsy value. this version is false
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // {name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}, because both of true so returned last element

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>'; // this is true because if rest1 has owner property then set the value anonymous, but rest1 has no owner property. so nothings happen
rest2.owner &&= '<ANONYMOUS>';



console.log(rest1); // {name: 'Capri', numGuests: 20}
console.log(rest2); // {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}



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
 

