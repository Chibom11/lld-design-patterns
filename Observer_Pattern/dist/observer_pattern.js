"use strict";
// ================= Observer Interface =================
// ================= Customer =================
class Customer {
    constructor(name) {
        this.name = name;
    }
    update(order) {
        console.log(`${this.name} notified: Order ${order.getId()} is ${order.getStatus()}`);
    }
}
// ================= Restaurant =================
class Restaurant {
    constructor(name) {
        this.name = name;
    }
    update(order) {
        console.log(`${this.name} preparing Order ${order.getId()} : ${order.getStatus()}`);
    }
}
// ================= Delivery Driver =================
class DeliveryDriver {
    constructor(name) {
        this.name = name;
    }
    update(order) {
        console.log(`${this.name} received update: ${order.getStatus()}`);
    }
}
// ================= Call Center =================
class CallCenter {
    update(order) {
        console.log(`Call Center: Order ${order.getId()} is ${order.getStatus()}`);
    }
}
// ================= Subject =================
class Order {
    constructor(id, status = "Order Placed") {
        this.id = id;
        this.status = status;
        this.observers = [];
    }
    getId() {
        return this.id;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
        this.notifyObservers();
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers =
            this.observers.filter(o => o !== observer);
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
// ================= Main =================
const order = new Order(101);
const customer = new Customer("Shivam");
const restaurant = new Restaurant("Burger King");
const driver = new DeliveryDriver("Rahul");
const callCenter = new CallCenter();
order.attach(customer);
order.attach(restaurant);
order.attach(driver);
order.attach(callCenter);
console.log("====== Out For Delivery ======\n");
order.setStatus("Out For Delivery");
console.log("\n==============================\n");
order.detach(callCenter);
console.log("====== Delivered ======\n");
order.setStatus("Delivered");
