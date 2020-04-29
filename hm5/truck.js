let Vehicle = require("./vehicle");

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportPeople() {
        console.log('I am starting transporting heavy containers');
    }

    displayInfo() {
        console.log(`Name: ${this.model};
                    Year: ${this.year};
                    Max Speed: ${this.maxSpeed};
                    Type: ${this.type};`);
    }
}
module.exports = Truck;