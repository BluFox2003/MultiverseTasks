class Scooter {
  static scooters = [];
  constructor(scooterID) {
    this.scooterID = scooterID;
    this.constructor.scooters.push(this);
  }
}
const S1 = new Scooter("S1");
const S2 = new Scooter("S2");
const S3 = new Scooter("S3");
const S4 = new Scooter("S4");

console.log(Scooter.scooters);
module.exports = { Scooter };
