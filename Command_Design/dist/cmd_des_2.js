"use strict";
// ================= Command Interface =================
// ================= Receiver =================
class RideService {
    requestRide(passenger, srcLoc, destLoc) {
        console.log(`Requesting ride for ${passenger} from ${srcLoc} to ${destLoc}`);
    }
    cancelRide(passenger) {
        console.log(`Cancelling ride for ${passenger}`);
    }
}
// ================= Concrete Command - Request Ride =================
class RideRequestCommand {
    constructor(receiver, passenger, srcLoc, destLoc) {
        this.receiver = receiver;
        this.passenger = passenger;
        this.srcLoc = srcLoc;
        this.destLoc = destLoc;
    }
    execute() {
        this.receiver.requestRide(this.passenger, this.srcLoc, this.destLoc);
    }
}
// ================= Concrete Command - Cancel Ride =================
class CancelRideCommand {
    constructor(receiver, passenger) {
        this.receiver = receiver;
        this.passenger = passenger;
    }
    execute() {
        this.receiver.cancelRide(this.passenger);
    }
}
// ================= Invoker =================
class RideRequestInvoker {
    processRequest(command) {
        command.execute();
    }
}
// ================= Client =================
const rideService = new RideService();
const rideRequestInvoker = new RideRequestInvoker();
const request1 = new RideRequestCommand(rideService, "Shivam", "Delhi", "Noida");
const request2 = new RideRequestCommand(rideService, "Rahul", "Mumbai", "Pune");
const cancel1 = new CancelRideCommand(rideService, "Shivam");
rideRequestInvoker.processRequest(request1);
rideRequestInvoker.processRequest(request2);
rideRequestInvoker.processRequest(cancel1);
