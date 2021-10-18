class Scooter {
  static scooters = [];
  constructor(scooterID) {
    this.scooterID = scooterID;
    this.constructor.scooters.push(this);
  }
}

module.exports = { Scooter };
