const { Scooter } = require("./scooters");
class chargingStation {
  //static chargingStations = [];
  constructor(CSID) {
    this.CSID = CSID;
    this.scooters = Scooter.scooters;
    //this.scooters.push(Scooter.scooters);
    this.scooterAmount = this.scooters.length;
    //this.constructor.chargingStations.push(this);
  }
  rentScooter() {
    this.rentedScooter = this.scooters.shift();
    return this.rentedScooter;
  }
  returnScooter() {
    this.scooters.push(this.rentedScooter);
    this.rentedScooter = "";
  }
}

//const CS1 = new chargingStation("CS1");

//console.log(CS1.scooterAmount);
// console.log(CS1.rentScooter());
// console.log(CS1.scooters);
// CS1.returnScooter();
// console.log(CS1.scooters);
// console.log(CS1.rentedScooter);

module.exports = { chargingStation };
