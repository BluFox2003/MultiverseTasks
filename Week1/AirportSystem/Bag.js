class Bag {
    constructor(weight) {
        
        if (weight == undefined){
            throw new Error("Bag must have a weight")
        }
        else {
            this.weight = weight;
        }
    };
}

module.exports = {Bag}