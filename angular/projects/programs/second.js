var Sruthi1;
(function (Sruthi1) {
    class Bike {
        constructor(time) {
            this.time = time;
        }
        move() {
            console.log("Bike is moving");
        }
        calculatespeed(distance) {
            return distance / this.time;
        }
    }
    Sruthi1.Bike = Bike;
    class Mechanic {
        repair() {
            console.log("mechanic repair the vehicle");
        }
    }
    Sruthi1.Mechanic = Mechanic;
})(Sruthi1 || (Sruthi1 = {}));
///<reference path="./namespace_export1.ts"/>
let obj1 = new Sruthi1.Bike(10);
console.log("Vehicle moving at a speed of: " + obj1.calculatespeed(70));
obj1.move();
let obj2 = new Sruthi1.Mechanic();
obj2.repair();
