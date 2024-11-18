'use strict';

// ----------- DEFAULT PARAMETERS ---------------

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000); // when we dont want to give argument of numPassengers

// ------------ HOW PASSING ARGUMENTS WORKS : VALUE VS. REFERENCE ------------

// const flight = 'LH234';
// const jonas = { // reference type.
//     name: 'Jonas Schmedtmann',
//     passport: 342523423
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999'; // copy of flight variable, because of primitive type. (e.g. number, boolean, null, undefined, symbol, bigint. They are stored as value in memory.  These values pass by value to a function)
//     passenger.name = 'Mr.' + passenger.name; // when an object pass to a function, memory address copied. so it is manipulated

//     if(passenger.passport === 342523423){
//         alert('Checked In!');
//     } else {
//         alert('Wrong Passport!');
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas); //  { name: 'Mr.Jonas Schmedtmann', passport: 342523423 }  jonas object is manipulated because it refers same memory object

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// Javascript does not have passing by reference, Javascript only passing by value 
// That is, when you send a variable to a function, a value is always sent, not the variable itself.
// In primitive types: 
// With primitive types, the value is copied directly.
// Therefore, if changes are made within the function, this change only affects the copied value, not the original variable.
// In reference types:
// With reference types, a copy of the address of the original data in memory is transferred.
// Therefore, changes made to an object or array have an effect on the original data. However, this is still considered pass by value, because what is sent is actually the value of the reference (the address itself).
// We pass a reference to the function but we do not pass by a reference

// ------------- FUNCTIONS ACCEPTING CALLBACK FUNCTIONS -------------

// Abstraction means hiding the details of complex operations to simplify them and make them reusable.
// It creates a reusable structure by making frequently used operations in the code more general. This way, we can work with a "higher level" mindset without focusing on unnecessary details.

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ... others].join(' ');
// };

//High-order function
// const transformer = function (str, fn){
//     console.log(`Original String : ${str}`);
//     console.log(`Transformed String : ${fn(str)}`);

//     console.log(`Transformed by : ${fn}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function (){
//     console.log('🖐️');
// };
// document.body.addEventListener('click', high5); // addEventListener provides abstraction; it does not know the details of the click, it just calls a callback function.
// ['Jonas', 'Martha', 'Adam'].forEach(high5); // forEach provides abstraction. It abstracts the operation on each element of an array, hiding the details.


// advantage 1 : callback functions make it easy to split up our code into more reusable and interconnected parts
// advantage 2 : callback functions allow us to create abstraction


// ----------------- FUNCTIONS RETURNING FUNCTIONS ------------------

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');



// ------------------- THE CALL AND APPLY METHODS ---------------

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book; // seperate function from lufthansa's book function

// does not work
// book(23, 'Sarah William'); // Uncaught TypeError: Cannot property 'airline' of undefined 

// Call Method 
// book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH239
// console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

// book.call(swiss, 583, 'Mary Cooper'); // Mary Cooper booked a seat on Swiss Air Lines flight LX583
// console.log(swiss);

// Apply Method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); // apply method should get an array as an argument
// console.log(swiss);

// book.call(swiss, ...flightData); // call method takes parameters individually when calling a function.


// ----------------- THE BIND METHOD -----------------

// bind not immediately call the function, instead it returns a new function where the this keyword is bound. So it's set to whatever value we pass into bind
// The bind method is used to manually specify the context (i.e. this) for a function.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Wiliams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this); // refers the element button (if we use just lufthansa.buyPlane in addEventListener)

    this.planes++;
    console.log(this.planes)
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // bind(lufthansa) binds the buyPlane function to the lufthansa object. That is, this will always be lufthansa, no matter what context it is called in.

// Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // first argument is for this keyword, so there is no this context in arrow function, that we use null as argument
// addVAT = value => value + value * 0.23

// console.log(addVAT(100));
// console.log(addVAT(23));

const addTax = function(rate){
    return value => {
        return value + value * rate;
    }
}

console.log(addTax(0.1)(23));