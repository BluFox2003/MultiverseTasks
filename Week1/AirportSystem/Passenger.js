const {Bag} = require("./Bag")

class Passenger {
    constructor(name, flightNumber, seatNumber) {
        this.name = name
        this.flightNumber = flightNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = {Passenger}