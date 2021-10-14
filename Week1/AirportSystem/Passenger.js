const {Bag} = require("./Bag")

class Passenger {
    constructor(name, flightNumber, seatNumber) {
        this.name = name
        this.flightNumber = flightNumber
        this.seatNumber = seatNumber
        this.bags = []
        this.flight = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
    addFlight(Plane) {
        this.flight.push(Plane)
    }
}

module.exports = {Passenger}