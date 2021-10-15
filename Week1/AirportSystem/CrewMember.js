const { Aircraft } = require("./Aircraft");
const { Person } = require("./Person");

class Crew extends Person {
  constructor(name, role, staffID, flightNumber) {
    super(name, flightNumber);
    this.role = role;
    this.staffID = staffID;
  }
}

const crew1 = new Crew("Maverick Flyman", "Pilot", "ABC123", 123);
const C1Plane = new Aircraft("F-14 Tomcat", "AB14", 2, "Top Gun");
crew1.addFlight(C1Plane);
console.log(crew1);

module.exports = { Crew };

//test
