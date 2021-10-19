const { Scooter } = require("./scooters.js");
const { User } = require("./users");
const { chargingStation } = require("./chargingStations");

describe("UserTests", () => {
  beforeAll(() => {
    User1 = new User("Tim", 42, "Password123");
    User2 = new User("Joe", 15, "12345");
  });
  test("Users age should return as a number", () => {
    expect(typeof User1.age).toBe("number");
  });
  test("If the users age is 18 or more then isUser18 should return true", () => {
    expect(User.isUser18(User1)).toBe(true);
  });
  test("If the user is less than 18 then isUser18 should return false", () => {
    expect(User.isUser18(User2)).toBe(false);
  });
  test("Should return the users name as Joe", () => {
    expect(User2.name).toBe("Joe");
  });
  test("Should return the users password as a string", () => {
    expect(typeof User1.password).toBe("string");
  });
});

describe("ChargingStationTests", () => {
  test("Charging station scooter amount should return a number", () => {
    expect(typeof CS1.scooterAmount).toBe("number");
  });
  test("Charging station scooters should return an array", () => {
    expect(typeof CS1.scooters).toBe("object");
  });
  test("Charging station ID should be CS1", () => {
    expect(CS1.CSID).toBe("CS1");
  });
});

describe("ScooterTests", () => {
  test("ScooterID should be a string", () => {
    expect(typeof S1.scooterID).toBe("string");
  });
});
