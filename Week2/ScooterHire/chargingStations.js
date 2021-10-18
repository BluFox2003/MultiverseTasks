class chargingStation {
  static chargingStations = [];
  constructor(CSID) {
    this.CSID = CSID;
    this.scooters = [];
    this.scooterAmount = this.scooters.length;
  }
}

module.exports = { chargingStation };
