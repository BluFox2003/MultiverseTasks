const { Bag } = require("./Bag");

class Person {
  constructor(name, flightNumber) {
    this.name = name;
    this.flightNumber = flightNumber;
    this.bags = [];
    this.flight = [];
  }
  addBag(bag) {
    this.bags.push(bag);
  }
  addFlight(Plane) {
    this.flight.push(Plane);
  }
}

module.exports = { Person };
