const {Airport} = require("./Airport")

class Aircraft {
    constructor(model, registration, capacity, company){
        this.model = model
        this.registration = registration
        this.capacity = capacity
        this.company = company
        this.departure = []
        this.arrival = []
    }
    addDeparture(Depart) {
        this.departure.push(Depart)
    }
    addArrival(Arrive) {
        this.arrival.push(Arrive)
    }
}

P1 = new Aircraft("Boeing 737", "73G", 188, "British Airways")
const P1Depart = new Airport("London Heathrow", "England", "LHR")
const P1Arrival = new Airport("Leeds Bradford Airport", "England", "EGNM")
P1.addDeparture(P1Depart)
P1.addArrival(P1Arrival)
console.log(P1)

module.exports = {Aircraft}