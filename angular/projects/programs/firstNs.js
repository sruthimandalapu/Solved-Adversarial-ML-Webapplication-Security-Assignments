"use strict";
exports.__esModule = true;
exports.first = void 0;
var first;
(function (first) {
    var Train = /** @class */ (function () {
        function Train(trainID, trainName, speed) {
            this.trainID = trainID;
            this.trainName = trainName;
            this.speed = speed;
        }
        Train.prototype.coverDistance = function (hour) {
            console.log("The train " + this.trainName + " of id " + this.trainID + " has covered a distance of " + hour * this.speed);
        };
        return Train;
    }());
    first.Train = Train;
    var Driver = /** @class */ (function () {
        function Driver() {
        }
        Driver.prototype.driver = function () {
            console.log("Driver with Train");
        };
        return Driver;
    }());
    first.Driver = Driver;
})(first = exports.first || (exports.first = {}));
