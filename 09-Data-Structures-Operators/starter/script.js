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

  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
};

// Destructing array is simply seperating variables of array (original array will not affected)

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // arr[0] = x, arr[1] = y, arr[2] = z

// const [first, second] = restaurant.categories; // Italian Pizzeria

// const [first, , third] = restaurant.categories; // Italian Vegetarian

// let [main, , secondary] = restaurant.categories; // Italian Vegetarian
// console.log(main, secondary);

// ---- Switcing variables without destructing: 
// const temp = main;
// main = secondary;
// secondary = temp;
 
// with destructing:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, main] = restaurant.order(2, 0); // Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested; // 2 [5,6]
const [i, ,[j,k]] = nested; // 2 5 6

// Default Values
// const [p, q, r] = [8, 9]; // p = 8, q = 9, r = undefined;
const [p = 1, q = 1, r = 1] = [8, 9]; // p = 8, q = 9, r = 1;


