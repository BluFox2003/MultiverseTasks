class Crew {
    constructor(name, role, staffID){
        this.name = name
        this.role = role
        this.staffID = staffID
    }

}

const crew1 = new Crew("Maverick Flyman", "Pilot", "ABC123")
console.log(crew1)

module.exports = {Crew}