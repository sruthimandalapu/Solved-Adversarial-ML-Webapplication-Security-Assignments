"use strict";
exports.__esModule = true;
exports.Product = exports.country = void 0;
exports.country = "india";
var Product = /** @class */ (function () {
    function Product(pcode, pname) {
        this.pcode = pcode;
        this.pname = pname;
    }
    Product.prototype.displayall = function () {
        console.log("Product id is: " + this.pcode + " Product name is: " + this.pname);
    };
    return Product;
}());
exports.Product = Product;
