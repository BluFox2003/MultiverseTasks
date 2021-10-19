const { Scooter } = require("./scooters.js");
const { User } = require("./users");
const { chargingStation } = require("./chargingStations");
const { TestWatcher } = require("@jest/core");

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
});
