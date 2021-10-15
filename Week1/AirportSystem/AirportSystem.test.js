const {Passenger} = require("./Passenger")
const {Bag} = require("./Bag")
const {Aircraft} = require("./Aircraft")
const {Airport} = require("./Airport")
const {Crew} = require("./CrewMember")


describe("PassengerTests", () => {
    beforeAll(() => {
        Plane1 = new Aircraft("Boeing F/A-18", "ABC12", 2, "US Navy")
        P1 = new Passenger("Joe", "15C" ,6874)
        P1.addFlight(Plane1)
        P1Depart = new Airport("London Heathrow", "England", "LHR")
        P1Arrival = new Airport("Leeds Bradford Airport", "England", "EGNM")
        Plane1.addDeparture(P1Depart)
        Plane1.addArrival(P1Arrival)
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
    test("Should return the flight/aircraft model to be a string", () => {
        expect(typeof P1.flight[0].model).toBe("string")
    }) 
    test("Should return the flights destination code as EGNM", () => {
        expect(P1.flight[0].arrival[0].code).toBe("EGNM")
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

describe("AircraftTests", () => {
    beforeAll(() => {
    })
    test("Should return aircraft type as a string", () =>{
        expect(typeof Plane1.model).toBe("string")
    })
    test("Should return aircraft capacity as an int", () =>{
        expect(typeof Plane1.capacity).toBe("number")
    })
    test("Should return the departure airport as London Heathrow", () =>{
        expect(Plane1.departure[0].name).toBe("London Heathrow")
    })
    test("Should return a string saying where the plane is flying", () => {
        expect(typeof Aircraft.flyPlane(Aircraft.planes[1])).toBe("string")
    })
    test("Should return US Navy Boeing F/A-18 is flying from London Heathrow to Leeds Bradford Airport", () => {
        expect(Aircraft.flyPlane(Aircraft.planes[1])).toBe("US Navy Boeing F/A-18 is flying from London Heathrow to Leeds Bradford Airport")
    })
})

describe("AirportTests", () => {
    beforeAll(() => {
        Airport1 = new Airport("Chicago O'Hare Airport", "USA", "ORD")
    })
    test("Should return the code of the airport as ORD", () => {
        expect(Airport1.code).toBe("ORD")
    })
    test("Should return the type of the airport name as a string", () => {
        expect(typeof Airport1.name).toBe("string")
    })
})

describe("CrewTests", () => {
    beforeAll(() => {
        Crew1 = new Crew("Joe Doe", "Co-Pilot", "ABC123")
        Crew1.addFlight(Plane1)
    })
    test("Should return the name as Joe Doe", () => {
        expect(Crew1.name).toBe("Joe Doe")
    })
    test("Should return role as a string", () => {
        expect(typeof Crew1.role).toBe("string")
    })
    test("Should return the plane model as Boeing F/A-18", () => {
        expect(Crew1.flight[0].model).toBe("Boeing F/A-18")
    })
    test("Should return the aircraft capacity as an int", () => {
        expect(typeof Crew1.flight[0].capacity).toBe("number")
    })
})