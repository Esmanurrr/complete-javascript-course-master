/* let js = "amazing";

 console.log(40+8+23-10);

 console.log("Jonas");
 console.log(23);

 let firstName = "Matilda"
 console.log(firstName);
 console.log(firstName);
 console.log(firstName);

 //Variable name conventions

 let jonas_matilda = "JM" // dont use & in variable name
 let $function = 27; // dont use reserved words (for example : new, function...)
 let person = "jonas" // dont start with upper case
 let PI = 3.1415; // only constant variables can be upper case
 let myFirstJob = "programmer"
 let myCurrentJob = "teacher" // set your variables clear, not use job1, job2 vs
 */

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
