//const {Aircraft} = require("./Aircraft")

class Airport {
  static airports = [];
  constructor(name, country, code) {
    this.name = name;
    this.country = country;
    this.code = code;
    this.constructor.airports.push(this);
    //this.docked = []
  }
}

const LBA = new Airport("Leeds Bradford Airport", "England", "EGNM");
//console.log(LBA)
//console.log(Airport.airports)
module.exports = { Airport };
