export {};
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
function sayHello(message: any): void{
    console.log(message);
    return;
}
function sum(x: number, y: number): number{
    return(x + y);
}

sayHello(23);
console.log(sum(15,6));

function addRide(location: string, length: number): string{
    return `Finished the ride from ${location} and it took ${length} kilometers.`
}

console.log(addRide('Banja Luka', 18));

const userInfo: [string, number, boolean] = ["Lexa", 24, true];

const city: [number, number, string] = [40.7128, -74.0060, 'New York City'];

type LocationType = [number, number, string];
const locations: LocationType[] = [
    [40.7128, -74.0060, 'New York City'],
    [40.7128, -74.0060, 'Belgrade']
];