'use strict';
// 1 - strict mod bazı şeyleri yapmamızı yasaklar.
// 2 - strict mod olmadan JS'in hata yaptığımızı bize bildirmeden sessizce başarısız olacağı durumları bizim için görünür hatalar oluşturur.

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; // when strict mode is close, we cant see the error on the console but there is an error
if (hasDriversLicense) console.log('I can drive'); 

// strict mode see the error of reserved word

// const interface = 'Audio'; 
// const private = 423;
// const if = 23;