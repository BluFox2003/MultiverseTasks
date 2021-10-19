const { Scooter } = require("./scooters");
class chargingStation {
  static chargingStations = [];
  constructor(CSID) {
    this.CSID = CSID;
    this.scooters = [];
    this.scooters.push(Scooter.scooters);
    this.scooterAmount = this.scooters[0].length;
  }
}

CS1 = new chargingStation("CS1");

console.log(CS1.scooterAmount);

module.exports = { chargingStation };
