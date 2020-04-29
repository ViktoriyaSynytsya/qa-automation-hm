class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }
    displayInfo() {
        console.log(`Name: ${this.model};
                    Year: ${this.year};
                    Max Speed: ${this.maxSpeed};`);
    }

    static testCar(car){
        console.log(`${car.model} works fine!`)
    }
}

module.exports = Vehicle;