class Cars {
    constructor(manufacturer, colour) {
        this.manufacturer = manufacturer
        this.colour = colour
    }
}

carOne = new Cars ("Ford", "Blue");
carTwo = new Cars ("Ferrari", "Red");

console.log(carOne, carTwo);