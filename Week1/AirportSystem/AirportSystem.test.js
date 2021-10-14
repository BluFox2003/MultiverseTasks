const {Passenger} = require("./Passenger")
const {Bag} = require("./Bag")


describe("PassengerTests", () => {
    beforeAll(() => {
        P1 = new Passenger("Joe", 69420, "15C")
    })
    test("Should return if Passenger info is in an array", () => {
        expect(typeof P1).toBe("object")
    })
    test("Should return the name given", () => {
        expect(P1.name).toBe("Joe")
    })
    test("Should return the name as a string", () => {
        expect(typeof P1.name).toBe("string")
    })
    test("Should return flight number as an integer", () => {
        expect(typeof P1.flightNumber).toBe("number")
    })
    test("Should return the seat number given", () => {
        expect(P1.seatNumber).toBe("15C")
    })
    test("Should return seat number as a string", () => {
        expect(typeof P1.seatNumber).toBe("string")
    })
})

describe("BagTests", () => {
    test("Should return a number from bag weight", () => {
        expect(typeof new Bag(12).weight).toBe("number")
    })
    test("Should return the exact same number weight as passed", () =>{
        expect(new Bag(15).weight).toEqual(15)
    })
    test("Should Throw an error", () => {
        expect(() => new Bag()).toThrowError("Bag must have a weight")
    })
})