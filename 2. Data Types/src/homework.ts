export {};

type CurrencyType = "RSD" | "EUR";

interface OrderInterface {
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    zip: number,
    productName: string,
    amount: number,
    currency: CurrencyType

}
function addOrder(name: string, location: string, zip: number, productName: string, amount: number, currency: CurrencyType): OrderInterface{

    const splitName = name.split(" ");
    const splitLocation = location.split(", ");

    return {
        firstName: splitName[0],
        lastName: splitName[1],
        city: splitLocation[0],
        country: splitLocation[1],
        zip: zip,
        productName: productName,
        amount: amount,
        currency: currency
    }
}

console.log(addOrder('Aleksa Stankovic', 'Belgrade, Serbia', 78250, "Monitor", 3, 'EUR'));