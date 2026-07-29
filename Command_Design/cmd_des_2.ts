// ================= Command Interface =================

interface Command {
    execute(): void;
}

// ================= Receiver =================

class RideService {

    requestRide(passenger: string, srcLoc: string, destLoc: string): void {
        console.log(
            `Requesting ride for ${passenger} from ${srcLoc} to ${destLoc}`
        );
    }

    cancelRide(passenger: string): void {
        console.log(`Cancelling ride for ${passenger}`);
    }

}

// ================= Concrete Command - Request Ride =================

class RideRequestCommand implements Command {

    constructor(
        private receiver: RideService,
        private passenger: string,
        private srcLoc: string,
        private destLoc: string
    ) {}

    execute(): void {
        this.receiver.requestRide(
            this.passenger,
            this.srcLoc,
            this.destLoc
        );
    }

}

// ================= Concrete Command - Cancel Ride =================

class CancelRideCommand implements Command {

    constructor(
        private receiver: RideService,
        private passenger: string
    ) {}

    execute(): void {
        this.receiver.cancelRide(this.passenger);
    }

}

// ================= Invoker =================

class RideRequestInvoker {

    processRequest(command: Command): void {
        command.execute();
    }

}

// ================= Client =================

const rideService = new RideService();

const rideRequestInvoker = new RideRequestInvoker();

const request1 = new RideRequestCommand(
    rideService,
    "Shivam",
    "Delhi",
    "Noida"
);

const request2 = new RideRequestCommand(
    rideService,
    "Rahul",
    "Mumbai",
    "Pune"
);

const cancel1 = new CancelRideCommand(
    rideService,
    "Shivam"
);

rideRequestInvoker.processRequest(request1);
rideRequestInvoker.processRequest(request2);
rideRequestInvoker.processRequest(cancel1);