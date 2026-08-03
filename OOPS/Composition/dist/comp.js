"use strict";
class LineItems {
    constructor(productName, quantity, unitPrice) {
        this.productName = productName;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
    getProductName() {
        return this.productName;
    }
    getSubTotal() {
        return (this.quantity) * (this.unitPrice);
    }
}
class Order {
    constructor(orderId) {
        this.lineItems = [];
        this.orderId = orderId;
        this.lineItems = [];
    }
    addItems(productName, quantity, unitPrice) {
        const li = new LineItems(productName, quantity, unitPrice);
        this.lineItems.push(li);
    }
    removeItem(lineItem) {
        this.lineItems.filter(e => e !== lineItem);
    }
    displayItems() {
        for (let l of this.lineItems) {
            console.log(`ProductName: ${l.getProductName()}, TotalPrice:${l.getSubTotal()}`);
        }
    }
}
const o1 = new Order(1);
o1.addItems("Laptop", 51, 50000);
o1.addItems("Phones", 30, 40000);
o1.addItems("Ipads", 100, 100000);
o1.displayItems();
