'use strict';

// calcAge is in global scope
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // console.log(firstName); // thanks to global scope we can use there

    function printAge (){
        let output = ` ${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        // block scope
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';
            console.log("in if statement ", output) // NEW OUTPUT

            const str = `Oh, and you're a millenial, ${firstName}` // firstname is steven because it firstly look up the own scope
            console.log(str);

            function add(a,b) { // functions are block scope
                return a + b;
            }

        }
        // console.log(str); // referenceError (only const and let are block scope)
        console.log(millenial); // logged true (before es6 - ignore the block, var is function scope)
        // add(2,3); // referenceError (because of block scope)
        console.log("out of if statement ", output); // NEW OUTPUT
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);