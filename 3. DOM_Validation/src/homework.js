"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders = [];
function addOrder(name, location, zip, productName, amount, currency) {
    const splitName = name.split(" ");
    const splitLocation = location.split(", ");
    if (splitName.length > 2 || splitLocation.length > 2) {
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
    };
}
const singleOrder = addOrder('Aleksa Stankovic', 'Belgrade, Serbia', 78250, "Monitor", 3, 'EUR');
const secondOrder = addOrder('Aleksa Aleksic', 'Belgrade, Serbia', 78250, "Kompjuter", 3, 'EUR');
orders.push(singleOrder, secondOrder);
function listOrders(orderList) {
    const ordersDiv = document.getElementById('orderList');
    ordersDiv.innerHTML = "";
    orderList.forEach(function (item, key) {
        const singleOrderElement = document.createElement('div');
        const singleOrderTitle = document.createElement('h1');
        singleOrderTitle.textContent = item.firstName + " " + item.lastName;
        const singleOrderFirstParagraph = document.createElement('p');
        singleOrderFirstParagraph.textContent = item.city + " " + item.country;
        const singleOrderSecondParagraph = document.createElement('p');
        singleOrderSecondParagraph.textContent = item.productName;
        const singleOrderSpan = document.createElement('span');
        singleOrderSpan.textContent = `${item.amount}`;
        singleOrderElement.append(singleOrderTitle, singleOrderFirstParagraph, singleOrderSecondParagraph, singleOrderSpan);
        ordersDiv.append(singleOrderElement);
    });
}
//listOrders(orders);
function search(searchTerm, orderList) {
    const lowerTerm = searchTerm.toLowerCase();
    const filteredOrders = orderList.filter(order => {
        if (order.productName.toLowerCase() === lowerTerm) {
            return order;
        }
    });
    listOrders(filteredOrders);
}
search("Monitor", orders);
