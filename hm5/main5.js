let Car = require("./car");
let Truck = require("./truck");
let Vehicle = require("./vehicle")

let nissan = new Car('Nissan', 2019, 200);
let volvo = new Truck('Volvo', 2020, 120);
nissan.displayInfo();
volvo.displayInfo();

Vehicle.testCar(nissan);