class Vehicle{
    constructor(carModel,carYear,maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }
    displayInfo() {
        console.log(`Name: ${this.model};
                    Year: ${this.year};
                    Max Speed: ${this.maxSpeed};
                    Type: ${this.type};`);
    }
}
class Car extends Vehicle{
    constructor(carModel,carYear,maxSpeed) {
    super(carModel,carYear,maxSpeed);
    this.type = "car";
    }

transportPeople() {
    console.log('I am starting transporting passengers'); 
    }
}
class Truck extends Vehicle{
    constructor(carModel,carYear,maxSpeed) {
    super(carModel,carYear,maxSpeed);
    this.type = "truck";
    }

transportPeople() {
    console.log('I am starting transporting heavy containers'); 
    }
}
transportPeople(Car)