const {Passenger, Bag} = require("./AirportSystem")

describe("AirportTest", () => {
    test("Should return if Passenger info is in an array", () => {
        expect(typeof new Passenger("Bob", 12, "16A")).toBe("object")
    })
    test("Should return a number from bag weight", () => {
        expect(typeof new Bag(12).weight).toBe("number")
    })
})