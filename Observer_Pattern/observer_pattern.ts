// ================= Observer Interface =================

interface Observer {
    update(order: Order): void;
}

// ================= Customer =================

class Customer implements Observer {

    constructor(private name: string) {}

    update(order: Order): void {
        console.log(
            `${this.name} notified: Order ${order.getId()} is ${order.getStatus()}`
        );
    }

}

// ================= Restaurant =================

class Restaurant implements Observer {

    constructor(private name: string) {}

    update(order: Order): void {
        console.log(
            `${this.name} preparing Order ${order.getId()} : ${order.getStatus()}`
        );
    }

}

// ================= Delivery Driver =================

class DeliveryDriver implements Observer {

    constructor(private name: string) {}

    update(order: Order): void {
        console.log(
            `${this.name} received update: ${order.getStatus()}`
        );
    }

}

// ================= Call Center =================

class CallCenter implements Observer {

    update(order: Order): void {
        console.log(
            `Call Center: Order ${order.getId()} is ${order.getStatus()}`
        );
    }

}

// ================= Subject =================

class Order {

    private observers: Observer[] = [];

    constructor(
        private id: number,
        private status: string = "Order Placed"
    ) {}

    getId(): number {
        return this.id;
    }

    getStatus(): string {
        return this.status;
    }

    setStatus(status: string): void {

        this.status = status;

        this.notifyObservers();

    }

    attach(observer: Observer): void {

        this.observers.push(observer);

    }

    detach(observer: Observer): void {

        this.observers =
            this.observers.filter(o => o !== observer);

    }

    notifyObservers(): void {

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