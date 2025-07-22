export {};

const orders: OrderInterface[] = [];

type CurrencyType = "RSD" | "EUR";
type NameFormat = `${string} ${string}`;

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
function addOrder(
    name: NameFormat, location: string, zip: number,
    productName: string, amount: number, currency: CurrencyType):
    OrderInterface | never{

    const splitName = name.split(" ");
    const splitLocation = location.split(", ");

    if(splitName.length > 2 || splitLocation.length > 2){
        throw new Error("Name or location exceeds limits of 2");
    }

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

const singleOrder = addOrder('Aleksa Stankovic', 'Belgrade, Serbia', 78250, "Monitor", 3, 'EUR');
const secondOrder = addOrder('Aleksa Aleksic', 'Belgrade, Serbia', 78250, "Kompjuter", 3, 'EUR');
orders.push(singleOrder, secondOrder);

function listOrders(orderList: OrderInterface[]): void{

    const ordersDiv: HTMLElement = document.getElementById('orderList');
    ordersDiv.innerHTML = "";

    orderList.forEach(function(item, key){

        const singleOrderElement: HTMLDivElement = document.createElement('div');
        const singleOrderTitle: HTMLHeadElement = document.createElement('h1');
        singleOrderTitle.textContent = item.firstName + " " + item.lastName;

        const singleOrderFirstParagraph: HTMLParagraphElement = document.createElement('p');
        singleOrderFirstParagraph.textContent = item.city + " " + item.country;

        const singleOrderSecondParagraph: HTMLParagraphElement = document.createElement('p');
        singleOrderSecondParagraph.textContent = item.productName;

        const singleOrderSpan: HTMLSpanElement = document.createElement('span');
        singleOrderSpan.textContent = `${item.amount}`;

        singleOrderElement.append(singleOrderTitle, singleOrderFirstParagraph, singleOrderSecondParagraph, singleOrderSpan);
        ordersDiv.append(singleOrderElement);

    });
}

//listOrders(orders);

function search(searchTerm: string, orderList: OrderInterface[]): void{

    const lowerTerm = searchTerm.toLowerCase();

    const filteredOrders = orderList.filter(order => {
        if(order.productName.toLowerCase() === lowerTerm){
            return order;
        }
    });

    listOrders(filteredOrders);

}

search("Monitor", orders);