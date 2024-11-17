'use strict';

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


const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 342523423
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 342523423){
        alert('Checked In!');
    } else {
        alert('Wrong Passport!');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// Javascript does not have passing by reference, Javascript only passing by value 
// We pass a reference to the function but we do not pass by a reference