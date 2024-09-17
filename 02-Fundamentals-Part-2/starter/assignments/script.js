'use strict';

// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity} \n`;
// }

// const turkey = describeCountry("Turkey", 85, "Ankara");
// const korea = describeCountry("South Korea", 51, "Seoul");
// const norvey = describeCountry("Norvey", 5, "Oslo");

// console.log(turkey, korea, norvey);

function percentageOfWorld1(population){
    const worldPop = 7900;
    return ((population / worldPop) * 100).toFixed(1);
}

percentageOfWorld1(85);
percentageOfWorld1(5);
percentageOfWorld1(1441);


const percentageOfWorld2 = function(population){
    const worldPop = 7900;
    return ((population / worldPop) * 100).toFixed(1);
}

const turkey = percentageOfWorld2(85);
const norvey = percentageOfWorld2(5);
const china = percentageOfWorld2(1441);


console.log(turkey, norvey, china);