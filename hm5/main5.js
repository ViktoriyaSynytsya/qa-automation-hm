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
class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log('I am starting transporting passengers');
    }

    displayInfo() {
        console.log(`Name: ${this.model};
                    Year: ${this.year};
                    Max Speed: ${this.maxSpeed};
                    Type: ${this.type};`);
    }
}
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
let car = new Car('Nissan', 2019, 200);
let truck = new Truck('Volvo', 2020, 120);
car.displayInfo();
truck.displayInfo();

Vehicle.testCar(car);