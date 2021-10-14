const {Passenger, Bag} = require("./AirportSystem")



describe("AirportTest", () => {
    beforeAll(() => {
        P1 = new Passenger("Joe", 69420, "15C")
    })
    test("Should return if Passenger info is in an array", () => {
        expect(typeof P1).toBe("object")
    })
    test("Should return a number from bag weight", () => {
        expect(typeof new Bag(12).weight).toBe("number")
    })
    test("Should return the exact same number weight as passed", () =>{
        expect(new Bag(15).weight).toEqual(15)
    })
})