var Sruthi1;
(function (Sruthi1) {
    var Bike = /** @class */ (function () {
        function Bike(time) {
            this.time = time;
        }
        Bike.prototype.move = function () {
            console.log("Bike is moving");
        };
        Bike.prototype.calculatespeed = function (distance) {
            return distance / this.time;
        };
        return Bike;
    }());
    Sruthi1.Bike = Bike;
    var Mechanic = /** @class */ (function () {
        function Mechanic() {
        }
        Mechanic.prototype.repair = function () {
            console.log("mechanic repair the vehicle");
        };
        return Mechanic;
    }());
    Sruthi1.Mechanic = Mechanic;
})(Sruthi1 || (Sruthi1 = {}));
