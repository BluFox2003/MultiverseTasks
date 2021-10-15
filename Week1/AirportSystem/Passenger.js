const {Person} = require("./Person")
const {Aircraft} = require("./Aircraft")
const {Bag} = require("./Bag")

class Passenger extends Person{
    constructor(name, seatNumber, flightNumber) {
        super(name, flightNumber)
        this.seatNumber = seatNumber
}
}

const Passenger1 = new Passenger("Lena Oxton", "13A", 123)
const P1Bag = new Bag(25)
const P1Flight = Aircraft.planes[1]
Passenger1.addBag(P1Bag)
Passenger1.addFlight(P1Flight)
console.log(Passenger1)
module.exports = {Passenger}