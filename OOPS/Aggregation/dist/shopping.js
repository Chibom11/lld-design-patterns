"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getProductName() {
        return this.name;
    }
    geetProductPrice() {
        return this.price;
    }
}
class Catalog {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    findByName(prdname) {
        for (const p of this.products) {
            if (String(p.getProductName) === prdname) {
                return p;
            }
        }
        return undefined;
    }
    getProductCount() {
        return Number(this.products.length);
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    clearCart() {
        this.items = [];
    }
    getTotal() {
        let a = 0;
        for (let i of this.items) {
            a = a + i.geetProductPrice();
        }
        return a;
    }
    getAllItems() {
        for (let i of this.items) {
            console.log(`Prod name is ${i.getProductName()} and price is ${i.geetProductPrice()}`);
        }
    }
}
class Customer {
    constructor(name, cart) {
        this.name = name;
        this.cart = cart;
    }
    checkout() {
        console.log("Total is ", this.cart.getTotal());
        console.log(this.cart.clearCart());
    }
    getName() { return this.name; }
    getCart() { return this.cart; }
}
const p1 = new Product("Dishwasher", 34);
const p2 = new Product("Soap", 33);
const p3 = new Product("Laptop", 34000);
const cart1 = new Cart();
const cust1 = new Customer("Shivam", cart1);
cart1.addItem(p1);
cart1.addItem(p3);
console.log("Cart total is :", cart1.getTotal());
cart1.getAllItems();
