const { Aircraft } = require("./Aircraft")

class Crew {
    constructor(name, role, staffID){
        this.name = name
        this.role = role
        this.staffID = staffID
        this.aircraft = []
    }
    addAircraft(Plane) {
        this.aircraft.push(Plane)
    }
}

const crew1 = new Crew("Maverick Flyman", "Pilot", "ABC123")
const C1Plane = new Aircraft("F-14 Tomcat", "AB14", 2, "Top Gun")
crew1.addAircraft(C1Plane)
console.log(crew1)

module.exports = {Crew}