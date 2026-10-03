//In a unidirectional association, only one class is aware of or holds a reference to the other class. The referenced class has no knowledge of who is referencing it.

//Example: An Order object uses a PaymentGateway to process transactions, but the PaymentGateway doesn't keep track of any orders. The order knows about the gateway. The gateway doesn't know about the order.

class PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}

class Order {
    private gateway: PaymentGateway;

    constructor(gateway: PaymentGateway) {
        this.gateway = gateway;
    }

    checkout(): void {
        this.gateway.processPayment(100.0);
    }
}