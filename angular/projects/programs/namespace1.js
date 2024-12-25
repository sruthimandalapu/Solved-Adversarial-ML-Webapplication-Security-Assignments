"use strict";
exports.__esModule = true;
exports.Sruthi = void 0;
var Sruthi;
(function (Sruthi) {
    var Bus = /** @class */ (function () {
        function Bus(busID, busName) {
            this.busID = busID;
            this.busName = busName;
        }
        Bus.prototype.travelling = function () {
            return "Bus No: " + this.busID + " with the Bus Name of: " + this.busName;
        };
        return Bus;
    }());
    Sruthi.Bus = Bus;
    var Passenger = /** @class */ (function () {
        function Passenger() {
        }
        Passenger.prototype.booking = function () {
            return "Bus travel is booked by Passenger";
        };
        return Passenger;
    }());
    Sruthi.Passenger = Passenger;
})(Sruthi = exports.Sruthi || (exports.Sruthi = {}));
