class Airport {
    constructor(name, country, code){
        this.name = name
        this.country = country
        this.code = code
    }
    
}

const LBA = new Airport("Leeds Bradford Airport", "England", "EGNM")
console.log(LBA)

module.exports = {Airport}