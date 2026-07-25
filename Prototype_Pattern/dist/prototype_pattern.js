"use strict";
class ProductPrototype {
}
class Product extends ProductPrototype {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
    clone() {
        return new Product(this.name, this.price);
    }
    display() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ₹${this.price}`);
    }
}
// Original Products
const product1 = new Product("Laptop", 99999);
const product2 = new Product("Smartphone", 49999);
// Clone Products
const newProduct1 = product1.clone();
const newProduct2 = product2.clone();
console.log("Original Products");
product1.display();
product2.display();
console.log("\nCloned Products");
newProduct1.display();
newProduct2.display();
