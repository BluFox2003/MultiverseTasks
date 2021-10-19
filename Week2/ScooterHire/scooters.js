class Scooter {
  static scooters = [];
  constructor(scooterID) {
    this.scooterID = scooterID;
    this.constructor.scooters.push(this);
  }
}
const S1 = new Scooter("ABC123");

console.log(Scooter.scooters);
module.exports = { Scooter };
