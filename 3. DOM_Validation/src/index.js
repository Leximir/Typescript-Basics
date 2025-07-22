"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Primitive Types :
 *  - Number
 *  - String
 *  - Boolean
 *  - Bigint
 *  - Symbol
 *  - Null & undefined
 *
 * Object Types:
 *  - Objects
 *  - Arrays
 *  - Tuples [string, number]
 *  - Enum
 *
 * Special Types:
 *  - Any (Iskljucuje provjeru tipa)
 *  - Unknown
 *
 * Functions:
 *  - Void (neka funkcija ne vraca nista - tacnije nema return)
 *  - Never (Kod koda koji se nece izvrsiti)
 *
 * Advanced types:
 *  - Union types: string|number
 *  - Intersection types
 *  - Literal types
 *  - Interface
 * */
// Void - ova funkcija ne vraca nikakav odgovor
// Void - funkcija koja nema return ili ako je return prazan
function sayHello(message) {
    console.log(message);
    return;
}
function sum(x, y) {
    return (x + y);
}
sayHello(23);
console.log(sum(15, 6));
function addRide(location, length) {
    return `Finished the ride from ${location} and it took ${length} kilometers.`;
}
console.log(addRide('Banja Luka', 18));
const userInfo = ["Lexa", 24, true];
const city = [40.7128, -74.0060, 'New York City'];
const locations = [
    [40.7128, -74.0060, 'New York City'],
    [40.7128, -74.0060, 'Belgrade']
];
