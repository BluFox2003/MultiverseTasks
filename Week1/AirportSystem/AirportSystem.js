class Bag {
    constructor(weight) {
        
        if (weight == undefined){
            throw new Error("Bag must have a weight")
        }
        else {
            this.weight = weight;
        }
    };
}

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

const P1 = new Passenger("Joe", 42069, "16B")
const P1BagA = new Bag(12)
const P1BagB = new Bag(32)
P1.addBag(P1BagA)
P1.addBag(P1BagB)
console.log(P1.name)


module.exports = {Passenger, Bag, P1}