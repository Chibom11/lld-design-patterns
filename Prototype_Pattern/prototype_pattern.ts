abstract class ProductPrototype {

    abstract clone(): ProductPrototype;

    abstract display(): void;

}



class Product extends ProductPrototype {

    constructor(
        private name: string,
        private price: number
    ) {
        super();
    }

    clone(): ProductPrototype {

        return new Product(this.name, this.price);

    }

    display(): void {

        console.log(`Product: ${this.name}`);
        console.log(`Price: ₹${this.price}`);

    }

}



// Original Products

const product1: ProductPrototype =
    new Product("Laptop", 99999);

const product2: ProductPrototype =
    new Product("Smartphone", 49999);

// Clone Products

const newProduct1: ProductPrototype =
    product1.clone();

const newProduct2: ProductPrototype =
    product2.clone();

console.log("Original Products");

product1.display();
product2.display();

console.log("\nCloned Products");

newProduct1.display();
newProduct2.display();


