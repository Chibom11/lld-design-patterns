class PaymentGatewayManager {

    private static instance: PaymentGatewayManager;

    private constructor() {
        console.log("Payment Gateway Manager Initialized.");
    }

    public static getInstance(): PaymentGatewayManager {

        if (!PaymentGatewayManager.instance) {
            PaymentGatewayManager.instance =
                new PaymentGatewayManager();
        }

        return PaymentGatewayManager.instance;
    }

    public processPayment(amount: number): void {
        console.log(
            `Processing payment of ₹${amount}`
        );
    }

}



const gateway1 =
    PaymentGatewayManager.getInstance();

const gateway2 =
    PaymentGatewayManager.getInstance();

gateway1.processPayment(500);

gateway2.processPayment(1200);

console.log(gateway1 === gateway2);