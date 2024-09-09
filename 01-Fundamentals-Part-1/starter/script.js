/* let js = "amazing";

 console.log(40+8+23-10);

 console.log("Jonas");
 console.log(23);

 let firstName = "Matilda"
 console.log(firstName);
 console.log(firstName);
 console.log(firstName);

 ---- Variable name conventions -----

 let jonas_matilda = "JM" // dont use & in variable name
 let $function = 27; // dont use reserved words (for example : new, function...)
 let person = "jonas" // dont start with upper case
 let PI = 3.1415; // only constant variables can be upper case
 let myFirstJob = "programmer"
 let myCurrentJob = "teacher" // set your variables clear, not use job1, job2 vs
 
 ---- Data Types -----

 let javascriptIsFun = true;
 console.log(javascriptIsFun);

 console.log(typeof true); // boolean
 console.log(typeof javascriptIsFun); // boolean
 console.log(typeof 23); // number
 console.log(typeof "Jonas"); // string

 javascriptIsFun = "Yes";
 console.log(typeof javascriptIsFun); // string

 let year;
 console.log(year); // undefined
 console.log(typeof year);  // undefined -- undefined is different from other types because it can be both value and type of variable

 year = 1991;
 console.log(typeof year); // number

 console.log(typeof null); // this return -> object but it is a bug. It should return 'null'. like undefined.

 ---- let, const and var ----

 let age = 30;
 age = 31; // we can reassigning a value to a variable. mutable.

 const birthYear = 1991;
 birthYear = 1990; // Uncaught TypeError: Assignment to constant varible. We can NOT reassign. inmutable.

 const job; // Uncaught SyntaxError: Missing initializer in const declaration. we can NOT use without assigning a value.

 var job = 'programmer';
 job = 'teacher';

 ---- Math Operators ----

 const now = 2037;
 const ageJonas = now - 1991;
 const ageSarah = now - 2018;
 console.log(ageJonas, ageSarah);

 console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

 const firstName = 'Jonas';
 const lastName = 'Schmedtmann';
 console.log( ${firstName} ${lastName} );

 ---- Assignment Operators ----

 let x = 10 + 5; // = is assignment operator 
 x+= 10; // x = x + 10
 x *= 4; // x = x * 4 
 x++; // x = x + 1
 x--; // x = x - 1

 --- Comparison operators ----
 console.log(ageJonas > ageSarah); // >, <, >=, <=
 console.log(ageSarah >= 18);

 const isFullAge = ageSarah >= 18;

 console.log(now - 1991 > now - 2018); // firstly math operators then comparison operators will run

 ---- Operator Presedence ----

 let x,y;
 x = y = 25 - 10 - 5;
 console.log(x,y) // 10 10 , firstly the math then assign to variables

 const averageAge = (ageJonas + ageSarah) / 2; // if we dont use parantesis then result will be wrong because of presedence

 ----- Strings and Template Literals ----- 

 const firstName = 'Esmanur';
 const job = 'engineer';
 const birthYear = 2000;
 const year = 2024;

 const esma = `I'm  ${firstName} a ${year - birthYear} year old ${job} `;
 console.log(esma);

console.log('String with \n\
    multiple \n\
    lines');

console.log(`String
    multiple
    lines with backtick`);



const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sarah can start driving license 👍🚗'); // windows + . hepsine aynı anda bas
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} year :) `); // windows + . hepsine aynı anda bas
}

const birthYear = 1991;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

----- Type Conversion -----

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18); // 2009
console.log(Number('Jonas')); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // 23 (but string), 23


---- Type Coercion ---- 


console.log(' I am ' + 23 + ' years old '); //plus operation makes 23 to string
console.log('23' - '10' - 3); // return 10
console.log('23' + '10' + 3); // return 23103
console.log('23' * '2'); // return 46
console.log('23' / '2'); // return 11.5

--- Excercise ---

let n = '1' + 1; //11
n = n - 1;
console.log(n); // 10

let a = 2 + 3 + 4 + '5';
console.log(a); // 95

let b = '10' - '4' - '3' - 2 + '5';
console.log(b); // 1+5 => 15



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false


const money = 0;
if(money){ // false
    console.log("Don't spend it all ");
}else { // returned this
    console.log("You should get a job");
}

let height;
if(height){ // this is false because undefined is falsy value
    console.log('YAY Height is defined');
} else { // returned this
    console.log('Height is undefined')
}

*/