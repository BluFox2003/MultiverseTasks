const { Airport } = require("./Airport");

class Aircraft {
  static planes = [];
  constructor(model, registration, capacity, company) {
    this.model = model;
    this.registration = registration;
    this.capacity = capacity;
    this.company = company;
    this.departure = [];
    this.arrival = [];
    this.constructor.planes.push(this);
  }
  addDeparture(Depart) {
    this.departure.push(Depart);
  }
  addArrival(Arrive) {
    this.arrival.push(Arrive);
  }
  static flyPlane(plane) {
    return (
      plane.company +
      " " +
      plane.model +
      " is flying from " +
      plane.departure[0].name +
      " to " +
      plane.arrival[0].name
    );
  }
}

P1 = new Aircraft("Boeing 737", "73G", 188, "British Airways");
P2 = new Aircraft("Boeing F/A-18", "ABC12", 2, "US Navy");
const P1Depart = new Airport("London Heathrow", "England", "LHR");
const P1Arrival = new Airport("Leeds Bradford Airport", "England", "EGNM");
const P2Depart = new Airport("London Heathrow", "England", "LHR");
const P2Arrival = new Airport("Leeds Bradford Airport", "England", "EGNM");
P1.addDeparture(P1Depart);
P1.addArrival(P1Arrival);
P2.addDeparture(P2Depart);
P2.addArrival(P2Arrival);

//Aircraft.flyPlane(Aircraft.planes[1])

//console.log(Aircraft.flyPlane(Aircraft.planes[1]));

module.exports = { Aircraft };
