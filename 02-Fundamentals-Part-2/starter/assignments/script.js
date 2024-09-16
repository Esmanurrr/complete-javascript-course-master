'use strict';

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity} \n`;
}

const turkey = describeCountry("Turkey", 85, "Ankara");
const korea = describeCountry("South Korea", 51, "Seoul");
const norvey = describeCountry("Norvey", 5, "Oslo");

console.log(turkey, korea, norvey);