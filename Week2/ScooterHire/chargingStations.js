const { Scooter } = require("./scooters");
class chargingStation {
  //static chargingStations = [];
  constructor(CSID) {
    this.CSID = CSID;
    this.scooters = Scooter.scooters;
    this.scooterAmount = this.scooters.length;
    //this.constructor.chargingStations.push(this);
  }
  rentScooter() {
    this.rentedScooter = this.scooters.shift();
    return this.rentedScooter;
  }
  async chargeScooter() {
    console.log("Charging " + this.rentedScooter.scooterID);
    await new Promise((resolve) => setTimeout(resolve, 20000));
    console.log("Scooter charged and ready to use :)");
  }
  returnScooter() {
    this.chargeScooter();
    console.log(
      "\n Thank you for using the scooters, your account has been charged £15 \n "
    );
    this.scooters.push(this.rentedScooter);
    this.rentedScooter = "";
  }
}

const CS1 = new chargingStation("CS1");

// console.log(CS1.scooters);
//rentScooter();
// console.log(CS1.scooters);
// console.log(CS1.rentedScooter);

module.exports = { chargingStation };
