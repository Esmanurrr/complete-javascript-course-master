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

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ... others].join(' ');
};

//High-order function
const transformer = function (str, fn){
    console.log(`Original String : ${str}`);
    console.log(`Transformed String : ${fn(str)}`);

    console.log(`Transformed by : ${fn}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function (){
    console.log('🖐️');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


// advantage 1 : callback functions make it easy to split up or code into more reusable and interconnected parts
// advantage 2 : callback functions allow us to create abstraction