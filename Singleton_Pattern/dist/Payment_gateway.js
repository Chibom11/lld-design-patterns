"use strict";
class PaymentGatewayManager {
    constructor() {
        console.log("Payment Gateway Manager Initialized.");
    }
    static getInstance() {
        if (!PaymentGatewayManager.instance) {
            PaymentGatewayManager.instance =
                new PaymentGatewayManager();
        }
        return PaymentGatewayManager.instance;
    }
    processPayment(amount) {
        console.log(`Processing payment of ₹${amount}`);
    }
}
const gateway1 = PaymentGatewayManager.getInstance();
const gateway2 = PaymentGatewayManager.getInstance();
gateway1.processPayment(500);
gateway2.processPayment(1200);
console.log(gateway1 === gateway2);
